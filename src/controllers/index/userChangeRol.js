const db = require("../../database/models");

module.exports = async (req, res) => {
    let valor = await db.User.findOne({
        attributes:['role'],
        where:{
            id: req.params.id
        }
    });
    if(valor.dataValues.role==0){
        valor=1
    }else{
        valor=0
    }
    await db.User.update({role:valor},{where:{
        id:req.params.id
    }})
    res.redirect('/admin');
}