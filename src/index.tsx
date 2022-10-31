import { createRoot } from 'react-dom/client';
import './index.css';
import { Application } from './App';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(<Application />);
