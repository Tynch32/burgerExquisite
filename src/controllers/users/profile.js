module.exports = (req,res) => {
    let title = "Perfil";
    return res.render('profile.ejs', {title});
}