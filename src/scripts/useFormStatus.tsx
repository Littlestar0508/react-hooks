import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import UseFormStatus from '../components/useFormStatus/useFormStatus';

const root = document.getElementById('react');

if (root) {
  createRoot(root).render(
    <StrictMode>
      <UseFormStatus />
    </StrictMode>
  );
}
