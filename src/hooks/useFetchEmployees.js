import { useEffect, useState } from 'react';

export default function useFetchEmployees(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        (async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(url, { signal: controller.signal });
                const contentType = response.headers.get('Content-Type') || '';
                if (!response.ok || !contentType.includes('application/json')) {
                    throw new Error('Failed to load employees');
                }
                setData(await response.json());
            } catch (requestError) {
                if (requestError.name !== 'AbortError') setError(requestError);
            } finally {
                if (!controller.signal.aborted) setLoading(false);
            }
        })();

        return () => controller.abort();
    }, [url]);

    return { data, loading, error };
}
