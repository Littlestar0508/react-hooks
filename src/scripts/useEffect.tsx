import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import UseEffect from '../components/useEffect/useEffect';

const root = document.getElementById('react');

if (root) {
  createRoot(root).render(
    <StrictMode>
      <UseEffect />
    </StrictMode>
  );
}
