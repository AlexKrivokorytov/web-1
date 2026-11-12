import { useState } from 'react';
import news from '../data/news.js';
import CardGrid from '../components/CardGrid.jsx';
import Toggle from '../components/Toggle.jsx';

export default function Home() {
    const [compact, setCompact] = useState(false);

    return (
        <>
            <div id="news" className="section-heading">
                <h2>Latest News</h2>
                <Toggle compact={compact} onToggle={() => setCompact((value) => !value)} />
            </div>
            <CardGrid items={news} compact={compact} />
        </>
    );
}
