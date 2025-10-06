import { HashRouter, Route, Routes } from "react-router";
import Home from "@/pages/Home";
import DefaultLayout from "@/layouts/DefaultLayout";
import Loading from "../Loading";
import ProductList from "@/pages/ProductList";
import ProductDetail from "@/pages/ProductDetail";

const AppRoutes = () => {


    return (
        <HashRouter>
            <Loading />

            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route index path="/" element={<Home />} />
                    <Route path="/products" element={ <ProductList />} />
                    <Route path="/products/:slug" element={ <ProductDetail />} />
                </Route>
            </Routes>
        </HashRouter>
    )
};

export default AppRoutes;
