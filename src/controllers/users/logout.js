module.exports = (req,res) => {
    req.session.destroy();
    res.cookie('burgerExquisite', null,{
        maxAge : -1
    })
    
    return res.redirect('/')
}