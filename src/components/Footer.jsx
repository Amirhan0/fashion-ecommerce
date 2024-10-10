export function Footer() {
  return (
    <div className="relative flex flex-col md:flex-row justify-around items-center text-white py-8 md:py-16 font-sans">
      <div className="flex flex-col space-y-2 text-[15px] leading-none w-full md:w-1/3 text-center md:text-left">
        <span className="cursor-pointer">Политика конфиденциальности</span>
        <span className="cursor-pointer">Согласие на обработку персональных данных</span>
      </div>
      <div className="flex flex-col items-center w-full md:w-1/3 mb-4 md:mb-0">
        <img src="/logoFooter.svg" alt="Logo" className="mb-2" />
        <span>2024 AMIR AND MAX</span>
      </div>
      <div className="flex justify-end w-full md:w-1/3 text-center">
        <img src="/telegram.svg" alt="Telegram" className="cursor-pointer w-8 h-8" />
      </div>
    </div>
  );
}
