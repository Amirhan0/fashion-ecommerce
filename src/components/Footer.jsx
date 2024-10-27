import { useNavigate } from "react-router-dom";

export function Footer() {
  const navigate = useNavigate();
  return (
    <div className=" sm:mt-7 relative flex flex-col md:flex-row justify-around items-center text-white py-8 md:py-16 font-sans">
      <div className="flex flex-col items-center w-full md:w-1/3 mb-4 md:mb-0 order-2 md:order-2">
        <img src="/logoFooter.svg" alt="Logo" className="mb-2" />
        <span>2024 AMIR AND MAX</span>
      </div>
      <div className="flex flex-col space-y-2 text-[10px] md:text-[15px] leading-none w-full md:w-1/3 text-center md:text-left order-3 md:order-1">
        <span className="cursor-pointer" onClick={() => navigate("/privacy")}>Политика конфиденциальности</span>
        <span className="cursor-pointer">Согласие на обработку персональных данных</span>
      </div>
      <div className="order-1 md:order-3 flex justify-center md:justify-end w-full md:w-1/3 text-center ">
        <img src="/telegram.svg" alt="Telegram" className="cursor-pointer w-8 h-8" />
      </div>
    </div>
  );
}
