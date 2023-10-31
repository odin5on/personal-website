import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  /* @ts-expect-error Server Component */
  <StrictMode>
    {/* @ts-expect-error Server Component */}
    <App />
  </StrictMode>,
);
