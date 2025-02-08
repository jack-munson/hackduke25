import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes"; // Import your router configuration
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    React.createElement(React.StrictMode, null, 
        React.createElement(RouterProvider, { router })
    )
);

reportWebVitals();