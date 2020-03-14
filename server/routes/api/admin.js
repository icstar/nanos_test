var mongoose = require('mongoose');
var router = require('express').Router();
var passport = require('passport');
var User = mongoose.model('User');
var Equipment = mongoose.model('Equipment');
var fs = require('fs');

var auth = require('../auth');

router.get('/advertise', auth.optional, function(req, res, next){
  fs.readFile('data.json', 'utf8', function (err, data) {
    obj = JSON.parse(data);
    return res.json(obj);
  });
  // User.findById(req.payload.id).then(function(user){
  //   if(user.role == 1){
  //     User.find({}).then(function(users){
  //       if(!users){ return res.sendStatus(401); }
  //       return res.json(users);
  //     }).catch(next);      
  //   } else {
  //     return res.status(200).json({
  //       success:true,
  //       redirectUrl: '/signin'
  //     });
  //   }
  // });
});

router.get('/equipment',  auth.required, function(req, res, next){
  User.findById(req.payload.id).then(function(user){
    if(user.role == 1){
      Equipment.find({}).then(function(equips){
        if(!equips){ return res.sendStatus(401); }

        return res.json(equips);
      }).catch(next);      
    } else {
      return res.status(200).json({
        success:true,
        redirectUrl: '/signin'
      });      
    }
  });

});

router.post('/delEmployee', auth.required, function(req, res, next){
  User.remove({_id : req.body.user_id}, function(err){
    if(!err){
      User.find({}).then(function(users){
        return res.json(users);
      });
    } else {
      return "fail";
    }
  });
});
router.post('/updateEmployee', auth.required, function(req, res, next) {
  User.findById(req.body.user._id).then(function(user){
    if(!user){ return res.sendStatus(401); }

    // only update fields that were actually passed...
    if(typeof req.body.user.name !== 'undefined'){
      user.name = req.body.user.name;
    }
    if(typeof req.body.user.email !== 'undefined'){
      user.email = req.body.user.email;
    }
    if(typeof req.body.user.role !== 'undefined'){
      user.role = req.body.user.role;
    }
    if(typeof req.body.user.status !== 'undefined'){
      user.status = req.body.user.status;
    }

    return user.save().then(function(){
      User.find({}).then(function(user){
        return res.json(user);
      });
    });    
  });
});

router.post('/addEmployee', auth.required, function(req, res, next) {
  var user = new User(req.body.user);
  return user.save().then(function(){
    return res.json(user);
  });
});

router.post('/delEquipment', auth.required, function(req, res, next){
  Equipment.remove({_id : req.body.equip_id}, function(err){
    if(!err){
      Equipment.find({}).then(function(equips){
        return res.json(equips);
      });
    } else {
      return "fail";
    }
  });
});
router.post('/updateEquipment', auth.required, function(req, res, next) {
  Equipment.findById(req.body.equip._id).then(function(equip){
    if(!equip){ return res.sendStatus(401); }

    // only update fields that were actually passed...
    if(typeof req.body.equip.name !== 'undefined'){
      equip.name = req.body.equip.name;
    }
    if(typeof req.body.equip.count !== 'undefined'){
      equip.count = req.body.equip.count;
    }
    if(typeof req.body.equip.size !== 'undefined'){
      equip.size = req.body.equip.size;
    }
    if(typeof req.body.equip.manager !== 'undefined'){
      equip.manager = req.body.equip.manager;
    }

    return equip.save().then(function(){
      Equipment.find({}).then(function(equip){
        return res.json(equip);
      });
    });    
  });
});
router.post('/addEquipment', auth.required, function(req, res, next) {
  var equipment = new Equipment(req.body.equip);
  return equipment.save().then(function(){
    return res.json(equipment);
  });
});
module.exports = router;
