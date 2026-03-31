module.exports = (req,res,next) => {
    if(req.cookies.burgerExquisite){
        req.session.userLogin = req.cookies.burgerExquisite
    }
    next()
}