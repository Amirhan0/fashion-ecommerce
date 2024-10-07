import { Routes, Route } from "react-router-dom";
import HomeClothingPage from "../pages/HomeClothingPage";
import ClothingDocumentation from "../pages/ClothingDocumentation";
import AboutUsPage from "../pages/AboutUsPage";
function AppRouter() {
    return (
        <Routes>
        <Route path="/" element={<HomeClothingPage/>} />
        <Route path="/documentation" element={<ClothingDocumentation/>} />
        <Route path="/about" element={<AboutUsPage/>} />
        </Routes>
    )
}

export default AppRouter;