import { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "inc":
            return state + 1;
        case "dec":
            return state - 1;
        case "reset":
            return 0;
        default:
            return state;
    }
}

export default function UseReducerDemo() {
    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <h3>useReducer Áp dụng khi muốn quản lí state không còn là đơn giản, mà dùng các loại kiểu
                switch , áp dụng nhiều với redux
            </h3>
            <p>Count: {count}</p>

            <button onClick={() => dispatch({ type: "dec" })}>-1</button>
            <button onClick={() => dispatch({ type: "inc" })}>+1</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>
    );
}
