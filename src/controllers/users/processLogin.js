const { validationResult } = require("express-validator")
const db = require("../../database/models");

module.exports = async (req,res) => {

    const errors = validationResult(req);

    if(errors.isEmpty()){
        const user = await db.User.findOne({ where: { email: req.body.email }});
        req.session.userLogin = {
            id : user.id,
            role: user.role
        }
        if(req.body.remember == undefined){
            res.cookie('burgerExquisite',req.session.userLogin,{
                maxAge : 1000 * 60 * 60})
        }
        req.body.remember !== undefined && res.cookie('burgerExquisite',req.session.userLogin,{
            maxAge : 1000 * 60 * 60 * 24 * 365
        })
        return res.redirect('/')
    }else {
        return res.render('login',{
            errors : errors.mapped(),
            old : req.body
        });
    }
}