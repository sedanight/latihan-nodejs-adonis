var express = require('express');
var router = express.Router();

const UserControllers = require("../controller/UserController");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/register", UserControllers.register) ;
router.get("/karyawan", UserControllers.findAll) ;
router.post("/login", UserControllers.login) ;
router.post("/karyawan/:name/siswa", UserControllers.addSiswa);

module.exports = router;
