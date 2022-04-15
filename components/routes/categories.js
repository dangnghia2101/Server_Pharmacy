var express = require('express');
var router = express.Router();

const categoryController = require('../components/controllers/CategoryControler')
const authentication = require('../middle/authertication')


router.get('/', async function (req, res, next) {
  // Lấy danh sách danh mục từ database
  const data = await categoryController.getCategories();
  res.render('categories', { categories: data })
});


// http://localhost:3000/categories/insert
// method: get
// detail: hiển thị trang thêm mới danh mục
// author: Nghĩa
// date: 02/04/2022

router.get('/insert', async function(req, res, next) {
  // thêm mới một sản phẩm vào databse
  const categories = await categoryController.getCategories();
  res.render('category_insert', {categories: categories});
});

router.get('/:id/edit', async function(req, res, next) {
  // Lấy thông tin  chi tiết một danh mục
  const { id } = req.params;
  const category = await categoryController.getCategoryById(id);
  res.render('category_update', {category: category});
});

// update category information
router.post('/:id/edit',  async function (req, res, next) {
  // cập nhật thông tin 1 sản phẩm
  let { body, file, params } = req;
  await categoryController.update(params.id, body);

  res.redirect('/categories');
});

// insert category information
router.post('/',  async function (req, res, next) {
  // cập nhật thông tin 1 sản phẩm
  let { body} = req;

  await categoryController.insert(body);

  res.redirect('/categories');
});

// http://localhost:3000/categories/:id/delete
// method: delete
// detail: xóa một danh mục khỏi database
// author: Nghĩa
// date: 2/04/2022

router.delete('/:id/delete', async function(req, res, next) {
  // cập nhật thông tin 1 danh mục
  const {id} = req.params;
  await categoryController.delete(id);

  res.json({result: true});
});


module.exports = router;
