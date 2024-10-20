const express = require('express')
const app = express()
const cors = require('cors')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const UsersRoutes = require('./routes/users-routes')
const CategoryRoutes = require('./routes/category-routes')
const ProductsRoutes = require('./routes/products-routes')
const OrdersRoutes = require('./routes/order-routes')
const adminRoutes = require('./routes/admin-routes')
dotenv.config()

const port = process.env.PORT || 4000
const db = process.env.MONGO_DB_CONNECTION 

app.use(express.json());

mongoose.connect(db)
  .then(() => console.log('MongoDB database connection'))
  .catch((error) => console.log(error))

app.get('/api/items', (req, res) => {
  res.send("Апи работает!")
})

app.use(cors())
app.use(methodOverride())
app.use(UsersRoutes)
app.use(CategoryRoutes)
app.use(ProductsRoutes)
app.use(OrdersRoutes)
app.use(adminRoutes)

app.listen(port, () => {
  console.log(`Сервер запустился на порту ${port}`)
})