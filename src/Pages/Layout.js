import { Outlet, Link } from "react-router-dom";
import './pages.css';
const Layout = () => {
    return (
        <div>

            <Outlet />
        </div>
    )
};

export default Layout;