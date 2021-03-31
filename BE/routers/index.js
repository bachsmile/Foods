const ProductController = require('../controllers/ProductController')
const UserRoute = require('./UserRoute')
const ProductRoute = require('./ProductRoute')

function route(app) {
    app.use('/api/products',ProductRoute)
    app.use('/api/users', UserRoute)
}

module.exports = route  