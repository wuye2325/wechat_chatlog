import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Stagewise dev-tool 集成，仅开发环境
if (process.env.NODE_ENV === "development") {
  import("@stagewise/toolbar-react").then(({ StagewiseToolbar }) => {
    const config = { plugins: [] };
    const toolbarRoot = document.createElement("div");
    toolbarRoot.id = "stagewise-toolbar-root";
    document.body.appendChild(toolbarRoot);
    import("react-dom/client").then(({ createRoot }) => {
      createRoot(toolbarRoot).render(
        <StagewiseToolbar config={config} />
      );
    });
  });
} 