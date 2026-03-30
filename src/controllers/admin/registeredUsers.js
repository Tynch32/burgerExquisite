const db = require("../../database/models");
const moment = require('moment');
const addPuntos = require('../../middlewares/addPuntos')

module.exports = (req,res) => {
    let title="Usuarios Registrados";
    db.User.findAll({
        order: [['role', 'DESC']]
    })
        .then((users)=>{
            return res.render('registeredUsers',{users,moment,addPuntos,title})
    }).catch(error=>console.log(error));
}