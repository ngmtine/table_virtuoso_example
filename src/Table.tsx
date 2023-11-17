import { useState, useEffect, FC } from "react";
import { RandomData, createRandomData } from "./util";
import "./style.css";

const Table: FC = () => {
    const [data, setData] = useState<RandomData[]>([]);

    useEffect(() => {
        setData(createRandomData(500, 50)); // 行数、チェックボックス数
    }, []);

    return (
        <table>
            <thead>
                <tr>{data.length > 0 && Object.keys(data[0]).map((key, index) => <th key={index}>{key}</th>)}</tr>
            </thead>
            <tbody>
                {data.map((item, rowIndex) => (
                    <tr key={rowIndex}>
                        {Object.keys(item).map((key, index) => (
                            <td key={index}>{key === "name" ? <input type="text" value={item[key] as string} readOnly /> : <input type="checkbox" checked={item[key] as boolean} readOnly />}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
