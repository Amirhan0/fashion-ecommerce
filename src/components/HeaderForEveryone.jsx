import { useNavigate } from "react-router-dom";
import LogRegBtn from "./LogRegBtn";


const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-10 flex items-center justify-between py-32">
      <div className="flex text-[20px] items-center">
        <img src="/logo.svg" alt="Logo" className="h-[30px]" />
        <div className="flex justify-between ml-4">
          <div className="navButton">
            <span
              onClick={() => navigate("/")}
              className="hover:text-[#D1C12B] cursor-pointer"
            >
              ГЛАВНАЯ
            </span>
          </div>
          <div className="navButton">
            <span
              onClick={() => navigate("/collections")}
              className="hover:text-[#D1C12B] cursor-pointer"
            >
              КОЛЛЕКЦИИ
            </span>
          </div>
          <div className="navButton">
            <span
              onClick={() => navigate("/about")}
              className="hover:text-[#D1C12B] cursor-pointer"
            >
              О НАС
            </span>
          </div>
          <div className="navButton">
            <span
              onClick={() => navigate("/contacts")}
              className="hover:text-[#D1C12B] cursor-pointer"
            >
              КОНТАКТЫ
            </span>
          </div>
          <div className="navButton">
            <span
              onClick={() => navigate("/cart")}
              className="hover:text-[#D1C12B] cursor-pointer"
            >
              КОРЗИНА
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-10 items-center">
        <div>
          <img src="/telegram.svg" alt="Telegram" className="cursor-pointer" />
        </div>
        <LogRegBtn/>
      </div>
    </div>
  );
};

export default Header;
