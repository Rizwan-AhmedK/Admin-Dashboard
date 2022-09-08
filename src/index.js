import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import NoPage from "./Pages/NoPage";
import Complaints from "./Pages/Complaints";
import UserAction from "./Pages/UserAction";
import ServiceAction from "./Pages/ServiceAction";
import ComplainAction from "./Pages/ComplainAction";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="Users" element={<Blog />} />
                    <Route path="ServiceDetails" element={<Contact />} />
                    <Route path="Complaints" element={<Complaints />} />
                    <Route path="*" element={<NoPage />} />
                    <Route path="UserAction" element={<UserAction />} />
                    <Route path="ServiceAction" element={<ServiceAction />} />
                    <Route path="ComplainAction" element={<ComplainAction />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);