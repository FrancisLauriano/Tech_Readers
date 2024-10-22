import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Theme } from "./GlobalStyle.jsx";
import { ThemeProvider } from "styled-components";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ThemeProvider theme={Theme}>
            <App />
        </ThemeProvider>
    </StrictMode>
);






