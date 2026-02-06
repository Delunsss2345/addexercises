import { useEffect, useState } from "react";

const UseEffectDemo = () => {
    const [count, setCount] = useState(0);
    // Mỗi giây settime out chạy làm count tăng. re-render trang
    // dùng id để clear time out khi refresh trang sẽ ko bị 2 time out
    useEffect(() => {
        const id = setTimeout(() => {
            setCount(count + 1)
        }, 1000);

        return () => clearTimeout(id)
    }, [count])
    return <>
        <h1>Số giây tự tăng trong 1 giây {count}</h1>
    </>
}

export default UseEffectDemo;