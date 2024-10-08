import ClothingCartComponent from "../components/ClothingCartComponent";
import FooterForEveryone from "../components/FooterForEveryone";
import ClothingCartForm from '../components/ClothingCartForm'
const ShoppingCartPage = () => {
    return (
        <>
        <div className="flex">
               <ClothingCartComponent/>
        <ClothingCartForm/>
        </div>
     
        <FooterForEveryone/>
        </>
    )
}

export default ShoppingCartPage;