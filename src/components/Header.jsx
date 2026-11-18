import { useTheme } from '../context/ThemeContext.jsx';

const links = [['home', 'Home'], ['about', 'About'], ['contacts', 'Contacts']];

export default function Header({ activePage, onNavigate }) {
    const { theme, toggleTheme } = useTheme();

    const go = (event, page) => {
        event.preventDefault();
        onNavigate(page);
    };

    return (
        <header className="header">
            <h1 className="header__title">Student Website</h1>
            <div className="header__controls">
                <nav className="navigation">
                    <ul className="navigation__list">
                        {links.map(([page, label]) => (
                            <li key={page}>
                                <a className={`navigation__link${activePage === page ? ' navigation__link--active' : ''}`} href={`#${page}`} onClick={(event) => go(event, page)}>{label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <button className="theme-toggle" type="button" aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`} aria-pressed={theme === 'dark'} onClick={toggleTheme}>
                    {theme === 'light' ? 'Dark' : 'Light'}
                </button>
            </div>
        </header>
    );
}
