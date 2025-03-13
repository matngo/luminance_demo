import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router";
import { App } from "./App";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
    <App />
  </HashRouter>
);
