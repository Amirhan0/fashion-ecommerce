const ClothingCartComponent = () => {
const carts = [
    {id: 1,
    name: "Костюм Advolatum - соцветие",
    size: "M",
    color: "Blue",
    price: 29.99,
    quantity: 2,
    imageUrl: "/forThisSeason.svg"},

    {id: 2,
        name: "Костюм Advolatum - соцветие",
        size: "M",
        color: "Blue",
        price: 29.99,
        quantity: 1,
        imageUrl: "/forThisSeason.svg"},
        

]

    return (
        <>
        <div className="flex flex-col h-full mt-9 mr-10">
        <h1 className="leading-none text-9xl noselect text-[#1F252D] font-usuallybold opacity-50 text-left">
            Корзина
        </h1>
        {carts.map((cart) => (
         <div className="flex flex-row items-center w-[850px] h-[180px] bg-[#10171F] rounded-lg mt-4">
         <div>
            <img src="/photoGallery2.svg" className="w-44 h-44" alt="" />
         </div>
        <div className="flex flex-col ml-4">
    <div className="gap-3">
      <h1 className="font-uindbase text-white text-4xl">{cart.name}</h1>
    </div>
    <div className="mt-2 flex flex-row justify-between gap-5">
      <span className="text-white font-uindbase text-2xl">Размер: {cart.size}</span>
      <p className="text-white font-uindbase text-2xl">Кол-во: <span className="cursor-pointer">-</span> {cart.quantity} <span className="cursor-pointer">+</span></p>
      <span className="text-white font-uindbase text-2xl">Стоимость: {cart.price}$</span>
    </div>
  </div>
</div>    
        ))}
            <div className="flex flex-col mt-2">
                <div>
                <p className="text-[#3B4654] text-xl font-uindbase font-normal leading-4">
  Сумма доставки будет рассчитана после ввода <br />
  данных о месте назначения - город, улица
</p>
                </div>
                <div className="flex flex-col text-left mt-2">
                    <span className="text-white font-uindbase font-normal text-2xl">Доставка:        500$</span>
                    <br />
                    <span className="text-white font-uindbase text-2xl">Итого:        500$</span>
                </div>
            </div>
        </div>
        </>
    )
}

export default ClothingCartComponent