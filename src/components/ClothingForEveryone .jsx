import { useNavigate } from 'react-router-dom';
import ButtonForEveryone from '../UI/ButtonForEveryone';
const ClothingForEveryone = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="flex flex-col items-center relative pt-9 px-4 sm:px-6 md:px-12 lg:px-20">
                <img src="/logo.svg" alt="" className="w-24 sm:w-32 md:w-40 lg:w-48" />

                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl text-white font-usuallybold relative z-10 glitchForHeader text-center textShadow">
                    Одежда для <br /> каждого
                </h1>
                <div className="absolute translate-y-11">
                    <h1 className="leading-none text-[80px] sm:text-[120px] md:text-[140px] lg:text-[170px] noselect text-[#1F252D] font-usuallybold opacity-50 text-center">
                        Одежда для <br /> каждого
                    </h1>
                </div>

                <div className="mt-10 sm:mt-12 md:mt-16 text-center">
                    <span className="text-white text-2xl sm:text-3xl md:text-4xl font-normal">
                        На каждый день
                    </span>
                </div>
            </div>

            <div className="flex justify-center mt-20 sm:mt-32 md:mt-40">
                <ButtonForEveryone buttonText="КАТАЛОГ" onClick={() => navigate('/collections')} />
            </div>
        </>
    );
};

export default ClothingForEveryone;
