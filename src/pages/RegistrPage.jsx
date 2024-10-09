import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function RegistrPage() {
    const [step, setStep] = useState(1)
    const navigate = useNavigate()

    function navigation(link) {
        navigate(link)
    }

    function handleNextStep() {
        setStep(step + 1)
    }

    function handlePrevStep() {
        setStep(step - 1)
    }
    return (
        <>
  <div className="flex flex-col items-center relative translate-y-[-80px] ">
    <h1 className="text-9xl text-white font-usuallybold relative z-10 glitchForHeader text-center textShadow">
      Регистрация
    </h1>
    <div className="absolute translate-y-[-20px]">
      <h1 className="leading-none text-[170px] noselect text-[#1F252D] font-usuallybold opacity-50 text-center">
        Регистрация
      </h1>
    </div>
  </div>

  <div className="flex flex-col justify-center bg-[#10171F] rounded-lg text-white text-[20px] px-5 py-14 max-w-[90%] sm:max-w-[500px] mx-auto space-y-4 font-arial">
  <div className="flex justify-between mb-4">
  <div className={`flex items-center ${step === 1 ? 'text-[#D1C12B]' : 'text-gray-400'}`}>
    <div className={`w-10 h-10 rounded-full border-2 ${step >= 1 ? 'border-[#D1C12B] bg-[#D1C12B]' : 'border-gray-300'} transition-all duration-300 flex items-center justify-center`}>
      {step >= 1 ? <span className="text-white">1</span> : <span>1</span>}
    </div>
    <div className={`h-1 flex-1 ${step > 1 ? 'bg-[#D1C12B]' : 'bg-gray-300'} transition-all duration-300`}></div>
  </div>
  <div className="w-32 h-10 flex items-center justify-center text-[#D1C12B]">
    <span className="text-xl font-uindbase">Шаг {step} из 2</span> 
  </div>

  <div className={`flex items-center ${step === 2 ? 'text-[#D1C12B]' : 'text-gray-400'}`}>
    <div className={`w-10 h-10 rounded-full border-2 ${step === 2 ? 'border-[#D1C12B] bg-[#D1C12B]' : 'border-gray-300'} transition-all duration-300 flex items-center justify-center`}>
      {step === 2 ? <span className="text-white">2</span> : <span>2</span>}
    </div>
  </div>
</div>


    {step === 1 && (
      <>
        <div className="relative">
          <input
            type="text"
            placeholder="Имя пользователя"
            className="bg-transparent outline-none border-[#1d2938] border-2 rounded-lg pl-10 pr-4 py-2 text-white focus:outline-none focus:border-[#ffffff] w-full font-arial"
          />
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Телефон"
            className="bg-transparent outline-none border-[#1d2938] border-2 rounded-lg pl-10 pr-4 py-2 text-white focus:outline-none focus:border-[#ffffff] w-full font-arial"
          />
        </div>
        <div className="relative">
          <input
            type="email"
            placeholder="Email"
            className="bg-transparent outline-none border-[#1d2938] border-2 rounded-lg pl-10 pr-4 py-2 text-white focus:outline-none focus:border-[#ffffff] w-full font-arial"
          />
        </div>
        <button onClick={handleNextStep} className="bg-[#2d333b] border border-[#444c56] flex items-center justify-center py-2 rounded-lg text-white hover:bg-[#444c56] transition">
          Продолжить
        </button>
      </>
    )}

    {step === 2 && (
      <>
        <div className="relative">
          <input
            type="password"
            placeholder="Пароль"
            className="bg-transparent outline-none border-[#1d2938] border-2 rounded-lg pl-10 pr-4 py-2 text-white focus:outline-none focus:border-[#ffffff] w-full font-arial"
          />
        </div>
        <div className="relative">
          <input
            type="password"
            placeholder="Подтвердите пароль"
            className="bg-transparent outline-none border-[#1d2938] border-2 rounded-lg pl-10 pr-4 py-2 text-white focus:outline-none focus:border-[#ffffff] w-full font-arial"
          />
        </div>
        <button className="bg-[#2d333b] border border-[#444c56] flex items-center justify-center py-2 rounded-lg text-white hover:bg-[#444c56] transition">
          Зарегистрироваться
        </button>
        <button onClick={handlePrevStep} className="bg-[#2d333b] border border-[#444c56] flex items-center justify-center py-2 rounded-lg text-white hover:bg-[#444c56] transition">
          Назад
        </button>
      </>
    )}

    <div className="text-center">
      <p className="text-gray-400 text-sm font-arial text-[18px]">
        Уже есть аккаунт?{' '}
        <span className="underline font-arial cursor-pointer" onClick={() => navigation('/login')}>Войти</span>
      </p>
    </div>
  </div>
      </>
    );
  }
  