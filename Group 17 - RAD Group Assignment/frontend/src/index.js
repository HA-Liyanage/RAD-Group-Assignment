import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { AccountsContextProvider } from "./context/AccountContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <AccountsContextProvider>
        <App />
      </AccountsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
