import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeContextProvider } from "./state/theme-context";
import "./index.css";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

ReactDOM.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>,
  document.getElementById("root")
);
