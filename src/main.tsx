import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import App from './App';
import { LangProvider } from './i18n';
import { ProgressProvider } from './progress';
import { ModeProvider } from './components/Latin';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LangProvider>
      <ModeProvider>
        <ProgressProvider>
          <App />
        </ProgressProvider>
      </ModeProvider>
    </LangProvider>
  </StrictMode>,
);
