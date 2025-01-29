import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Pages/Home";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
    <HelmetProvider>
        <Home />
    </HelmetProvider>
);
