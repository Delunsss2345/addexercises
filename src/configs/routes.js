import UserCallbackDemo from "@/pages/UseCallbackDemo";
import UseEffectDemo from "@/pages/UseEffectDemo";
import UseMemoDemo from "@/pages/UseMemoDemo";
import UseReducerDemo from "@/pages/UseReducerDemo";
import UseStateDemo from "@/pages/UseStateDemo";

export const demoRoutes = [
    { path: "use-state", name: "UseStateDemo", element: <UseStateDemo /> },
    { path: "use-effect", name: "UseEffectDemo", element: <UseEffectDemo /> },
    { path: "use-reducer", name: "UseReducerDemo", element: <UseReducerDemo /> },
    { path: "use-ref", name: "UseRefDemo", element: <UseRefDemo /> },
    { path: "use-memo", name: "UseMemoDemo", element: <UseMemoDemo /> },
    { path: "use-callback", name: "UseCallbackDemo", element: <UserCallbackDemo /> },
];


