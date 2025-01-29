import Home from "./Pages/Home";
import HelmetProvider from "react-helmet";

export default function App() {
    return (
        <HelmetProvider>
            <Home />
        </HelmetProvider>
    );
}
