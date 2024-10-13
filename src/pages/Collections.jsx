import { useEffect, useState } from "react";
import { ProductCard } from "../UI/ProductCard";

export default function Collections() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null); 
  const [activeIndex, setActiveIndex] = useState(null);

  // ТУТ получаем категории
  useEffect(() => {
    fetch("http://localhost:4000/api/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) =>
        console.error("Ошибка при получении категорий:", error)
      );
  }, []);

  // А тут товары получаем
  useEffect(() => {
    fetch("http://localhost:4000/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data); 
      })
      .catch((error) =>
        console.error("Ошибка при получении товаров:", error)
      );
  }, []);

  // ТУт выбор категории
  const handleCategoryClick = (categoryId) => {
    if (categoryId === activeCategory) {
      setActiveCategory(null);
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.categoryId === categoryId
      );
      setActiveCategory(categoryId);
      setFilteredProducts(filtered);
    }
  };

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <div className="text-white px-4 md:px-0">
      <h2 className="font-usuallybold text-[#1F252D] text-[40px] md:text-[160px] mb-8 text-center md:text-left">
        КОЛЛЕКЦИИ
      </h2>
      <div className="flex flex-col md:flex-row justify-center">
        <div className="flex flex-col md:w-1/4 gap-5 mb-8 md:mb-0">
          {categories.map((category, index) => (
            <span
              key={category.categoryId}
              className={`colNavText ${
                activeIndex === index ? "glitch" : ""
              } ${activeCategory === category.categoryId ? "active" : ""}`}
              onClick={() => handleCategoryClick(category.categoryId)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {category.nameCategory}
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
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
