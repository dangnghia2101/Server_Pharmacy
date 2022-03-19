var express = require('express');
const async = require('hbs/lib/async');
var router = express.Router();

const userController = require('../components/users/controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', hoTen: "Dang Tuan Nghia" });
});

// http://localhost:3000/login
// method: get
// detail: hiển thị trang lgin
// author: Nghĩa
// date: 17/03/2022
router.get('/login', function(req, res, next) {
  res.render('login', {message: ""});
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
    res.redirect('/san-pham')
  }else{
    res.redirect('/login')
  }

});

router.get('/dang-xuat', function(req, res, next) {
  // nếu đăng xuất thành công chuyển qua đăng nhập
  res.redirect('/login');
});

// Gửi thông tin từ client lên server
router.post('/them-moi', function(req, res, next) {

});


router.get('/canhday/:canhday/chieucao/:chieucao', function(req, res, next) {
  const {canhday, chieucao} = req.params;
  const ketQua = 1/2 * Number(canhday) * Number(chieucao);
  res.render('stamgiac', { ketQua: ketQua});
});

router.get('/:bac/giai-pt', function(req, res, next) {
  const { bac } = req.params;
  const { a, b, c, d, e } = req.query;

  if (bac == 'bac1'){
    const ketQua = -b/a;
    res.render('ketqua', { tenPT: "Giải phương trình bậc 1:", ketQua: ketQua});
  }else if(bac == 'bac2'){
    if(a!=0){
      delta = b*b - 4*a*c;
      if(delta == 0){
          x = -b/(2*a);
          ketQua = 'Phương trình có nghiệm kép là:';
          ketQua = 'x = ' + x;
      }
      else
      {
          x1 =  (-b + Math.sqrt(delta))/(2*a);
          x2 =  (-b - Math.sqrt(delta))/(2*a);
          ketQua = 'Phương trình có hai nghiệm phân biệt là:';
          ketQua = 'x1 = ' + x1;
          ketQua += ', x2 = ' + x2;
      }
      res.render('ketqua', {tenPT: "Giải phương trình bậc 2:", ketQua:ketQua})
  }
  }else if(bac == 'bac3'){
    ketQua = "x1: 1.2222, x2: 2.453333, x3: -2.33333";
    res.render('ketqua', {tenPT: "Giải phương trình bậc 3:", ketQua:ketQua})
  }else{
    ketQua = "x1: 1.2222, x2: 2.453333, x3: -2.33333, x4: 3";
    res.render('ketqua', {tenPT: "Giải phương trình bậc 4:", ketQua:ketQua})
  }

});


/* GET tinh toan */
router.get('/tinh-toan', function(req, res, next) {
  const {a, b} = req.query;
  const ketQua = 0.5 * Number(a) * Number(b);
  res.render('ketqua', { ketqua: ketQua });
});

/* GET tinh toan http://localhost:3000/tinh-the-tich-hinh-chop?chieuDai=68&chieuRong=98&chieuCao=10 */
router.get('/tinh-the-tich-hinh-chop', function(req, res, next) {
  const {chieuDai, chieuRong, chieuCao} = req.query;
  const ketQua = Number(chieuDai) + Number(chieuRong) * Number(chieuCao);
  res.render('ketqua', { ketqua: ketQua });
});

// API
router.post('/gui-thong-tin', function(req, res, next) {  
  const { name } = req.body;
  res.json({ name: `Xin chào bạn ${name}`})
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
