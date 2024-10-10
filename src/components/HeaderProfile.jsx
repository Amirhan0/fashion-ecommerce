import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";

export default function HeaderProfile() {
  const user = JSON.parse(localStorage.getItem("user"));
  const name = user?.nameUser || "Guest";
  const avatar = user?.imageUser || "defaultAvatar.svg";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="flex items-center gap-10">
      <div className="flex gap-3 items-center cursor-pointer" onClick={() => navigate("/profile")}>
        <img src={avatar} alt="" className="w-10 h-10 rounded-full" />
        <span className="text-white uppercase text-xl">{name}</span>
      </div>
      <img src="/logout.svg" alt="" className="w-10 h-10 cursor-pointer" onClick={handleLogout}/>
    </div>
  );
}
