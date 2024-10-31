import { useEffect, useState } from "react";

const ClothingCartComponent = ({ carts, setCarts }) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const user = JSON.parse(localStorage.getItem("user"));
  const emailUser = user ? user.emailUser : null;
  useEffect(() => {
    const storedCarts =
      JSON.parse(localStorage.getItem("selectedProducts")) || [];
    const parsedProducts = storedCarts
      .filter((product) => product.userId === emailUser)
      .map((product) => ({
        ...product,
        quantity: product.quantity || 1,
      }));
    setCarts(parsedProducts);
  }, [emailUser]);

  useEffect(() => {
    const newTotalAmount = carts.reduce(
      (total, cart) => total + cart.price * cart.quantity,
      0
    ) + 500;
    setTotalAmount(newTotalAmount);
    localStorage.setItem("totalAmount", newTotalAmount);
  }, [carts]);
  const handleIncreaseQuantity = (index) => {
    const updatedCarts = [...carts];
    updatedCarts[index].quantity += 1;
    localStorage.setItem("selectedProducts", JSON.stringify(updatedCarts));
    setCarts(updatedCarts);
  };

  const handleDecreaseQuantity = (index) => {
    const updatedCarts = [...carts];
    if (updatedCarts[index].quantity > 1) {
      updatedCarts[index].quantity -= 1;
      localStorage.setItem("selectedProducts", JSON.stringify(updatedCarts));
      setCarts(updatedCarts);
    }
  };

  const handleRemoveCart = (index) => {
    const updatedCarts = carts.filter((_, i) => i !== index);
    setCarts(updatedCarts);
    localStorage.setItem("selectedProducts", JSON.stringify(updatedCarts));
  };

  return (
    <div className="flex flex-col h-full mt-9 mx-4">
      <h1 className="leading-none text-5xl md:text-9xl noselect text-[#1F252D] font-usuallybold opacity-50 text-left">
        Корзина
      </h1>
      {carts.length > 0 ? (
        carts.map((cart, index) => (
          <div
            key={cart.id}
            className="flex relative flex-row items-center w-full bg-[#10171F] rounded-lg mt-4 p-4"
          >
            <span
              className="absolute top-2 right-2 cursor-pointer text-white text-lg md:text-2xl font-bold"
              onClick={() => handleRemoveCart(index)}
            >
              ✖
            </span>
            <div className="flex-shrink-0">
              <img
                src={cart.image}
                className="w-24 h-24 md:w-44 md:h-44 object-cover"
                alt={cart.name}
              />
            </div>
            <div className="flex flex-col ml-4 w-full">
              <h1 className="font-uindbase text-white text-xl md:text-4xl">
                {cart.name}
              </h1>
              <div className="mt-2 flex flex-col md:flex-row justify-between items-center">
                  <span className="text-white font-uindbase text-lg md:text-2xl">
                    Размер: {cart.size}
                  </span>
                  <div className="flex items-center">
                    <span
                      className="cursor-pointer text-white text-lg md:text-2xl"
                      onClick={() => handleDecreaseQuantity(index)}
                    >
                      -
                    </span>
                    <span className="mx-2 text-white font-uindbase text-lg md:text-2xl font-bold">
                      {cart.quantity}
                    </span>
                    <span
                      className="cursor-pointer text-white text-lg md:text-2xl"
                      onClick={() => handleIncreaseQuantity(index)}
                    >
                      +
                    </span>
                  </div>

                <span className="text-white font-uindbase text-lg md:text-2xl">
                  Стоимость: {cart.price * cart.quantity}₽
                </span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-3xl text-white">Корзина пуста</p>
      )}
      <div className="flex flex-col mt-2">
        <p className="text-[#3B4654] text-lg md:text-xl font-uindbase font-normal leading-4 text-right">
          Сумма доставки будет рассчитана после ввода <br />
          данных о месте назначения - город, улица
        </p>
        <div className="flex flex-col text-left mt-2">
          <span className="text-white font-uindbase font-normal text-lg md:text-2xl text-right">
            Доставка: 500₽
          </span>
          <br />
          <span className="text-white font-uindbase text-lg md:text-2xl text-right">
            Итого: {totalAmount}₽
          </span>
        </div>
      </div>
    </div>
  );
};

export default ClothingCartComponent;
