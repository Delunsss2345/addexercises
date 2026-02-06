import { useState } from "react";

export default function UseStateDemo() {
    // Mỗi lần tăng vẫn lưu count vào useState của react rồi re-render lại
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount((c) => c + 1)}>+1</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}
