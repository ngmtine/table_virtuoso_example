import React from "react";

interface TableCellProps {
    value: string | boolean;
    type: "text" | "checkbox";
}

export const TableCell: React.FC<TableCellProps> = ({ value, type }) => {
    return (
        <td>
            {type === "text" ?
                <input
                    type="text"
                    value={value as string}
                    readOnly
                />
            :   <input
                    type="checkbox"
                    checked={value as boolean}
                    readOnly
                />
            }
        </td>
    );
};
