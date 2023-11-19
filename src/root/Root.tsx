import { useState, CSSProperties } from "react";
import { ReactPlane } from "../react_plane/ReactPlane";
import { ReactVirtuoso } from "../react_virtuoso/ReactVirtuoso";

type PageType = "Menu" | "ReactPlane" | "ReactVirtuoso";

const Menu = ({ setPage }: { setPage: (page: PageType) => void }) => {
    const clickableStyle: CSSProperties = {
        textAlign: "left",
        cursor: "pointer",
        textDecoration: "underline",
    };

    return (
        <>
            <div>るーとぺーじ</div>
            <ul>
                <li
                    style={clickableStyle}
                    onClick={() => setPage("ReactPlane")}
                >
                    プレーンなreactでのテーブル実装例（仮想スクロールライブラリ不使用）
                </li>
                <li
                    style={clickableStyle}
                    onClick={() => setPage("ReactVirtuoso")}
                >
                    rect-virtuoso 実装例
                </li>
            </ul>
        </>
    );
};

export const Root = () => {
    const [page, setPage] = useState<PageType>("Menu");

    if (page === "Menu") {
        return <Menu setPage={setPage} />;
    } else if (page === "ReactPlane") {
        return <ReactPlane />;
    } else if (page === "ReactVirtuoso") {
        return <ReactVirtuoso />;
    }
};
