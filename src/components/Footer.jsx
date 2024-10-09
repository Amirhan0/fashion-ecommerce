export function Footer() {
    return (
      <div className="relative flex justify-around items-center text-white py-16 font-sans">
        <div className="flex flex-col  space-y-2 text-[15px] leading-none w-1/3">
          <span className="cursor-pointer">политика конфиденциальности</span>
          <span className="cursor-pointer ">согласие на обработку персональных данных</span>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center w-1/3">
          <img src="/logoFooter.svg" alt="Logo" className="mb-2" />
          <span>2022 GruboGovorya</span>
        </div>
        <div className="flex justify-end w-1/3">
          <img src="/telegram.svg" alt="Telegram" className="cursor-pointer"/>
        </div>
      </div>
    );
  }
  