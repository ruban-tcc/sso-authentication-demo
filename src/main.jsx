
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import keycloak from "./keycloak";
import "./index.css";

async function startApplication() {
  try {
    await keycloak.init({
      onLoad: "check-sso",
    });

    ReactDOM.createRoot(document.getElementById("root")).render(
      <App />
    );
  } catch (error) {
    console.error("Keycloak initialization failed:", error);
  }
}

startApplication();
