import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Plane } from "./plane/Plane";
import { ReactPlane } from "./react_plane/ReactPlane";
import { Virtuoso } from "./react_virtuoso/Virtuoso";
import { Root } from "./root/Root";
import "./App.css";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* ルートページ */}
                <Route
                    path="/"
                    element={<Root />}
                />

                {/* プレーン実装例ページ */}
                <Route
                    path="plane"
                    element={<Plane />}
                />

                {/* プレーンreact実装ページ */}
                <Route
                    path="planereact"
                    element={<ReactPlane />}
                />

                {/* react-virtuoso実装ページ */}
                <Route
                    path="virtuoso"
                    element={<Virtuoso />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
