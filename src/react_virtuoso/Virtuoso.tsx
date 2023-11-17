import { Table } from "./Table";
import { globalData } from "../globalData";
import { CellCounter } from "../component/CellCounter";

const comment = "react-virtuoso";

export const Virtuoso = () => {
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
