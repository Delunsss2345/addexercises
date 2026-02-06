import { useRef, useState } from "react";

export default function UseRefDemo() {
    const renderCountRef = useRef(0);
    const [value, setValue] = useState(0);

    renderCountRef.current += 1;

    return (
        <div>
            <p>Số lần trang này render: {renderCountRef.current}</p>

            <button onClick={() => setValue((v) => v + 1)}>
                Click (value: {value})
            </button>
        </div>
    );
}
