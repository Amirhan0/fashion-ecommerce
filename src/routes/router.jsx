import { Routes, Route } from "react-router-dom";
import HomeClothingPage from "../pages/HomeClothingPage";
import ClothingDocumentation from "../pages/ClothingDocumentation";
function AppRouter() {
    return (
        <Routes>
        <Route path="/" element={<HomeClothingPage/>} />
        <Route path="/documentation" element={<ClothingDocumentation/>} />
        </Routes>
    )
}

export default AppRouter;