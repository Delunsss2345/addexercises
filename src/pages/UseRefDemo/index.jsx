import { useEffect, useRef, useState } from "react";

export default function UseRefDemo() {
    const inputRef = useRef(null)
    const renderCountRef = useRef(0);
    const [value, setValue] = useState(0);

    renderCountRef.current += 1; // thể hiện ref không làm re-render mà do setState làm re-render

    useEffect(() => {
        inputRef.current?.focus();
    }, [])

    return (
        <div>
            {/* Thể hiện ref có thể dùng cho 1 dom mới vô sẽ focus */}
            <input type="text" ref={inputRef} />
            <p>Số lần trang này render: {renderCountRef.current}</p>

            <button onClick={() => setValue((v) => v + 1)}>
                Click (value: {value})
            </button>
        </div>
    );
}
