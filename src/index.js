import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

AOS.init({
  once: false,
  duration: 500,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
