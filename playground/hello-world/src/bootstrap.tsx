import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';

const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);

const App = () => <h1>hola</h1>

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
