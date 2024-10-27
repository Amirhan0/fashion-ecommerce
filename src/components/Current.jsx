import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductCard } from "../UI/ProductCard";

export function Current() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Ошибка при получении товаров:", error));
  }, []);
  const limitedProducts = products.slice(0, 4);
  return (
    <div className="py-7 px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="relative mb-10 flex items-center h-[100px] sm:h-[130px] lg:h-[160px] justify-end">
        <h2 className="font-uindbase text-white absolute text-[50px] sm:text-[70px] lg:text-[100px] z-10 translate-y-[5px] sm:translate-y-[10px]">
          АКТУАЛЬНОЕ
        </h2>
        <h2 className="font-usuallybold text-[#1F252D] absolute text-[70px] sm:text-[100px] lg:text-[160px] leading-none">
          АКТУА
          <br className="block sm:hidden" />
          ЛЬНОЕ
        </h2>
      </div>

      <div>
        <div className="relative flex sm:justify-center gap-4 sm:gap-6 lg:gap-8 w-full overflow-x-auto scrollbar-hidden">
          {limitedProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>

        <div className="underline text-white text-[16px] sm:text-[20px] py-[30px] text-end">
          <span
            className="cursor-pointer"
            onClick={() => navigate("/collections")}
          >
            СМОТРЕТЬ БОЛЬШЕ
          </span>
        </div>
      </div>
    </div>
  );
}
