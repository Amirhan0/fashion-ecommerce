export default function LoginPage() {
    return (
      <>
        <div className="flex flex-col items-center relative translate-y-[-80px] ">
          <h1 className="text-9xl text-white font-usuallybold relative z-10 glitchForHeader text-center textShadow">
            Вход
          </h1>
          <div className="absolute translate-y-[-20px]">
            <h1 className="leading-none text-[170px] noselect text-[#1F252D] font-usuallybold opacity-50 text-center">
              Вход
            </h1>
          </div>
        </div>
  
        <div className="flex flex-col justify-center bg-[#10171F] rounded-lg text-white text-[20px] px-5 py-10 max-w-[90%] sm:max-w-[500px] mx-auto space-y-4 font-arial">
          
          <button className="bg-transparent border border-[#444c56] flex items-center justify-center py-2 rounded-lg text-white hover:bg-[#444c56] transition ">
            Войти с помощью Google
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-full h-[1px] bg-[#444c56]"></div>
            <span className="text-gray-500 font-arial">Или</span>
            <div className="w-full h-[1px] bg-[#444c56]"></div>
          </div>
  
          
          <div className="relative">
            <input
              type="text"
              placeholder="Email"
              className="bg-transparent outline-none border-[#1d2938] border-2 rounded-lg pl-10 pr-4 py-2 text-white focus:outline-none focus:border-[#ffffff] w-full font-arial"
            />
            
          </div>
  
          
          <div className="relative">
            <input
              type="password"
              placeholder="Пароль"
              className="bg-transparent outline-none border-[#1d2938] border-2 rounded-lg pl-10 pr-4 py-2 text-white focus:outline-none focus:border-[#ffffff] w-full font-arial"
            />
            
          </div>
  
       
          <div className="text-right">
            <a href="#" className="text-gray-400 hover:underline text-sm font-arial text-[18px]">
              Забыли пароль?
            </a>
          </div>
  
         
          <button className="bg-[#2d333b] border border-[#444c56] flex items-center justify-center py-2 rounded-lg text-white hover:bg-[#444c56] transition">
            Войти
          </button>
  
         
          <div className="text-center">
            <p className="text-gray-400 text-sm font-arial text-[18px]">
              <span className="underline font-arial cursor-pointer">Зарегестрируйтесь</span>, если у вас нет аккаунта
            </p>
          </div>
        </div>
      </>
    );
  }
  