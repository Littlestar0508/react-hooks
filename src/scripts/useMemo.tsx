import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import UseMemo from './../components/useMemo/useMemo';

const root = document.getElementById('react');

if (root) {
  createRoot(root).render(
    <StrictMode>
      <UseMemo />
    </StrictMode>
  );
}
