const Admin = require('../models/admin');
const postAdmin = async (req, res) => {
  const { emailAdmin, passwordAdmin } = req.body;

  if (!emailAdmin || !passwordAdmin) {
    return res.status(400).json({ message: 'Все поля обязательны' });
  }

  try {
    const admin = await Admin.findOne({ emailAdmin });
    if (!admin) {
      return res.status(401).json({ message: 'Неверный email или пароль' });
    }

    res.status(200).json({ message: 'Успешный вход' });
  } catch (error) {
    console.log('Ошибка при проверке данных администратора', error);
    res.status(500).json({ message: 'Ошибка на сервере' });
  }
};

module.exports = {
  postAdmin,
};
