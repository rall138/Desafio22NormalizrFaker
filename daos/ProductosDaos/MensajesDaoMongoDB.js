const MensajesContenedor = require('../../contenedores/MensajesContenedor')

class MensajesDaoMongoDB extends MensajesContenedor {

    constructor(){
        super("mongodb+srv://root:View$0nic@cluster0.bs5di56.mongodb.net/test")
    }

}

module.exports = MensajesDaoMongoDB
