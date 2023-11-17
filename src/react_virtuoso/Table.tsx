import { useState, useEffect, FC } from "react";
import { RandomData, createRandomData } from "../util";
import { TableVirtuoso } from "react-virtuoso";
import { TableCell } from "./TableCell";
import "../style.css";

// テーブルコンポーネントのpropsの型
type PropsType = {
    row: number; // 行数
    col: number; // 列数
};

// HandleUpdateの引数の型
export type HandleUpdateArgs = {
    rowIdx: number;
    keyName: string;
    newValue: string | boolean;
};

// テーブルコンポーネント
export const Table: FC<PropsType> = ({ row, col }) => {
    const [data, setData] = useState<RandomData[]>([]);

    // コンポーネントマウント時データ初期化
    useEffect(() => {
        setData(createRandomData(row, col));
    }, []);

    // データ更新ハンドラ
    const handleUpdate = ({ rowIdx, keyName, newValue }: HandleUpdateArgs) => {
        const updatedData = [...data];
        updatedData[rowIdx] = { ...updatedData[rowIdx], [keyName]: newValue };
        setData(updatedData);
    };

    // ヘッダ部コンポーネント
    // memo: dataはクロージャでアクセス
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

    // ボディ部コンポーネント
    // memo: handleUpdateはクロージャでアクセス
    const itemContent = (idx: number, rowData: RandomData) => {
        return (
            <>
                {Object.keys(rowData).map((key) => (
                    <TableCell
                        key={key}
                        rowData={rowData}
                        rowIdx={idx}
                        keyName={key}
                        handleUpdate={handleUpdate}
                    />
                ))}
            </>
        );
    };

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
