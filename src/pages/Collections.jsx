import { useEffect, useState } from "react";
import { ProductCard } from "../UI/ProductCard";
import { Link, useNavigate } from "react-router-dom";

export default function Collections() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  // Получаем категории
  useEffect(() => {
    fetch("http://localhost:4000/api/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) =>
        console.error("Ошибка при получении категорий:", error)
      );
  }, []);

  // Получаем товары
  useEffect(() => {
    fetch("http://localhost:4000/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) => console.error("Ошибка при получении товаров:", error));
  }, []);

  // Выбор категории
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

  const handleProductClick = (productId) => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/login");
    } else {
      navigate(`/products/${productId}`);
    }
  };

  return (
    <div className="text-white px-4 md:px-0">
      <h2 className="font-usuallybold text-[#1F252D] text-[40px] md:text-[160px] mb-8 text-center md:text-left">
        КОЛЛЕКЦИИ
      </h2>
      <div className="flex flex-col md:flex-row justify-center md:justify-start">
        <div className="">
          <div className="flex md:flex-col gap-5 mb-8 md:pr-10 sm:pl-24 overflow-x-auto scrollbar-hidden">
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
            <div className="hidden md:flex  gap-2 mt-5">
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
        </div>

        <div className="md:relative flex w-screen justify-center left-[-120px] ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-5 gap-x-7">
            {filteredProducts.map((product) => (
              <div
                key={product._id}
                onClick={() => handleProductClick(product._id)}
                className="cursor-pointer"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
