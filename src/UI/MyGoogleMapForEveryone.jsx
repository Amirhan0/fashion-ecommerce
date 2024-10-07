import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MyGoogleMapForEveryone = () => {
  const mapContainerStyle = {
    width: '700px',
    height: '500px',
  };

  const center = {
    lat: 43.239244988514635, 
    lng: 76.90527342002746, 
  };

  return (
    <div className="flex flex-col mt-16">
      <div className="text-center mb-4 relative">
        <h1 className="leading-none text-9xl text-left noselect text-[#1F252D] font-usuallybold opacity-50">Контакты</h1>
        <h1 className="text-7xl text-white text-left font-uindbase absolute bottom-5 z-10 textShadow">
          МЫ ВСЕГДА НА СВЯЗИ
        </h1>
      </div>
      <div className='flex'>
        <div className='flex'>
           <LoadScript googleMapsApiKey="AIzaSyDgj8uqShbnKquJhrBH2CUlqEQtJVv4-LQ"> 
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={15}
        >
          <Marker position={center} title="пр-т. Абая 68, Алматы 050008" />
        </GoogleMap>
      </LoadScript>
        </div>
        <div className='flex flex-col items-center justify-center ml-28'>
          <span className='font-uindbase text-white text-2xl'>8(000)000-00-00</span>
          <span className='font-uindbase text-white text-2xl'>itstep@gmail.kz</span>
          <img src="/telegram.svg" className='w-20 h-20' alt="" />
        </div>
      </div>
     
    </div>
  );
};

export default MyGoogleMapForEveryone;

