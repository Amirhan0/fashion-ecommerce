import ButtonForEveryOne from '../UI/ButtonForEveryone'

const ClothingCartForm = () => {
    return (
      <div className="flex items-start pt-44">
        <div>
          <hr className="border-l-4 border-[#1F252D] h-[650px]" />
        </div>
  
        <div className="ml-8">
          <h1 className="font-uindbase text-white text-2xl">ОФОРМЛЕНИЕ ЗАКАЗА</h1>
  
          <form className="flex flex-col space-y-4 mt-4">
            <div>
              <label htmlFor="name" className="block font-medium text-gray-700 font-uindbase text-xl">
                Данные получателя
              </label>
              <input
                type="text"
                id="lastName"
                className="mt-1 px-4 py-3 w-full rounded-md input-custom"
                placeholder="Фамилия"
                style={{
                  background: '#10171F',
                  boxShadow: '0px 4px 4px 0px #00000040',
                  color: '#fff',
                }}
              />
                <input
                type="text"
                id="firstName"
                className="mt-4 px-4 py-3 w-full rounded-md"
                placeholder="Имя"
                style={{
                  background: '#10171F',
                  boxShadow: '0px 4px 4px 0px #00000040',
                  color: '#fff',
                }}
              />
              <input
                type="text"
                id="middleName"
                className="mt-4 px-4 py-3 w-full rounded-md"
                placeholder="Отчество"
                style={{
                  background: '#10171F',
                  boxShadow: '0px 4px 4px 0px #00000040',
                  color: '#fff',
                }}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block font-medium text-gray-700 font-uindbase text-xl">
                Номер телефона
              </label>
              <input
                type="text"
                id="phoneNumber"
                className="mt-1 px-4 py-3 w-full rounded-md"
                placeholder="Телефон"
                style={{
                  background: '#10171F',
                  boxShadow: '0px 4px 4px 0px #00000040',
                  color: '#fff',
                }}
              />
            </div>

            <div>
              <label htmlFor="city" className="block text-lg font-medium text-gray-700">
              Данные места доставки
              </label>
              <input
                type="text"
                id="city"
                className="mt-1 px-4 py-3 w-full rounded-md"
                placeholder="Город"
                style={{
                  background: '#10171F',
                  boxShadow: '0px 4px 4px 0px #00000040',
                  color: '#fff',
                }}
              />
               <input
                type="text"
                id="street"
                className="mt-4 px-4 py-3 w-full rounded-md"
                placeholder="Улица"
                style={{
                  background: '#10171F',
                  boxShadow: '0px 4px 4px 0px #00000040',
                  color: '#fff',
                }}
              />
              <div className="flex gap-5">
              <input
                type="text"
                id="home"
                className="mt-4 px-4 py-3 w-full rounded-md"
                placeholder="Дом"
                style={{
                  background: '#10171F',
                  boxShadow: '0px 4px 4px 0px #00000040',
                  color: '#fff',
                }}
              />
               <input
                type="text"
                id="
                apartment"
                className="mt-4 px-4 py-3 w-full rounded-md"
                placeholder="Квартира"
                style={{
                  background: '#10171F',
                  boxShadow: '0px 4px 4px 0px #00000040',
                  color: '#fff',
                }}
              />
              </div>
            </div>
            <div className="flex items-center space-x-4">
          <div className="flex items-center">
          <input
                type="checkbox"
                id="
                onlinePayment"
                className="mt-4 px-4 py-3 w-full rounded-md"
                style={{
                  background: '#10171F',
                  boxShadow: '0px 4px 4px 0px #00000040',
                  color: '#fff',
                }}
              />
        <label htmlFor="onlinePayment" className="ml-2 text-white text-lg">
          Оплата онлайн
        </label>
      </div>
      <div className="flex items-center">
      <input
                type="checkbox"
                id="
                cashPayment"
                className="mt-4 px-4 py-3 w-full rounded-md"
                style={{
                  background: '#10171F',
                  boxShadow: '0px 4px 4px 0px #00000040',
                  color: '#fff',
                }}
              />
        <label htmlFor="cashPayment" className="ml-2 text-white text-lg">
          Оплата наличными
        </label>
      </div>
    </div>
        <ButtonForEveryOne buttonText="ОФОРМИТЬ"/>
          </form>
        </div>
      </div>
    );
  };
  
  export default ClothingCartForm;
  