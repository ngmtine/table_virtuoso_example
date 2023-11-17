import { Table } from "./Table";
import { globalData } from "../globalData";
import { CellCounter } from "../component/CellCounter";

export const Plane = () => {
    const { row, col } = globalData;

    return (
        <>
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
