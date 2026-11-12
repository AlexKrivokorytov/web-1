import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/tw.css';
import './styles/main.scss';

createRoot(document.getElementById('root')).render(<App page={document.body.dataset.page} />);
