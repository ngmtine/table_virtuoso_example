import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Plane } from "./plane/Plane";
import { Virtuoso } from "./react_virtuoso/Virtuoso";
import "./App.css";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="plane"
                    element={<Plane />}
                />

                <Route
                    path="virtuoso"
                    element={<Virtuoso />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
