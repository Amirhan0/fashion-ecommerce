const ButtonForEveryone = () => {
    return (
        <div className="flex justify-end mt-8">
            <button 
                className="bg-[#0F151D33] border-2 border-[#D1C12B] text-white rounded-full w-52 h-14 flex items-center justify-center relative transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-[#D1C12B]">
                <img src="/button.svg" alt="Button" className="mr-2 w-8 h-8" /> 
                <span className="z-10 text-[#D1C12B] text-2xl text-shadow">КАТАЛОГ</span>
            </button>
        </div>
    );
}

export default ButtonForEveryone;
