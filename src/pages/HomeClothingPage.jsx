import ClothingForEveryone from "../components/ClothingForEveryone ";
import { Current } from "../components/current";
import ForThisSeason from "../components/ForThisSeason";
import MyGoogleMapForEveryone from "../UI/MyGoogleMapForEveryone";



const HomeClothingPage = () => {
  return (
    <>
      <div>
        <ClothingForEveryone />
        <ForThisSeason />
        <Current />
        <MyGoogleMapForEveryone/>
      </div>
    </>
  );
};

export default HomeClothingPage;
