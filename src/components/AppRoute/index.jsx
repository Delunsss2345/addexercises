import { useRoutes } from "react-router";
import { demoRoutes } from "../../configs/routes.jsx";

const AppRoute = () => {
    return useRoutes(demoRoutes);
}

export default AppRoute;