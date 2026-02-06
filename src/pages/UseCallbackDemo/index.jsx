import { useCallback, useState } from "react";
import UseMemoDemo from "../MemoDemo";


export default function UseCallbackDemo() {
    const [count, setCount] = useState(0);
    const [other, setOther] = useState(0);

    // Ghi nhớ hàm onAdd này để ko tạo lại 1 địa chỉ mới (tránh thay đổi componet child)
    // nhưng vẫn bị render nếu ko dùng memo, vì lí do cha thay đổi con cũng thay đổi
    const onAdd = useCallback(() => {
        setCount((c) => c + 1);
    }, []);
    // mỗi lần là 1 tham chiếu mới nên bị thay đổi 
    // const onAdd = () => {
    //     setCount((c) => c + 1);
    // };
    return (
        <div>
            <h2>UseCallBack + Memo Demo</h2>

            <p>con tăng: {count}</p>
            <p>cha tăng: {other}</p>

            <UseMemoDemo onAdd={onAdd} />

            <button onClick={() => setOther((x) => x + 1)}>
                Tăng từ cha
            </button>
        </div>
    );
}
