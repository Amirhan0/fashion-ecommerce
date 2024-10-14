const { validationResult, body } = require('express-validator');
const Order = require('../models/orders');

const validateOrder = [
    body('recipient').notEmpty().withMessage('Имя получателя обязательно'), 
    body('recipient.phoneNumber').notEmpty().withMessage('Номер телефона обязателен'),
    body('deliveryAddress').isObject().withMessage('Адрес доставки обязателен'),
    body('deliveryAddress.home').optional().isString(),
    body('deliveryAddress.apartment').optional().isString(),
    body('paymentMethod').isIn(['cashPayment', 'onlinePayment']).withMessage('Неверный метод оплаты'),
];
const createOrder = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { recipient, deliveryAddress, paymentMethod, products  } = req.body;

        if (deliveryAddress.home && deliveryAddress.apartment) {
            return res.status(400).json({ error: 'Укажите только номер дома или квартиры' });
        }

        const newOrder = new Order({
            recipient,
            deliveryAddress,
            paymentMethod,
            products
        });

        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        console.error('Ошибка при создании заказа:', error);
        res.status(500).json({ error: 'Ошибка при создании заказа' });
    }
};

const getOrder = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        console.error("Ошибка при получении заказа:", error);
        res.status(500).json({ message: "Ошибка сервера" });
    }
};

module.exports = {
    createOrder,
    getOrder,
    validateOrder,
};
