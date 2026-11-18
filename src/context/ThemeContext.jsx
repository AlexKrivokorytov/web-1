import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('dark');
    const value = useMemo(() => ({
        theme,
        toggleTheme: () => setTheme((current) => current === 'light' ? 'dark' : 'light'),
    }), [theme]);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        document.documentElement.classList.toggle('dark', theme === 'dark');

        return () => {
            document.documentElement.removeAttribute('data-theme');
            document.documentElement.classList.remove('dark');
        };
    }, [theme]);

    return (
        <ThemeContext.Provider value={value}>
            <div className="app-theme-root" data-theme={theme}>{children}</div>
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be used inside ThemeProvider');
    return context;
}
