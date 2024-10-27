export function ProductCard({ product }) {
  return (
    <div className="flex flex-col bg-[#10171F] rounded-lg text-white text-[20px] w-[270px] h-[400px] min-w-[270px]">
      <div className="flex-grow overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-t-lg w-full h-full object-cover"
        />
      </div>
      <div className="p-2 flex flex-col justify-between h-[120px]">
        <h3 className="text-[18px] leading-tight">{product.name}</h3>
        <div className="flex justify-between pt-2">
          <span>{product.price} ₽</span>
          <span className="underline cursor-pointer">В КОРЗИНУ</span>
        </div>
      </div>
    </div>
  );
}
