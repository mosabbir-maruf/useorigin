import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ReactLenis } from "lenis/react";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ReactLenis
          root
          options={{ lerp: 0.1, smoothWheel: true, syncTouch: false }}
        >
          <App />
        </ReactLenis>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
);
