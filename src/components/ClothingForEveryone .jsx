import ButtonForEveryone from '../UI/ButtonForEveryone'

const ClothingForEveryone = () => {
    return (
        <>
            <div className="flex flex-col items-center relative pt-9 "> 
                <img src="/logo.svg" alt="" />
                <h1 className="text-9xl text-white font-usuallybold relative z-10 glitch text-center textShadow">
                    Одежда для <br /> каждого
                </h1>
                <div className="absolute translate-y-11">
                    <h1 className=" leading-none text-[170px] noselect text-[#1F252D] font-usuallybold opacity-50 text-center">Одежда для <br /> каждого</h1>
                </div>
                <div className="mt-16 text-center">
                    <span className="text-white text-4xl font-normal">
                        На каждый день
                    </span>
                </div>
                
            </div>
            <div className='mr-20 mt-40'>
            <ButtonForEveryone buttonText='КАТАЛОГ' />
            </div>
            
        </>
    );
}

export default ClothingForEveryone;

