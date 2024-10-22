const { validationResult, body } = require('express-validator');
const Order = require('../models/orders');

const validateOrder = [
  body('recipient').notEmpty().withMessage('Имя получателя обязательно'),
  body('recipient.phoneNumber').notEmpty().withMessage('Номер телефона обязателен'),
  body('recipient.userEmail').notEmpty().withMessage('Email пользователя обязателен'), // Добавлено
  body('deliveryAddress').isObject().withMessage('Адрес доставки обязателен'),
  body('paymentMethod').isIn(['cashPayment', 'onlinePayment']).withMessage('Неверный метод оплаты')
];

const createOrder = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Получаем userEmail из объекта recipient
  const userEmail = req.body.recipient.userEmail; // Обновлено

  try {
    const { recipient, deliveryAddress, paymentMethod, products } = req.body;

    const newOrder = new Order({
      userEmail,
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
    const { email } = req.query;

    const orders = await Order.find({ userEmail: email });

    res.status(200).json(orders);
  } catch (error) {
    console.error('Ошибка при получении заказов:', error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};
const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedOrder = await Order.findByIdAndDelete(id);
    if (!deletedOrder) {
      return res.status(404).json({ message: 'Заказ не найден' });
    }
    res.json(deletedOrder);
  } catch (error) {
    console.error('Ошибка при удалении заказа:', error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};

module.exports = {
  createOrder,
  getOrder,
  validateOrder,
  deleteOrder
};
