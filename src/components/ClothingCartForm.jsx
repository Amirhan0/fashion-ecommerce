import { useState, useEffect } from 'react';
import ButtonForEveryOne from '../UI/ButtonForEveryone';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ClothingCartForm = () => {
    const [address, setAddress] = useState({ home: '', apartment: '', city: '', street: '' });
    const [paymentMethod, setPaymentMethod] = useState('');
    const [isHomeSelected, setIsHomeSelected] = useState(false);
    const [name, setName] = useState({ firstName: '', lastName: '', middleName: '' });
    const [phoneNumber, setPhoneNumber] = useState('');
    const [loading, setLoading] = useState(false)
    const [selectedProducts, setSelectedProducts] = useState([]);
    useEffect(() => {
        const products = JSON.parse(localStorage.getItem('selectedProducts')) || [];
        setSelectedProducts(products);
    }, []);
    const handleAddressChange = (e) => {
        const { id, value } = e.target;
        setAddress((prev) => ({ ...prev, [id]: value }));
    };

    const handleNameChange = (e) => {
        const { id, value } = e.target;
        setName((prev) => ({ ...prev, [id]: value }));
    };

    const handleSelectHome = () => {
        setIsHomeSelected(true);
        setAddress((prev) => ({ ...prev, apartment: '' })); 
    };

    const handleSelectApartment = () => {
        setIsHomeSelected(false);
        setAddress((prev) => ({ ...prev, home: '' }));
    };

    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.id);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const orderData = {
            recipient: {
                ...name,        
                phoneNumber, 
            },
            deliveryAddress: {
                home: address.home,
                apartment: address.apartment,
                city: address.city,
                street: address.street,
            },
            paymentMethod,
            products: selectedProducts,
        };
    
        try {
            const response = await axios.post('http://localhost:4000/api/orders', orderData);
            toast.success('Заказ успешно оформлен!', { position: 'top-right' });
            console.log(response.data);
            localStorage.removeItem('selectedProducts');
            setSelectedProducts([]); 
        } catch (error) {
            if (error.response) {
                console.error('Ошибка ответа сервера:', error.response.data);
                toast.error(error.response.data.message || 'Произошла ошибка при отправке заказа', { position: 'top-right' });
            } else if (error.request) {
                console.error('Ошибка запроса:', error.request);
                toast.error('Нет ответа от сервера', { position: 'top-right' });

            } else {
                console.error('Ошибка при настройке запроса:', error.message);
                toast.error('Ошибка при настройке запроса', { position: 'top-right' });
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col md:flex-row items-start pt-24 md:pt-44 px-4 md:px-0">
            <div>
                <hr className="border-l-4 border-[#1F252D] h-[650px]" />
            </div>
            <ToastContainer />
            <div className="ml-0 md:ml-8 mt-8 md:mt-0 w-full md:w-auto">
                <h1 className="font-arial text-white text-2xl">ОФОРМЛЕНИЕ ЗАКАЗА</h1>

                <form className="flex flex-col space-y-4 mt-4" onSubmit={handleSubmit}>

                    <div>
                        <label htmlFor="lastName" className="block font-medium text-gray-700 font-arial text-xl">
                            Фамилия
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            className="mt-1 px-4 py-3 w-full rounded-md input-custom"
                            placeholder="Фамилия"
                            value={name.lastName}
                            onChange={handleNameChange}
                            style={{
                                background: '#10171F',
                                boxShadow: '0px 4px 4px 0px #00000040',
                                color: '#fff',
                            }}
                        />
                    </div>

                    <div>
                        <label htmlFor="firstName" className="block font-medium text-gray-700 font-arial text-xl">
                            Имя
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            className="mt-1 px-4 py-3 w-full rounded-md input-custom"
                            placeholder="Имя"
                            value={name.firstName}
                            onChange={handleNameChange}
                            style={{
                                background: '#10171F',
                                boxShadow: '0px 4px 4px 0px #00000040',
                                color: '#fff',
                            }}
                        />
                    </div>

                    <div>
                        <label htmlFor="middleName" className="block font-medium text-gray-700 font-arial text-xl">
                            Отчество
                        </label>
                        <input
                            type="text"
                            id="middleName"
                            className="mt-1 px-4 py-3 w-full rounded-md input-custom"
                            placeholder="Отчество"
                            value={name.middleName}
                            onChange={handleNameChange}
                            style={{
                                background: '#10171F',
                                boxShadow: '0px 4px 4px 0px #00000040',
                                color: '#fff',
                            }}
                        />
                    </div>
                    <div>
                        <label htmlFor="phoneNumber" className="block font-medium text-gray-700 font-arial text-xl">
                            Номер телефона
                        </label>
                        <input
                            type="text"
                            id="phoneNumber"
                            className="mt-1 px-4 py-3 w-full rounded-md input-custom"
                            placeholder="Телефон"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
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
                            className="mt-1 px-4 py-3 w-full rounded-md input-custom"
                            placeholder="Город"
                            value={address.city}
                            onChange={handleAddressChange}
                            style={{
                                background: '#10171F',
                                boxShadow: '0px 4px 4px 0px #00000040',
                                color: '#fff',
                            }}
                        />
                        <input
                            type="text"
                            id="street"
                            className="mt-4 px-4 py-3 w-full rounded-md input-custom"
                            placeholder="Улица"
                            value={address.street}
                            onChange={handleAddressChange}
                            style={{
                                background: '#10171F',
                                boxShadow: '0px 4px 4px 0px #00000040',
                                color: '#fff',
                            }}
                        />
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="text"
                                id="home"
                                className="mt-4 px-4 py-3 w-full rounded-md input-custom"
                                placeholder="Дом"
                                value={isHomeSelected ? address.home : ''} 
                                onChange={handleAddressChange}
                                onFocus={handleSelectHome}
                                style={{
                                    background: '#10171F',
                                    boxShadow: '0px 4px 4px 0px #00000040',
                                    color: '#fff',
                                }}
                            />
                            <input
                                type="text"
                                id="apartment"
                                className="mt-4 px-4 py-3 w-full rounded-md input-custom"
                                placeholder="Квартира"
                                value={!isHomeSelected ? address.apartment : ''} 
                                onChange={handleAddressChange}
                                onFocus={handleSelectApartment} 
                                style={{
                                    background: '#10171F',
                                    boxShadow: '0px 4px 4px 0px #00000040',
                                    color: '#fff',
                                }}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-4">
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="onlinePayment"
                                onChange={handlePaymentMethodChange}
                                checked={paymentMethod === 'onlinePayment'}
                                className="mt-4"
                            />
                            <label htmlFor="onlinePayment" className="ml-2 text-white text-lg font-arial">
                                Оплата онлайн
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="cashPayment"
                                className="mt-4"
                                onChange={handlePaymentMethodChange}
                                checked={paymentMethod === 'cashPayment'}
                            />
                            <label htmlFor="cashPayment" className="ml-2 text-white text-lg font-arial">
                                Оплата наличными
                            </label>
                        </div>
                    </div>

                    <ButtonForEveryOne 
                        className="mt-4" 
                        type="submit" 
                        disabled={loading} 
                    >
                        {loading ? 'Загрузка...' : 'Оформить заказ'}
                    </ButtonForEveryOne>
                </form>
            </div>
        </div>
    );
};

export default ClothingCartForm;
