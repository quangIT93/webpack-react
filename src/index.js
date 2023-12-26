import React from "react";

import { createRoot } from "react-dom/client";
// import { hydrateRoot } from "react-dom/client";
import "./styles.css";
import App from "./App.js";

// hydrateRoot(document.getElementById("root"), <App />);
const root = createRoot(document.getElementById("root"));
// root.render(<App />);

root.render(<App counter={10} />);
