const sidebarContent = {
    about: [
        ['Summary', 'Student life, practice, and small web projects.'],
        ['Focus', 'HTML structure, CSS styling, and clean layouts.'],
    ],
    contacts: [
        ['Contact info', 'Available for questions and collaboration.'],
        ['Status', 'Currently studying and improving front-end skills.'],
    ],
};

export default function Sidenav({ page }) {
    return (
        <aside className="sidebar">
            {page === 'home' ? <>
                <div className="sidebar__block">
                    <h2 className="sidebar__title">Links</h2>
                    <ul className="sidebar__list">
                        <li className="sidebar__item"><a href="https://github.com/AlexKrivokorytov" target="_blank" rel="noopener noreferrer">GitHub profile</a></li>
                        <li className="sidebar__item"><a href="https://developer.mozilla.org/" target="_blank" rel="noopener noreferrer">MDN docs</a></li>
                        <li className="sidebar__item"><a href="https://open.spotify.com/user/31li5g626zbhc4ka5itm4pggdjoa" target="_blank" rel="noopener noreferrer">Spotify</a></li>
                    </ul>
                </div>
                <div className="sidebar__block">
                    <h2 className="sidebar__title">Notes</h2>
                    <p className="sidebar__text">Learning web basics and improving layout skills.</p>
                </div>
            </> : sidebarContent[page].map(([title, text]) => (
                <div className="sidebar__block" key={title}>
                    <h2 className="sidebar__title">{title}</h2>
                    <p className="sidebar__text">{text}</p>
                </div>
            ))}
        </aside>
    );
}
