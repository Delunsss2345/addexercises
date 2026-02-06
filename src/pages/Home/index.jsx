import { Link } from "react-router-dom";
import { demoRoutes } from "../../configs/routes";

export default function Home() {
    return (
        <div>
            <h1>React Hooks & CRUD Demo</h1>
            <ul>
                {demoRoutes.map((r) =>
                    r.path !== '/' ? <li key={r.path}>
                        <Link to={`${r.path}`}>{r.path}</Link>
                    </li>
                        : ""
                )}
            </ul>
        </div>
    );
}
