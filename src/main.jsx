import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Garantir que a div root tenha scroll habilitado para ver todos os cards
const rootElement = document.getElementById('root');
if (rootElement) {
  rootElement.style.background = 'transparent';
  rootElement.style.backgroundColor = 'transparent';
  rootElement.style.backgroundImage = 'none';
  rootElement.style.margin = '0';
  rootElement.style.padding = '0';
  rootElement.style.height = 'fit-content';
  rootElement.style.minHeight = 'auto';
  rootElement.style.maxHeight = 'none';
  rootElement.style.width = '100%';
  rootElement.style.overflow = 'visible';
  rootElement.style.overflowX = 'hidden';
  rootElement.style.overflowY = 'auto';
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
