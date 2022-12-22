const ProductosContenedor = require('../../contenedores/ProductosContenedor')

class ProductosDaoMongoDB extends ProductosContenedor {

    constructor(){
        super("mongodb+srv://root:View$0nic@cluster0.bs5di56.mongodb.net/test")
    }

}

module.exports = ProductosDaoMongoDB
