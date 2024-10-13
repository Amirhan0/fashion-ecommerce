import { Routes, Route } from "react-router-dom";
import HomeClothingPage from "../pages/HomeClothingPage";
import AboutUsPage from "../pages/AboutUsPage";
import ShoppingCartPage from "../pages/ShoppingCartPage";
import  Collections  from "../pages/Collections";
import LoginPage from "../pages/LoginPage";
import RegistrPage from "../pages/RegistrPage";
import ContactPage from "../pages/ContactPage";
import  Profile  from "../pages/Profile";
import { ProductDetails } from "../pages/ProductDetails";
function AppRouter() {
    return (
        <Routes>
        <Route path="/" element={<HomeClothingPage/>} />
        <Route path="/collections" element={<Collections/>} />
        <Route path="/contacts" element={<ContactPage/>} />
        <Route path="/about" element={<AboutUsPage/>} />
        <Route path="/cart" element={<ShoppingCartPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/registration" element={<RegistrPage/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/products/:id" element={<ProductDetails/>} />
        </Routes>
    )
}

export default AppRouter;