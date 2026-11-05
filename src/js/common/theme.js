const THEME_STORAGE_KEY = 'theme';

export function initThemeToggle() {
    const button = document.querySelector('#theme-toggle');
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    let isDark = savedTheme === 'dark' || (savedTheme !== 'light' && prefersDark);

    const applyTheme = (selectedTheme = null) => {
        document.documentElement.classList.toggle('dark', isDark);
        if (selectedTheme) {
            document.documentElement.dataset.theme = selectedTheme;
        } else {
            document.documentElement.removeAttribute('data-theme');
        }

        if (button) {
            button.setAttribute('aria-pressed', String(isDark));
            button.setAttribute('aria-label', `Switch to ${isDark ? 'light' : 'dark'} theme`);
        }
    };

    const initialTheme = savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : null;
    applyTheme(initialTheme);

    if (button) {
        button.addEventListener('click', () => {
            isDark = !isDark;
            const selectedTheme = isDark ? 'dark' : 'light';
            localStorage.setItem(THEME_STORAGE_KEY, selectedTheme);
            applyTheme(selectedTheme);
        });
    }
}
