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
    const [currentData, setCurrentData] = useState<RandomData[]>([]);
    const [initialData, setInitialData] = useState<RandomData[]>([]);

    // コンポーネントマウント時データ初期化
    useEffect(() => {
        const data = createRandomData(row, col);
        setCurrentData(data);
        setInitialData(data);
    }, []);

    // データ更新ハンドラ
    const handleUpdate = ({ rowIdx, keyName, newValue }: HandleUpdateArgs) => {
        const updatedData = [...currentData];
        updatedData[rowIdx] = { ...updatedData[rowIdx], [keyName]: newValue };
        setCurrentData(updatedData);
    };

    // ヘッダ部コンポーネント
    const fixedHeaderContent = () => {
        // memo: currentDataはクロージャでアクセス
        // prettier-ignore
        return (
            <tr>
                {currentData.length > 0 && Object.keys(currentData[0]).map((key, index) =>
                    <th key={index}>{key}</th>
                )}
            </tr>
        )
    };

    // ボディ部コンポーネント
    const itemContent = (idx: number, rowData: RandomData) => {
        return (
            <>
                {Object.keys(rowData).map((key) => (
                    <TableCell
                        key={key}
                        rowData={rowData}
                        rowIdx={idx}
                        keyName={key}
                        handleUpdate={handleUpdate} // memo: handleUpdateはクロージャでアクセス
                        initialData={initialData}
                    />
                ))}
            </>
        );
    };

    return (
        <div style={{ height: "90vh", width: "70vh" }}>
            <TableVirtuoso
                data={currentData}
                totalCount={currentData.length}
                fixedHeaderContent={fixedHeaderContent}
                itemContent={itemContent}
            ></TableVirtuoso>
        </div>
    );
};
