import { useState, useEffect, FC } from "react";
import { RandomData, createRandomData } from "../util";
import { TableVirtuoso } from "react-virtuoso";
import { TableCell } from "./TableCell";
import "../style.css";

type PropsType = {
    row: number;
    col: number;
};

// ボディ部コンポーネント
const itemContent = (_: number, rowData: RandomData) => {
    return (
        <>
            {Object.keys(rowData).map((key) => (
                <TableCell
                    key={key}
                    keyName={key}
                    rowData={rowData}
                />
            ))}
        </>
    );
};

export const Table: FC<PropsType> = ({ row, col }) => {
    const [data, setData] = useState<RandomData[]>([]);

    // コンポーネントマウント時データ初期化
    useEffect(() => {
        setData(createRandomData(row, col)); // 行数、チェックボックス数
    }, []);

    // ヘッダ部コンポーネント
    // memo: dataにはクロージャでアクセス
    const fixedHeaderContent = () => {
        // prettier-ignore
        return (
        <tr>
            {data.length > 0 && Object.keys(data[0]).map((key, index) =>
                <th key={index}>{key}</th>
            )}
        </tr>
    )
    };

    // // セルのvalueのアップデートハンドラ
    // const handleUpdate = (rowIndex: number, key: string, newValue: string | boolean) => {
    //     const updatedData = [...data];
    //     updatedData[rowIndex] = { ...updatedData[rowIndex], [key]: newValue };
    //     setData(updatedData);
    // };

    return (
        <div style={{ height: "90vh", width: "70vh" }}>
            <TableVirtuoso
                data={data}
                totalCount={data.length}
                fixedHeaderContent={fixedHeaderContent}
                itemContent={itemContent}
            ></TableVirtuoso>
        </div>
    );
};
