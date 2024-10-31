import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MyGoogleMapForEveryone = () => {
  const mapContainerStyle = {
    width: "100%",
    height: "550px",
  };

  const center = {
    lat: 43.239244988514635,
    lng: 76.90527342002746,
  };

  return (
    <div className="flex flex-col mt-44 sm:mt-16">
      <div className="text-center mb-4 relative">
        <h1 className="hidden sm:block leading-none text-[80px] md:text-[120px] lg:text-[180px] text-left noselect text-[#1F252D] font-usuallybold opacity-50">
          Контакты
        </h1>
        <h1 className="text-[50px]  md:text-[75px] lg:text-[100px] text-white text-left font-uindbase absolute bottom-5 z-10 textShadow">
          МЫ ВСЕГДА НА СВЯЗИ
        </h1>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <LoadScript googleMapsApiKey={import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={15}
            >
              <Marker position={center} title="пр-т. Абая 68, Алматы 050008" />
            </GoogleMap>
          </LoadScript>
        </div>
        <div className="flex flex-col items-center justify-center h-[550px] w-full md:w-1/3">
          <span className="font-uindbase text-white text-2xl">8(000)000-00-00</span>
          <span className="font-uindbase text-white text-2xl">itstep@gmail.kz</span>
          <img src="/telegram.svg" className="w-20 h-20 cursor-pointer mt-4" alt="" />
        </div>
      </div>
    </div>
  );
};

export default MyGoogleMapForEveryone;
