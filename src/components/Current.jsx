import { ProductCard } from "../UI/ProductCard";

export function Current() {
  const product = {
    name: "КОСТЮМ ADVOLATUM СОЦВЕТИЕ",
    price: 3751,
    image: "/cardPhoto.svg",
  };
  return (
    <div className="py-7">
      <div className="relative mb-7 flex items-center h-[160px] justify-end ">
        <h2 className="font-uindbase text-white absolute text-[100px] z-10 translate-y-[10px]">
          АКТУАЛЬНОЕ
        </h2>
        <h2 className=" font-usuallybold text-[#1F252D] absolute text-[160px]">
          АКТУАЛЬНОЕ
        </h2>
      </div>
      <div>
        <div className="relative flex justify-center gap-[50px] w-full">
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
        </div>
        <div className="underline text-white text-[20px] py-[50px] text-end  ">
          <span className="cursor-pointer">СМОТРЕТЬ БОЛЬШЕ</span>
        </div>
      </div>
    </div>
  );
}
