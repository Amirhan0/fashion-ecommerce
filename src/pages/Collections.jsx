import { useState } from 'react';
import { ProductCard } from "../UI/ProductCard";

export default function Collections() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  const product = {
    name: "КОСТЮМ ADVOLATUM СОЦВЕТИЕ",
    price: 3751,
    image: "/cardPhoto.svg",
  };

  const navItems = ["ПЛАЩИ", "КУРТКИ", "КОФТЫ", "КОМБИНЕЗОНЫ", "КЕПКИ", "СУМКИ"];

  return (
    <div className="text-white translate-x-[-60px]">
      <h2 className="font-usuallybold text-[#1F252D] text-[160px]">КОЛЛЕКЦИИ</h2>
      <div className="flex justify-center">
        <div className="flex flex-col translate-x-[-185px]">
          <div className="flex flex-col gap-5 mb-8">
            {navItems.map((item, index) => (
              <span
                key={index}
                className={`colNavText ${activeIndex === index ? 'glitch' : ''}`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex gap-[6px]">
            <div className="logoCircle bg-white">
              <img src="/blackLogo.svg" alt="" />
            </div>
            <div className="logoCircle bg-[#8229A4]">
              <img src="/blackLogo.svg" alt="" />
            </div>
            <div className="logoCircle bg-[#6D9C5C]">
              <img src="/blackLogo.svg" alt="" />
            </div>
            <div className="logoCircle bg-[#D1C12B]">
              <img src="/blackLogo.svg" alt="" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-y-5 gap-x-7 ">
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
        </div>
      </div>
    </div>
  );
}
