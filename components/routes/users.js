var express = require('express');
var router = express.Router();

const userController = require('../components/controllers/UserController')
const authentication = require('../middle/authertication')


router.get('/', async function (req, res, next) {
  // Lấy danh sách danh mục từ database
  const data = await userController.getUsers();
  res.render('users', { users: data })
});

// http://localhost:3000/uses/:id/:status/changeStatus
// method: get
// detail: cập nhật trạng thái của tài khoản
// author: Nghĩa
// date: 11/04/2022'

router.post('/:id/changeStatus', async function (req, res, next){
  const {id} = req.params;
  const status = await userController.changeStatus(id)
  res.json({status})
})

module.exports = router