const bodyParser = require('body-parser');
const productRoute = require('../routes/productRoute')

module.exports = (express) => {
    express.use(bodyParser.urlencoded({
        extended:true
    }))

    express.use(bodyParser.json())
    express.use(productRoute)
}