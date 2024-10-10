const ClothingCartComponent = () => {
    const carts = [
        {
            id: 1,
            name: "Костюм Advolatum - соцветие",
            size: "M",
            color: "Blue",
            price: 29.99,
            quantity: 2,
            imageUrl: "/forThisSeason.svg"
        },
        {
            id: 2,
            name: "Костюм Advolatum - соцветие",
            size: "M",
            color: "Blue",
            price: 29.99,
            quantity: 1,
            imageUrl: "/forThisSeason.svg"
        }
    ];

    return (
        <div className="flex flex-col h-full mt-9 mx-4">
            <h1 className="leading-none text-5xl md:text-9xl noselect text-[#1F252D] font-usuallybold opacity-50 text-left">
                Корзина
            </h1>
            {carts.map((cart) => (
                <div key={cart.id} className="flex flex-row items-center w-full bg-[#10171F] rounded-lg mt-4 p-4">
                    <div className="flex-shrink-0">
                        <img src={cart.imageUrl} className="w-24 h-24 md:w-44 md:h-44 object-cover" alt={cart.name} />
                    </div>
                    <div className="flex flex-col ml-4 w-full">
                        <h1 className="font-uindbase text-white text-xl md:text-4xl">{cart.name}</h1>
                        <div className="mt-2 flex flex-row justify-between items-center">
                            <span className="text-white font-uindbase text-lg md:text-2xl">Размер: {cart.size}</span>
                            <div className="flex items-center">
                                <span className="cursor-pointer text-white text-lg md:text-2xl">-</span>
                                <span className="mx-2 text-white font-uindbase text-lg md:text-2xl">{cart.quantity}</span>
                                <span className="cursor-pointer text-white text-lg md:text-2xl">+</span>
                            </div>
                            <span className="text-white font-uindbase text-lg md:text-2xl">Стоимость: {cart.price}$</span>
                        </div>
                    </div>
                </div>
            ))}
            <div className="flex flex-col mt-2">
                <p className="text-[#3B4654] text-lg md:text-xl font-uindbase font-normal leading-4 text-right">
                    Сумма доставки будет рассчитана после ввода <br />
                    данных о месте назначения - город, улица
                </p>
                <div className="flex flex-col text-left mt-2">
                    <span className="text-white font-uindbase font-normal text-lg md:text-2xl text-right">Доставка: 500$</span>
                    <br />
                    <span className="text-white font-uindbase text-lg md:text-2xl text-right">Итого: 500$</span>
                </div>
            </div>
        </div>
    );
}

export default ClothingCartComponent;
