import { useMemo, useRef, useState } from "react";

function congViecSieuNang(list, keyword) {
    return list.filter((x) => x.toLowerCase().includes(keyword.toLowerCase()));
}

export default function UseMemoDemo() {
    const [key, setKey] = useState("");
    const [state, setState] = useState(0);

    const data = useMemo(() => {
        return Array.from({ length: 2000 }, (_, i) => `item-${i}`);
    }, []);

    // const data = Array.from({ length: 2000 }, (_, i) => `item-${i}`);

    const computeCount = useRef(0);
    // Gỉa lập đây là công việc siêu nặng
    //Use memo sẽ giúp lưu kết quả tính toán, mà ko gây re-render lại không cần thiết
    const filtered = useMemo(() => {
        computeCount.current += 1;
        return congViecSieuNang(data, key);
    }, [data, key]);

    // computeCount.current += 1;
    // // Nếu không dùng useMemo
    // const filtered = (() => {
    //     computeCount.current += 1;
    //     return congViecSieuNang(data, key);
    // })();
    return (
        <div>
            <h2>UseMemo Demo</h2>

            <p>Tính filter chạy: {computeCount.current} lần</p>

            <input
                placeholder="keyword..."
                value={key}
                onChange={(e) => setKey(e.target.value)}
            />

            <button onClick={() => setState((x) => x + 1)}>
                Tăng state khác (state={state})
            </button>

            <p>Kết quả: {filtered.length} items</p>
        </div>
    );
}
