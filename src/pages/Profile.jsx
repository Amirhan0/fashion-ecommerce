import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Orders from "../components/Orders";


export default function Profile() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    imgUrl: "defaultAvatar.svg",
  });
  const [orders, setOrders] = useState([]);
  

  const [newProfile, setNewProfile] = useState(profile);
  const [error, setError] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setProfile({
        name: user.nameUser,
        email: user.emailUser,
        phone: user.phoneUser,
        imgUrl: user?.imageUser || 'defaultAvatar.svg'
      });
  
      axios
        .get(`http://localhost:4000/api/orders?email=${user.emailUser}`)
        .then(response => setOrders(response.data))
        .catch(error => console.error('Ошибка при получении заказов:', error));
    }
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
    setNewProfile(profile); // Устанавливаем текущее состояние профиля в модальное окно
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setError("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProfile({ ...newProfile, [name]: value }); // Обновляем профиль при изменении полей
  };

  const handleSubmit = async () => {
    try {
      // Отправляем обновленные данные профиля на сервер
      const response = await axios.put("http://localhost:4000/api/items", newProfile);
      
      // Сохраняем обновленные данные профиля в state
      setProfile(newProfile);
  
      // Сохраняем обновленные данные профиля в localStorage
      localStorage.setItem(
        "user",
        JSON.stringify({
          nameUser: newProfile.name,
          emailUser: newProfile.email,
          phoneUser: newProfile.phone,
          imageUser: newProfile.imgUrl,
        })
      );
  
      // Закрываем модальное окно
      closeModal();
    } catch (error) {
      console.log(error);
      setError("Не удалось сохранить изменения");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center relative translate-y-[-80px]">
        <h1 className="text-6xl sm:text-9xl text-white font-usuallybold relative z-10 glitchForHeader text-center textShadow">
          Профиль
        </h1>
        <div className="absolute translate-y-[-20px]">
          <h1 className="leading-none text-[100px] sm:text-[170px] noselect text-[#1F252D] font-usuallybold opacity-50 text-center">
            Профиль
          </h1>
        </div>
      </div>

      <div className="bg-[#10171F] rounded-lg text-white text-[16px] sm:text-[20px] px-5 py-8 sm:py-10 max-w-[90%] sm:max-w-[500px] mx-auto space-y-6 font-arial text-center">
        <img
          src={profile.imgUrl}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <p>Имя: {profile.name}</p>
        <p>Email: {profile.email}</p>
        <p>Телефон: {profile.phone}</p>

        <button
          onClick={openModal}
          className="bg-[#2d333b] border border-[#444c56] flex items-center justify-center py-2 rounded-lg text-white hover:bg-[#444c56] transition"
        >
          Изменить профиль
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
          <div className="bg-[#10171F] p-6 rounded-lg w-[90%] sm:w-[500px] text-white text-[16px] sm:text-[20px] font-arial space-y-4">
            <h2 className="text-2xl">Изменение профиля</h2>

            <div className="space-y-2">
              <label>Имя:</label>
              <input
                type="text"
                name="name"
                value={newProfile.name}
                onChange={handleChange}
                className="w-full p-2 bg-transparent border border-[#444c56] rounded-lg"
              />
            </div>

            <div className="space-y-2">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={newProfile.email}
                onChange={handleChange}
                className="w-full p-2 bg-transparent border border-[#444c56] rounded-lg"
              />
            </div>

            <div className="space-y-2">
              <label>Телефон:</label>
              <input
                type="text"
                name="phone"
                value={newProfile.phone}
                onChange={handleChange}
                className="w-full p-2 bg-transparent border border-[#444c56] rounded-lg"
              />
            </div>

            <div className="space-y-2">
              <label>URL изображения:</label>
              <input
                type="text"
                name="imgUrl"
                value={newProfile.imgUrl}
                onChange={handleChange}
                className="w-full p-2 bg-transparent border border-[#444c56] rounded-lg"
              />
            </div>

            <p className="text-red-500">{error}</p>

            <div className="flex justify-between">
              <button
                onClick={handleSubmit}
                className="bg-[#2d333b] border border-[#444c56] px-4 py-2 rounded-lg text-white hover:bg-[#444c56] transition"
              >
                Сохранить
              </button>
              <button
                onClick={closeModal}
                className="bg-[#2d333b] border border-[#444c56] px-4 py-2 rounded-lg text-white hover:bg-[#444c56] transition"
              >
                Отмена
              </button>
            </div>
          </div>
        </div>
      )}
      <Orders orders={orders}/>
    </>
  );
}
