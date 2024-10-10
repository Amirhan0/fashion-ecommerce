const ButtonForEveryone = ({buttonText, onClick}) => {
    return (
        <div className="flex justify-end">
            <button
            onClick={onClick}
                className="bg-[#0F151D33] border-2 border-[#D1C12B] text-white rounded-full w-52 h-14 flex items-center justify-center relative transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-[#D1C12B] hover:bg-[#D1C12B] hover:text-black group"
            >
                <img 
                    src="/button.svg" 
                    alt="Button" 
                    className="mr-2 w-8 h-8 transition-all duration-300 ease-in-out group-hover:brightness-0" 
                />
                <span className="z-10 text-[#D1C12B] text-2xl text-shadow transition-colors duration-300 ease-in-out group-hover:text-black">
                    {buttonText}
                </span>
            </button>
        </div>
    );
}

export default ButtonForEveryone;
