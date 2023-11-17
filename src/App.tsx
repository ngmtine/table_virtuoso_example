import "./App.css";
import { Table } from "./Table";

function App() {
    const row = 100;
    const col = 50;
    return (
        <>
            <div>
                <span>行数：{row}</span>
                <span>{"　　　"}</span>
                <span>列数：{col}</span>
                <span>{"　　　"}</span>
                <span>要素数：{row * col}</span>
            </div>
            <Table
                row={row}
                col={col}
            />
        </>
    );
}

export default App;
