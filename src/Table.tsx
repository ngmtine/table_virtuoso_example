import { useState, useEffect, FC } from "react";
import { TableCell } from "./TableCell";
import { RandomData, createRandomData } from "./util";
import "./style.css";

type PropsType = {
    row: number;
    col: number;
};

export const Table: FC<PropsType> = ({ row, col }) => {
    const [data, setData] = useState<RandomData[]>([]);

    // コンポーネントマウント時データ初期化
    useEffect(() => {
        setData(createRandomData(row, col)); // 行数、チェックボックス数
    }, []);

    // セルのvalueのアップデートハンドラ
    const handleUpdate = (rowIndex: number, key: string, newValue: string | boolean) => {
        const updatedData = [...data];
        updatedData[rowIndex] = { ...updatedData[rowIndex], [key]: newValue };
        setData(updatedData);
    };

    return (
        <table>
            <thead>
                <tr>{data.length > 0 && Object.keys(data[0]).map((key, index) => <th key={index}>{key}</th>)}</tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {Object.keys(row).map((key, index) => (
                            <TableCell
                                key={index}
                                initialValue={row[key]}
                                type={key === "name" ? "text" : "checkbox"}
                                onUpdate={(newValue) => handleUpdate(rowIndex, key, newValue)}
                            />
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
