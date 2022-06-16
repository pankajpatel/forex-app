import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import "currency-flags/dist/currency-flags.min.css";
import "./index.css";

import { App } from "./components/App/App";

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
