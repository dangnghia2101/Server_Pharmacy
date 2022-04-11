var express = require('express');
var router = express.Router();

const userController = require('../components/users/controller')
const productController = require('../components/products/controller')

const jwt = require('jsonwebtoken')

const authentication = require('../middle/authertication')

// http://localhost:3000/api/login
// method: get
// detail: thực hiện đăng nhập
// author: Nghĩa
// date: 17/03/2022
router.post('/login', async function (req, res, next) {
  // body: form gửi lên
  const { email, password } = req.body;


  //Thực hiện đăng nhập
  const result = await userController.login(email, password)
  if (result) {
    //secret key
    const token = jwt.sign(
      { id: result._id, username: result.email }, 'iloveyou')
    //neu dung' doi trang san pham
    res.json({ status: true, result, token });
  } else {
    res.json({ status: false });
  }

});

// http://localhost:3000/api/register

router.post('/register', async function (req, res, next) {
  // body: form gửi lên
  const { email, password, confirm_password } = req.body;
  //Thực hiện đăng nhập
  const result = await userController.register(email, password, confirm_password)
  if (result) {
    //neu dung' doi trang san pham
    res.json({ status: true });
  } else {
    res.json({ status: false });
  }

});

// http://localhost:3000/api/products

router.get('/products', [authentication.checkToken], async function (req, res, next) {
  // Lấy danh sách sản phẩm từ database
  const products = await productController.getProducts();
  // res.json(products)
  return res.json(products)
});

// http://localhost:3000/api/products

router.get('/products/:id/detail', [authentication.checkToken], async function (req, res, next) {
  const { id } = req.params;
  // Lấy danh sách sản phẩm từ database
  const products = await productController.getProductById(id);
  res.json(products)
});


module.exports = router;