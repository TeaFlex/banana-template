import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

import "primereact/resources/primereact.min.css";

// PrimeIcons
import "primeicons/primeicons.css";

// Fontawesome icons
import "@fortawesome/fontawesome-free/css/all.min.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
