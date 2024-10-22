import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  const [emailUser, setEmailUser] = useState("");
  const [passwordUser, setPasswordUser] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();



  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:4000/api/login", {
        emailUser,
        passwordUser,
      });
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      dispatch(login(user)); 
      toast.success('Успешный вход!', { position: 'top-right' });
      setTimeout(() => {
        navigate("/");
    }, 2000); 
    } catch (error) {
      console.log(error.response.data);
      setError(error.response.data.message);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center relative translate-y-[-80px]">
        <h1 className="text-6xl sm:text-9xl text-white font-usuallybold relative z-10 glitchForHeader text-center textShadow">
          Вход
        </h1>
        <div className="absolute translate-y-[-20px]">
          <h1 className="leading-none text-[100px] sm:text-[170px] noselect text-[#1F252D] font-usuallybold opacity-50 text-center">
            Вход
          </h1>
        </div>
      </div>
      <ToastContainer/>
      <div className="flex flex-col justify-center bg-[#10171F] rounded-lg text-white text-[16px] sm:text-[20px] px-5 py-8 sm:py-10 max-w-[90%] sm:max-w-[500px] mx-auto space-y-4 font-arial">
        <div className="relative">
          <input
            type="text"
            placeholder="Email"
            value={emailUser}
            onChange={(e) => setEmailUser(e.target.value)}
            className="bg-transparent outline-none border-[#1d2938] border-2 rounded-lg pl-10 pr-4 py-2 text-white focus:outline-none focus:border-[#ffffff] w-full font-arial"
          />
        </div>

        <div className="relative">
          <input
            type="password"
            placeholder="Пароль"
            value={passwordUser}
            onChange={(e) => setPasswordUser(e.target.value)}
            className="bg-transparent outline-none border-[#1d2938] border-2 rounded-lg pl-10 pr-4 py-2 text-white focus:outline-none focus:border-[#ffffff] w-full font-arial"
          />
        </div>

        <p className="text-red-500 font-arial text-xl">{error}</p>
        <div className="text-right">
          <a
            href="#"
            className="text-gray-400 hover:underline text-sm font-arial text-[16px] sm:text-[18px]"
          >
            Забыли пароль?
          </a>
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-[#2d333b] border border-[#444c56] flex items-center justify-center py-2 rounded-lg text-white hover:bg-[#444c56] transition"
        >
          Войти
        </button>

        <div className="text-center">
          <p className="text-gray-400 text-sm font-arial text-[16px] sm:text-[18px]">
            <span
              className="underline font-arial cursor-pointer"
              onClick={() => navigate("/registration")}
            >
              Зарегистрируйтесь
            </span>
            , если у вас нет аккаунта
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
