import { HashRouter, Route, Routes } from "react-router";
import Home from "@/pages/Home";
import DefaultLayout from "@/layouts/DefaultLayout";

const AppRoutes = () => {


    return (
        <HashRouter>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route index path="/" element={<Home />} />
                </Route>
            </Routes>
        </HashRouter>
    )
};

export default AppRoutes;
