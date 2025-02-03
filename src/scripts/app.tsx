import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import UseState from '../components/useState';

const root = document.getElementById('react');

if (root) {
  createRoot(root).render(
    <StrictMode>
      <UseState />
    </StrictMode>
  );
}
