import ButtonForEveryone from '../UI/ButtonForEveryone'
const ForThisSeason = () => {
  return (
    <>
      <div className="flex flex-col  justify-center mt-52 ">
        <div className="relative mb-7 flex items-center h-[160px]">
          <h2 className="font-uindbase text-white absolute text-[100px] z-10 translate-y-[10px]">
            НА ЭТОТ СЕЗОН
          </h2>
          <h2 className="font-usuallybold text-[#1F252D] absolute text-[140px]">
            НА ЭТОТ СЕЗОН
          </h2>
        </div>
        <div className="relative flex justify-center">
          <img src="/forThisSeason.svg" alt="" className="h-[587px]" />
          <div className='absolute translate-y-72 translate-x-96 flex flex-col gap-4 items-center justify-center w-[320px] text-center'>
            <p className='text-white font-uindbase'>ТЕКСТ ОПИСАНИЯ КОНКРЕТНОЙ КОЛЛЕКЦИИ С ВОЗМОЖНЫМ ДОПОЛНЕНИЕМ УНИКАЛЬНОСТИ</p>
            <ButtonForEveryone buttonText='КАТАЛОГ'/>
          </div>
        </div>

        <div className="mt-4 flex gap-7 justify-center">
          <div className="w-[160px] border-2 border-white"></div>
          <div className="w-[160px] border-2 border-white"></div>
          <div className="w-[160px] border-2 border-white"></div>
          <div className="w-[160px] border-2 border-white"></div>
          <div className="w-[160px] border-2 border-white"></div>
        </div>
      </div>
    </>
  );
};

export default ForThisSeason;
