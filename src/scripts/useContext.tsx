import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import UseContext from '../components/useContext/useContext';

const root = document.getElementById('react');

if (root) {
  createRoot(root).render(
    <StrictMode>
      <UseContext />
    </StrictMode>
  );
}
