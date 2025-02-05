import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import UseRef from './../components/useRef/useRef';

const root = document.getElementById('react');

if (root) {
  createRoot(root).render(
    <StrictMode>
      <UseRef />
    </StrictMode>
  );
}
