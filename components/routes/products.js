var express = require('express');
var router = express.Router();

const productController = require('../components/controllers/ProductController')
const categoryController = require('../components/controllers/CategoryControler')

const upload = require('../middle/upload')
const authentication = require('../middle/authertication')
// http://localhost:3000/san-pham
// method: get
// detail: lấy danh sách sản phẩm
// author: Nghĩa
// date: 17/03/2022

router.get('/', [authentication.checkLogin], async function(req, res, next) {
  // Lấy danh sách sản phẩm từ database
  const data = await productController.getProducts();
  res.render('products', { products: data})
});

// http://localhost:3000/san-pham/
// method: post
// detail: thêm mới sản phẩm
// author: Nghĩa
// date: 17/03/2022

// middleware
router.post('/', [upload.single('image')], async function(req, res, next) {
  // thêm mới một sản phẩm vào database
  let {body, file} = req;
  let image ='';
  if(file){
    image = `https://serverandroidnangcao.herokuapp.com/images/${file.filename}`;
  }
  body = {...body, image: image}
  await productController.insert(body);

  res.redirect('/san-pham');
});


// http://localhost:3000/san-pham/
// method: get
// detail: hiển thị trang thêm mới sản phẩm
// author: Nghĩa
// date: 22/03/2022

router.get('/them-moi', async function(req, res, next) {
  // thêm mới một sản phẩm vào databse
  const categories = await categoryController.getCategories();
  res.render('product_insert', {categories: categories});
});

// http://localhost:3000/san-pham/:id/edit
// method: get
// detail:  Lấy thông tin  chi tiết một sản phẩm
// author: Nghĩa
// date: 17/03/2022

router.get('/:id/edit', async function(req, res, next) {
  // Lấy thông tin  chi tiết một sản phẩm
  const { id } = req.params;
  const product = await productController.getProductById(id);
  console.log("-------------> ", product.category_id)
  const categories = await categoryController.getCategoriesForOneProduct(product.category_id._id);
  res.render('product_update', {product: product, categories: categories});
});

// http://localhost:3000/san-pham/:id/edit
// method: get
// detail:  Lấy thông tin  chi tiết một sản phẩm, đưa lên để sách hàng mua
// author: Nghĩa
// date: 17/03/2022

router.get('/:id/detail', async function(req, res, next) {
  // Lấy thông tin  chi tiết một sản phẩm
  const { id } = req.params;
  const product = await productController.getProductById(id);
  res.render('detailProduct', {product: product});
});



// http://localhost:3000/san-pham/:id/edit
// method: post
// detail: cập nhật thông tin một sản phẩm
// author: Nghĩa
// date: 17/03/2022

router.post('/:id/edit', [upload.single('image')], async function(req, res, next) {
  // cập nhật thông tin 1 sản phẩm
  let {body, file, params} = req;
  
  delete body.image

  if(file){
    image = `https://serverandroidnangcao.herokuapp.com/images/${file.filename}`;
    body = {...body, image: image}
  }

  await productController.update(params.id, body);

  res.redirect('/san-pham');
});


// http://localhost:3000/san-pham/:id/delete
// method: delete
// detail: xóa một sản phẩm khỏi database
// author: Nghĩa
// date: 17/03/2022

router.delete('/:id/delete', async function(req, res, next) {
  // cập nhật thông tin 1 sản phẩm
  const {id} = req.params;
  await productController.delete(id);

  res.json({result: true});
});


// http://localhost:3000/san-pham/thong-ke
// method: get
// detail: thống kê sản phẩm
// author: Nghĩa
// date: 17/03/2022

router.delete('/thong-ke', function(req, res, next) {
  // cập nhật thông tin 1 sản phẩm
  res.render('products');
});

module.exports = router;
