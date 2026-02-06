import { memo } from "react";

const MemoDemo = memo(function MemoDemo({ onAdd }) {
    console.log("Child render");
    return <button onClick={onAdd}>Child: +1</button>;
})
export default MemoDemo;


// Trước khi dùng memo thì MemoDemo bị re-render liên tục vì ở cha gọi
// const MemoDemo = (function MemoDemo({ onAdd }) {
//     console.log("Child render");
//     return <button onClick={onAdd}>Child: +1</button>;
// })
// export default MemoDemo;


