import React from "react";
import { RandomData } from "../util";

type TableCellProps = {
    rowData: RandomData;
    keyName: string;
};

export const TableCell: React.FC<TableCellProps> = ({ rowData, keyName }) => {
    // console.log("td!!"); // レンダリング確認用

    const value = rowData[keyName];

    return (
        <td>
            {typeof value === "boolean" ?
                <input
                    type="checkbox"
                    checked={value as boolean}
                    readOnly
                />
            :   <input
                    type="text"
                    value={value as string}
                    readOnly
                />
            }
        </td>
    );
};
