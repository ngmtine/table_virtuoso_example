import { Table } from "./Table";
import { globalData } from "../globalData";

export const Plane = () => {
    const { row, col } = globalData;

    return (
        <>
            <div>
                <span>行数：{row}</span>
                <span>{"　　　"}</span>
                <span>列数：{col}</span>
                <span>{"　　　"}</span>
                <span>要素数：{row * col}</span>
            </div>
            <Table
                row={row}
                col={col}
            />
        </>
    );
};
