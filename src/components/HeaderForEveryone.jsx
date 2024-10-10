import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogRegBtn from "./LogRegBtn";

const Header = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="pt-10 flex items-center justify-between py-32 px-4 sm:px-10">
      <div className="flex text-[20px] items-center">
        <img src="/logo.svg" alt="Logo" className="h-[30px]" />
      </div>
      <div className="sm:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className="hidden sm:flex space-x-4 text-[20px]">
        <span
          onClick={() => navigate("/")}
          className="navButton hover:text-[#D1C12B] cursor-pointer"
        >
          ГЛАВНАЯ
        </span>
        <span
          onClick={() => navigate("/collections")}
          className="navButton hover:text-[#D1C12B] cursor-pointer"
        >
          КОЛЛЕКЦИИ
        </span>
        <span
          onClick={() => navigate("/about")}
          className="navButton hover:text-[#D1C12B] cursor-pointer"
        >
          О НАС
        </span>
        <span
          onClick={() => navigate("/contacts")}
          className="navButton hover:text-[#D1C12B] cursor-pointer"
        >
          КОНТАКТЫ
        </span>
        <span
          onClick={() => navigate("/cart")}
          className="navButton hover:text-[#D1C12B] cursor-pointer"
        >
          КОРЗИНА
        </span>
      </div>
      {isMobileMenuOpen && (
        <div className="sm:hidden absolute top-20 left-0 w-full bg-[#10171F] py-4">
          <div className="flex flex-col items-center space-y-4 text-white">
            <span
              onClick={() => {
                navigate("/");
                setIsMobileMenuOpen(false);
              }}
              className="hover:text-[#D1C12B] cursor-pointer"
            >
              ГЛАВНАЯ
            </span>
            <span
              onClick={() => {
                navigate("/collections");
                setIsMobileMenuOpen(false);
              }}
              className="hover:text-[#D1C12B] cursor-pointer"
            >
              КОЛЛЕКЦИИ
            </span>
            <span
              onClick={() => {
                navigate("/about");
                setIsMobileMenuOpen(false);
              }}
              className="hover:text-[#D1C12B] cursor-pointer"
            >
              О НАС
            </span>
            <span
              onClick={() => {
                navigate("/contacts");
                setIsMobileMenuOpen(false);
              }}
              className="hover:text-[#D1C12B] cursor-pointer"
            >
              КОНТАКТЫ
            </span>
            <span
              onClick={() => {
                navigate("/cart");
                setIsMobileMenuOpen(false);
              }}
              className="hover:text-[#D1C12B] cursor-pointer"
            >
              КОРЗИНА
            </span>
          </div>
        </div>
      )}
      <div className="hidden sm:flex gap-10 items-center">
        <LogRegBtn />
      </div>
    </div>
  );
};

export default Header;
