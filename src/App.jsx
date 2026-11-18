import { useState } from 'react';
import Header from './components/Header.jsx';
import Sidenav from './components/Sidenav.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contacts from './pages/Contacts.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';

const pages = { home: Home, about: About, contacts: Contacts };

export default function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const Page = pages[currentPage] || Home;

    return (
        <ThemeProvider>
            <div className="layout">
                <Header activePage={currentPage} onNavigate={setCurrentPage} />
                <Sidenav page={currentPage} />
                <main className="main"><Page /></main>
                <Footer />
            </div>
        </ThemeProvider>
    );
}
