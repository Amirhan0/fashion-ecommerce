import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import ButtonForEveryone from "../UI/ButtonForEveryone";
export function ProductDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null); 

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка загрузки продукта: {error.message}</p>;
  if (!product) return <p>Продукт не найден.</p>;

  return (
    <div className="min-h-screen bg-[#10171F] text-white p-4 sm:p-10 flex flex-col items-center">
      <button
        onClick={() => navigate(-1)}
        className="text-[#D1C12B] mb-6 text-lg text-3xl cursor-pointer"
      >
        Назад
      </button>

      <div className="flex flex-col sm:flex-row items-center bg-[#1B232C] rounded-lg shadow-lg p-4 sm:p-8 w-full max-w-4xl">
        <div className="w-full sm:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col w-full sm:w-1/2 mt-6 sm:mt-0 sm:ml-8">
          <p className="text-7xl text-white mt-2 font-uindbase">{product.price} ₽</p>
          <p className="text-lg mt-4 font-uindbase font-normal leading-5 ">
            {product.description || "Описание товара отсутствует."}
          </p>
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Выберите размер:</h2>
            <div className="flex space-x-2 mt-2">
              {product.size.map((size, index) => (
                <button
                  key={index}
                  className={`py-2 px-4 border rounded-lg transition-colors ${selectedSize === size ? 'bg-[#D1C12B] text-black' : 'bg-transparent text-white border-[#D1C12B]'}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <ButtonForEveryone buttonText={'В КОРЗИНУ'}/>
        </div>
      </div>
    </div>
  );
}
