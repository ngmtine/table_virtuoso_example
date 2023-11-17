import { Table } from "./Table";
import { globalData } from "../globalData";
import { CellCounter } from "../component/CellCounter";

const comment =
    "ライブラリ不使用 セル個別で状態を持たずに、親コンポーネントで定義した更新関数をセル更新時に叩く感じ そのためセル更新の度全セル再描画される";

export const Plane = () => {
    const { row, col } = globalData;

    return (
        <>
            <div>{comment}</div>
            <CellCounter
                row={row}
                col={col}
            />
            <Table
                row={row}
                col={col}
            />
        </>
    );
};
