import { FC, ChangeEvent } from "react";
import { RandomData } from "../util";
import { HandleUpdateArgs } from "./Table";

// セルコンポーネントのpropsの型
type TableCellProps = {
    keyName: string;
    rowData: RandomData;
    rowIdx: number;
    handleUpdate: ({ rowIdx, keyName, newValue }: HandleUpdateArgs) => void;
    initialData: RandomData[];
    realIdx: number;
};

// セルコンポーネント
export const TableCell: FC<TableCellProps> = ({ keyName, rowData, rowIdx, handleUpdate, initialData, realIdx }) => {
    // console.log("td!!"); // レンダリング確認用

    // セルの値取得
    const value = rowData[keyName];
    const initialValue = initialData[realIdx]?.[keyName] ?? "";

    // セル編集時イベント
    const handleCange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = typeof value === "boolean" ? e.target.checked : e.target.value;
        handleUpdate({ rowIdx, keyName, newValue });
    };

    // 初期値と現在値が異なる場合は背景色をピンクに設定
    const cellStyle = initialValue !== value ? { backgroundColor: "pink" } : {};

    return (
        <td style={cellStyle}>
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
