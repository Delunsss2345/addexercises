import AsyncCrud from "../pages/AsyncCrud";
import FetchCrud from "../pages/FetchCrud";
import MemoDemo from "../pages/MemoDemo";
import UseCallbackDemo from "../pages/UseCallbackDemo";
import UseEffectDemo from "../pages/UseEffectDemo";
import UseMemoDemo from "../pages/UseMemoDemo";
import UseReducerDemo from "../pages/UseReducerDemo";
import UseRefDemo from "../pages/UseRefDemo";
import UseStateDemo from "../pages/UseStateDemo";

export const demoRoutes = [
    { path: "use-state", element: <UseStateDemo /> },
    { path: "use-effect", element: <UseEffectDemo /> },
    { path: "use-reducer", element: <UseReducerDemo /> },
    { path: "use-ref", element: <UseRefDemo /> },
    { path: "use-memo", element: <UseMemoDemo /> },
    { path: "memo", element: <MemoDemo /> },
    { path: "use-callback", element: <UseCallbackDemo /> },
    { path: "fetch-todo", element: <FetchCrud /> },
    { path: "axios-todo", element: <UseCallbackDemo /> },
    { path: "async-todo", element: <AsyncCrud /> },

];

