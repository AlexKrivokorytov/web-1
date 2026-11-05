import { initThemeToggle } from './js/common/theme.js';
import './styles/tw.css';
import './styles/main.scss';

initThemeToggle();

if (document.body.dataset.page === 'about') {
    void import('./js/app/aboutPage.js')
        .then(({ initAboutPage }) => initAboutPage())
        .catch((error) => {
            console.error('Failed to initialize the About page.', error);
        });
}
