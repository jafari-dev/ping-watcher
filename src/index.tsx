import { createRoot } from 'react-dom/client';

import "./bootstrap.grid.min.css";
import './index.css';
import { Application } from './App';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(<Application />);
