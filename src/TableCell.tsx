import React, { useState } from "react";

interface PropsType {
    initialValue: string | boolean;
    type: "text" | "checkbox";
    onUpdate: (newValue: string | boolean) => void;
}

export const TableCell: React.FC<PropsType> = ({ initialValue, type, onUpdate }) => {
    console.log("cell!"); // レンダリング確認用

    const [value, setValue] = useState(initialValue);

    // セル編集ハンドラ
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = type === "text" ? e.target.value : e.target.checked;
        setValue(newValue);
        onUpdate(newValue);
    };

    return (
        <td>
            {type === "text" ?
                <input
                    type="text"
                    value={value as string}
                    onChange={handleChange}
                />
            :   <input
                    type="checkbox"
                    checked={value as boolean}
                    onChange={handleChange}
                />
            }
        </td>
    );
};
