import ClothingCartComponent from "../components/ClothingCartComponent";
import ClothingCartForm from '../components/ClothingCartForm'
const ShoppingCartPage = () => {
    return (
        <>
        <div className="flex">
               <ClothingCartComponent/>
        <ClothingCartForm/>
        </div>
        </>
    )
}

export default ShoppingCartPage;