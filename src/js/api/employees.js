const EMPLOYEES_URL = 'https://jsonplaceholder.typicode.com/users';

export async function loadEmployees(limit = 6, { signal } = {}) {
    const response = await fetch(`${EMPLOYEES_URL}?_limit=${limit}`, { signal });

    if (!response.ok) {
        throw new Error(`Failed to load employees (${response.status} ${response.statusText})`);
    }

    const users = await response.json();

    return users.map((user) => ({
        id: user.id,
        name: user.name,
        role: user.company?.name || 'Team member',
        photo: `https://picsum.photos/seed/${user.id}/320/220`,
        profileUrl: `${EMPLOYEES_URL}/${user.id}`,
    }));
}
