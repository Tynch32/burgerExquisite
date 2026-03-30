const { unlinkSync, existsSync } = require("fs");
const { validationResult } = require("express-validator");
const db = require("../../database/models");

module.exports = async (req, res) => {
  const errors = validationResult(req);
  if(errors.isEmpty()){
    let nuevosValores={
      tokens:req.body.tokens,
      updated_at: new Date()
    }
      db.User.update(nuevosValores,{
        where:{
          id:req.params.id
        }
      }).then(()=>{
        return res.redirect('/userTokenEdit')
      }).catch(error=>console.log(error));
  }
};
