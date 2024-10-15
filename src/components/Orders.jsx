export default function Orders({ orders }) {
    return (
      <div className="bg-[#10171F] rounded-lg text-white px-5 py-8 max-w-[500px] mx-auto space-y-6 mt-5">
        <h2 className="text-xl text-center">Мои заказы</h2>
        {orders.length === 0 ? (
          <p>Заказы отсутствуют</p>
        ) : (
          orders.map((order, index) => (
            <div key={index} className="border-b border-gray-700 py-4">
              <p><strong>Город:</strong> {order.deliveryAddress.city}</p>
              <p><strong>Улица:</strong> {order.deliveryAddress.street}</p>
              <p><strong>Метод оплаты:</strong> {order.paymentMethod}</p>
              <div>
                <strong>Товары:</strong>
                {order.products.map((product, i) => (
                  <div key={i}>
                    <p>{product.name} - {product.price} руб.{product.quantiy}</p>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    );
  }
  