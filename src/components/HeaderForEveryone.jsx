const Header = () => {

  return (
    <>
      <div className="pt-10 flex items-center justify-between">
        <div className="flex text-[20px] items-center ">
          <img src="/logo.svg" alt="" className="h-[30px]" />
          <div className="flex justify-between ">
            <div className="navButton">
              <span className="hover:text-[#D1C12B]">ГЛАВНАЯ</span>
            </div>
            <div className="navButton">
              <span className="hover:text-[#D1C12B]">КОЛЛЕКЦИИ</span>
            </div>
            <div className="navButton">
              <span className="hover:text-[#D1C12B]">О НАС</span>
            </div>
            <div className="navButton">
              <span className="hover:text-[#D1C12B]">КОНТАКТЫ</span>
            </div>
            <div className="navButton">
              <span className="hover:text-[#D1C12B]">КОРЗИНА</span>
            </div>
          </div>
        </div>
        <div>
            <img src="/telegram.svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;
