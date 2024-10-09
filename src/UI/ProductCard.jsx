export function ProductCard({ product }) {
    return (
      <>
        <div className="  flex flex-col bg-[#10171F] rounded-lg text-white text-[20px] w-[270px]">
          <img src={product.image} alt={product.name} className="rounded-t-lg" />
          <div className="w-[70%] leading-tight pt-1">
            <h3>{product.name}</h3>
          </div>
  
          <div className="flex justify-between px-[10px] pt-2">
            <span>{product.price} ₽</span>
            <span className="underline">В КОРЗИНУ</span>
          </div>
        </div>
      </>
    );
  }
  