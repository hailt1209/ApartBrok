var express = require('express');
var router = express.Router();
var User = require('../model/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/addUser', function(req, res, next) {
  var hailt = new User({
	  name: 'hai2',
	  username: 'hailt2',
	  password: '1234'
  });
  
  hailt.save(function(err){
	  if (err) throw err;
	  
	  console.log('save ok');
  });

  // get all the users
  User.find({}, function(err, users) {
      if (err) throw err;

  	  // object of all the users
  	  console.log(users);
  });
	
  res.render('index', { title: 'Express' });
});

module.exports = router;
