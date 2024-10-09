import { useNavigate } from "react-router-dom"

export default function LogRegBtn() {
    const navigate = useNavigate()
    return (
        <div className="flex gap-5">
          <button onClick={() => navigate("/login")} className="bg-transparent border-2 border-[#D1C12B]  rounded-full text-2xl w-52 h-14 flex items-center justify-center text-[#D1C12B] hover:bg-[#D1C12B] hover:text-black transition-colors duration-300 ease-in-out">
            Войти
          </button>
          <button onClick={() => navigate("/registration")} className="bg-transparent border-2 border-[#ffffff]  rounded-full text-2xl w-52 h-14 flex items-center justify-center text-[#ffffff] hover:bg-[#ffffff] hover:text-black transition-colors duration-300 ease-in-out">
            Регистрация
          </button>
        </div>
    )
}