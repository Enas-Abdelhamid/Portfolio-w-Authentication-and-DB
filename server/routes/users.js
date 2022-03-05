/* users.js file under routes - Enas Abdelhamid - 301234410 - March 04, 2022 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
