var express = require('express');
const async = require('hbs/lib/async');
var router = express.Router();

const jwt = require('jsonwebtoken')

const userController = require('../controllers/UserController')
const authentication = require('../../middle/authertication')

/* GET home page. */
router.get('/', [authentication.checkLogin], function(req, res, next) {
  res.render('index', { title: 'Express', hoTen: "Dang Tuan Nghia" });
});

// http://localhost:3000/login
// method: get
// detail: hiển thị trang lgin
// author: Nghĩa
// date: 17/03/2022
router.get('/login', [authentication.checkLogin], function(req, res, next) {
  res.render('login', {message: ""});
});

// http://localhost:3000/register
// method: get
// detail: hiển thị trang register
// author: Nghĩa
// date: 02/04/2022
router.get('/register', function(req, res, next) {
  res.render('register');
});


// http://localhost:3000/login
// method: get
// detail: thực hiện đăng nhập
// author: Nghĩa
// date: 17/03/2022
router.post('/login', async function(req, res, next) {
  // body: form gửi lên
  const { username, password } = req.body;
  let message = '';

  //Thực hiện đăng nhập
  const result = await userController.login(username, password)
  console.log(result);
  if(result){
    //secret key
    const token = jwt.sign(
      { id: result._id, username: result.username }, 'iloveyou')
    req.session.token = token;
    //neu dung' doi trang san pham
    res.redirect('/san-pham');
  }else{
    
    res.redirect('/login');
  }

});

// http://localhost:3000/register
// method: post
// detail: thực hiện đăng kí tài khoản
// author: Nghĩa
// date: 02/04/2022
router.post('/register', async function(req, res, next) {
  // body: form gửi lên
  const { email, password, confirm_password } = req.body;
  //Thực hiện đăng nhập
  const result = await userController.register(email, password, confirm_password)
  console.log("===> ", email, password, confirm_password)
  if (result) {
    //neu dung' doi trang san pham
    res.redirect('/login');
  } else {
    res.redirect('/register');
  }


});

router.get('/dang-xuat', function(req, res, next) {
  req.session.destroy(function(err){
    res.redirect('login');
  })
  // nếu đăng xuất thành công chuyển qua đăng nhập
  
});

//req.body: submit form
// req.query: ?a=10&b=20
// req.params: /:id/submit

// dùng cho web
// res.render: tải ra một trang html, giao diện
// res.redirect: chuyển sang url nào đó

// dùng cho api
// res.json: trả về dữ liệu dạng json



module.exports = router;
