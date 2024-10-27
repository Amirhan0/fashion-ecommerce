import { useNavigate } from 'react-router-dom';
import ButtonForEveryone from '../UI/ButtonForEveryone';
const ClothingForEveryone = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="flex flex-col items-center relative  px-4 sm:px-6 md:px-12 lg:px-20 ">
                <img src="/logo.svg" alt="" className="w-[100px] sm:w-[150px] md:w-[200px] lg:w-[250px] xl:w-[300px] max-w-[80%] min-w-[100px] h-[60px]" />

                <h1 className="w-full text-[30px] bottom-5 lg:bottom-0 sm:text-6xl md:text-7xl lg:text-9xl text-white font-usuallybold relative z-10 glitchForHeader text-center textShadow whitespace-nowrap ">
                    Одежда для <br /> каждого
                </h1>
                <div className="w-full absolute translate-y-11">
                    <h1 className="leading-none text-[40px] sm:text-[120px] md:text-[140px] lg:text-[170px] noselect text-[#1F252D] font-usuallybold opacity-50 text-center whitespace-nowrap">
                        Одежда для <br /> каждого
                    </h1>
                </div>

                <div className="mt-4 sm:mt-12 md:mt-16 text-center">
                    <span className="text-white text-lg sm:text-3xl md:text-4xl font-normal">
                        НА КАЖДЫЙ ДЕНЬ
                    </span>
                </div>
            </div>

            <div className="flex justify-center mt-10 sm:mt-32 md:mt-40  sm:justify-end">
                <ButtonForEveryone buttonText="КАТАЛОГ" onClick={() => navigate('/collections')} />
            </div>
        </>
    );
};

export default ClothingForEveryone;
