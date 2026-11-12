import Header from './components/Header.jsx';
import Sidenav from './components/Sidenav.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contacts from './pages/Contacts.jsx';

const pages = { home: Home, about: About, contacts: Contacts };

export default function App({ page = 'home' }) {
    const Page = pages[page] || Home;

    return (
        <div className="layout">
            <Header activePage={page} />
            <Sidenav page={page} />
            <main className="main"><Page /></main>
            <Footer />
        </div>
    );
}
