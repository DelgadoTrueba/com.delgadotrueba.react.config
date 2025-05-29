import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { HelloWorld } from './shell/view/HelloWorld';

const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);

const App = () => <HelloWorld/>

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
