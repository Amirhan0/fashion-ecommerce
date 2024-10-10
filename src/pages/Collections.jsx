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
    <div className="text-white px-4 md:px-0">
      <h2 className="font-usuallybold text-[#1F252D] text-[40px] md:text-[160px] mb-8 text-center md:text-left">КОЛЛЕКЦИИ</h2>
      <div className="flex flex-col md:flex-row justify-center">
        <div className="flex flex-col md:w-1/4 gap-5 mb-8 md:mb-0">
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
          <div className="flex gap-2 mt-5">
            <div className="logoCircle bg-white">
              <img src="/blackLogo.svg" alt="Logo" />
            </div>
            <div className="logoCircle bg-[#8229A4]">
              <img src="/blackLogo.svg" alt="Logo" />
            </div>
            <div className="logoCircle bg-[#6D9C5C]">
              <img src="/blackLogo.svg" alt="Logo" />
            </div>
            <div className="logoCircle bg-[#D1C12B]">
              <img src="/blackLogo.svg" alt="Logo" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-5 gap-x-7 w-full md:w-3/4">
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
