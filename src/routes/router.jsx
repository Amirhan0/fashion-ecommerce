import { Routes, Route } from "react-router-dom";
import HomeClothingPage from "../pages/HomeClothingPage";
import ClothingDocumentation from "../pages/ClothingDocumentation";
import AboutUsPage from "../pages/AboutUsPage";
import ShoppingCartPage from "../pages/ShoppingCartPage";
import  Collections  from "../pages/Collections";

function AppRouter() {
    return (
        <Routes>
        <Route path="/" element={<HomeClothingPage/>} />
        <Route path="/collections" element={<Collections/>} />
        <Route path="/documentation" element={<ClothingDocumentation/>} />
        <Route path="/about" element={<AboutUsPage/>} />
        <Route path="/cart" element={<ShoppingCartPage/>} />
        </Routes>
    )
}

export default AppRouter;