import ButtonForEveryone from '../UI/ButtonForEveryone'

const ClothingForEveryone = () => {
    return (
        <>
            <div className="flex flex-col items-center relative pt-9"> 
                <img src="/logo.svg" alt="" />
                <h1 className="text-9xl text-white font-uindbasebold relative z-10 glitch">
                    Одежда для <br /> каждого
                </h1>
                <div className="absolute">
                    <h1 className="text-[150px] noselect text-[#1F252D] font-uindbasebold opacity-50">Одежда для <br /> каждого</h1>
                </div>
                <div className="mt-24 text-center">
                    <span className="text-white text-4xl font-normal">
                        На каждый день
                    </span>
                </div>
                <ButtonForEveryone/>
            </div>
        </>
    );
}

export default ClothingForEveryone;

