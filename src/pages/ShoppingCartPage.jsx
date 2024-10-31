import { useState } from "react";
import ClothingCartComponent from "../components/ClothingCartComponent";
import ClothingCartForm from '../components/ClothingCartForm'
const ShoppingCartPage = () => {
    const [carts, setCarts] = useState([]);
    return (
        <>
        <div className="flex flex-col md:flex-row">
        <ClothingCartComponent carts={carts} setCarts={setCarts}/>
        <ClothingCartForm setCarts={setCarts} />
        </div>
        </>
    )
}

export default ShoppingCartPage;    