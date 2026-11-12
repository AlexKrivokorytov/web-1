import { useEffect } from 'react';
import { initThemeToggle } from '../js/common/theme.js';

const links = [['home', 'Home', 'index.html'], ['about', 'About', 'about.html'], ['contacts', 'Contacts', 'contacts.html']];

export default function Header({ activePage }) {
    useEffect(() => initThemeToggle(), []);

    return (
        <header className="header">
            <h1 className="header__title">Student Website</h1>
            <div className="header__controls">
                <nav className="navigation">
                    <ul className="navigation__list">
                        {links.map(([page, label, href]) => (
                            <li key={page}>
                                <a className={`navigation__link${activePage === page ? ' navigation__link--active' : ''}`} href={href}>{label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <button className="theme-toggle" id="theme-toggle" type="button" aria-label="Switch to dark theme" aria-pressed="false">
                    <svg className="h-5 w-5 dark:hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <circle cx="12" cy="12" r="4" />
                        <path strokeLinecap="round" d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
                    </svg>
                    <svg className="hidden h-5 w-5 dark:block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.5 15.5A8.5 8.5 0 0 1 8.5 3.5 8.5 8.5 0 1 0 20.5 15.5Z" />
                    </svg>
                </button>
            </div>
        </header>
    );
}
