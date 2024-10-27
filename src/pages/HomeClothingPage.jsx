import ClothingForEveryone from "../components/ClothingForEveryone ";
import { Current } from "../components/Current";
import ForThisSeason from "../components/ForThisSeason";
import MyGoogleMapForEveryone from "../UI/MyGoogleMapForEveryone";



const HomeClothingPage = () => {
  return (
    <>
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <ClothingForEveryone />
        <ForThisSeason />
        <Current />
        <MyGoogleMapForEveryone/>
      </div>
    </>
  );
};

export default HomeClothingPage;
