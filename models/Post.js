const db = require("./db");

const Post = db.sequelize.define('produtos', {
    nome_pimenta: {
        type: db.Sequelize.STRING
    },
    tipo_pimenta: {
        type: db.Sequelize.STRING
    },
    descricao_pimenta:{
        type: db.Sequelize.STRING
    },
    preco_pimenta: {
        type: db.Sequelize.DECIMAL
    }

})

//  Post.sync({force:true})

module.exports = Post