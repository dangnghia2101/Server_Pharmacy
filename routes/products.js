var express = require('express');
var router = express.Router();

const productController = require('../components/products/controller')

// http://localhost:3000/san-pham
// method: get
// detail: lấy danh sách sản phẩm
// author: Nghĩa
// date: 17/03/2022

router.get('/', async function(req, res, next) {
  // Lấy danh sách sản phẩm từ database
  const data = await productController.getProducts();
  res.render('products', { products: data})
});

// http://localhost:3000/san-pham/
// method: post
// detail: thêm mới sản phẩm
// author: Nghĩa
// date: 17/03/2022

router.post('/', function(req, res, next) {
  // thêm mới một sản phẩm
  res.render('products');
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
  res.render('product', {product: product});
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
// method: put
// detail: cập nhật thông tin một sản phẩm
// author: Nghĩa
// date: 17/03/2022

router.put('/:id/edit', function(req, res, next) {
  // cập nhật thông tin 1 sản phẩm
  res.render('products');
});


// http://localhost:3000/san-pham/:id/delete
// method: delete
// detail: xóa một sản phẩm khỏi database
// author: Nghĩa
// date: 17/03/2022

router.delete('/:id/delete', function(req, res, next) {
  // cập nhật thông tin 1 sản phẩm
  res.render('products');
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
