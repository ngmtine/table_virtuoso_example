import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Plane } from "./plane/Plane";
import "./App.css";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="plane"
                    element={<Plane />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
