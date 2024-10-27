import { useNavigate } from "react-router-dom";
import ButtonForEveryone from "../UI/ButtonForEveryone";

const ForThisSeason = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col justify-center mt-24 sm:mt-32 lg:mt-52 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="leading-none relative  sm:mb-7 flex items-center h-[100px] sm:h-[130px] lg:h-[160px]">
          <h2 className="font-uindbase text-white absolute text-[50px] sm:text-[70px] lg:text-[100px] z-10 translate-y-[5px] sm:translate-y-[10px]">
            НА ЭТОТ СЕЗОН
          </h2>
          <h2 className="font-usuallybold text-[#1F252D] absolute text-[50px] sm:text-[100px] lg:text-[140px]">
            НА ЭТОТ СЕЗОН
          </h2>
        </div>
        <div className="relative flex justify-center">
          <img
            src="/forThisSeason.svg"
            alt="Season Image"
            className="h-[300px] sm:h-[400px] lg:h-[587px]"
          />
          <div className="absolute hidden sm:block lg:block translate-y-36 sm:translate-y-48 lg:translate-y-72 translate-x-10 sm:translate-x-48 lg:translate-x-96 flex flex-col gap-4 items-center justify-center w-[260px] sm:w-[280px] lg:w-[320px] text-center">
            <p className="text-white font-uindbase text-sm sm:text-base lg:text-lg">
              Это воплощение элегантности, стиля и современности. Наша коллекция
              разработана с акцентом на уникальность и индивидуальность, чтобы
              каждый мог найти в ней что-то для себя.
            </p>
            <ButtonForEveryone
              buttonText="КАТАЛОГ"
              onClick={() => navigate("/collections")}
            />
          </div>
        </div>
        <div className=" sm:mt-4 flex gap-2 sm:gap-4 lg:gap-7 justify-center">
          <div className="w-[60px] sm:w-[100px] lg:w-[160px] border-2 border-white"></div>
          <div className="w-[60px] sm:w-[100px] lg:w-[160px] border-2 border-white"></div>
          <div className="w-[60px] sm:w-[100px] lg:w-[160px] border-2 border-white"></div>
          <div className="w-[60px] sm:w-[100px] lg:w-[160px] border-2 border-white"></div>
          <div className="w-[60px] sm:w-[100px] lg:w-[160px] border-2  border-white"></div>
        </div>
      </div>
    </>
  );
};

export default ForThisSeason;
