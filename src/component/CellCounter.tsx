import { FC } from "react";

type PropsType = {
    row: number;
    col: number;
};

export const CellCounter: FC<PropsType> = ({ row, col }) => {
    return (
        <div>
            <span>行数：{row}</span>
            <span>{"　　　"}</span>
            <span>列数：{col}</span>
            <span>{"　　　"}</span>
            <span>要素数：{row * col}</span>
        </div>
    );
};
