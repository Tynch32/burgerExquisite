const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const categoriesFilePath = path.join(__dirname, '../../data/categoriesDataBase.json');
const categories = JSON.parse(fs.readFileSync(categoriesFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

products.forEach(product => {
  product.price = `$${toThousand(product.price)}`
});

module.exports = (req, res) => {
  let title = "Burguer Exquisite"
  return res.render('index', { title, categories, products});
}