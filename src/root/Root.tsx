export const Root = () => {
    return (
        <>
            <div>るーとぺーじ</div>
            <div>
                <ul>
                    <li style={{ textAlign: "left" }}>
                        <a href="/plane">プレーンテーブル実装例（reactも仮想スクロールライブラリも不使用）</a>
                    </li>
                    <li style={{ textAlign: "left" }}>
                        <a href="/planereact">プレーンなreactでのテーブル実装例（仮想スクロールライブラリ不使用）</a>
                    </li>
                    <li style={{ textAlign: "left" }}>
                        <a href="/virtuoso">rect-virtuoso 実装例</a>
                    </li>
                </ul>
            </div>
        </>
    );
};
