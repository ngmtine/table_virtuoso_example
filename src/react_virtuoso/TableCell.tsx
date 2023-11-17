import React from "react";
import { RandomData } from "../util";
import { HandleUpdateArgs } from "./Table";

type TableCellProps = {
    keyName: string;
    rowData: RandomData;
    rowIdx: number;
    handleUpdate: ({ rowIdx, keyName, newValue }: HandleUpdateArgs) => void;
};

export const TableCell: React.FC<TableCellProps> = ({ keyName, rowData, rowIdx, handleUpdate }) => {
    // console.log("td!!"); // レンダリング確認用

    // セルの値取得
    const value = rowData[keyName];

    // セル編集時イベント
    const handleCange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = typeof value === "boolean" ? e.target.checked : e.target.value;
        handleUpdate({ rowIdx, keyName, newValue });
    };

    return (
        <td>
            {typeof value === "boolean" ?
                <input
                    type="checkbox"
                    checked={value as boolean}
                    onChange={handleCange}
                />
            :   <input
                    type="text"
                    value={value as string}
                    onChange={handleCange}
                />
            }
        </td>
    );
};
