var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var slug = require('slug');
var User = mongoose.model('User');

var EquipmentSchema = new mongoose.Schema({
  slug: {type: String, lowercase: true, unique: true},
  name: String,
  manager: String,
  count: Number,
  size: String,
}, {timestamps: true});

EquipmentSchema.plugin(uniqueValidator, {message: 'is already taken'});

EquipmentSchema.pre('validate', function(next){
  if(!this.slug)  {
    this.slugify();
  }

  next();
});

EquipmentSchema.methods.slugify = function() {
  this.slug = slug(this.name) + '-' + (Math.random() * Math.pow(36, 6) | 0).toString(36);
};

EquipmentSchema.methods.updateFavoriteCount = function() {
  var article = this;

  return User.count({favorites: {$in: [article._id]}}).then(function(count){
    article.favoritesCount = count;

    return article.save();
  });
};

EquipmentSchema.methods.toJSONFor = function(user){
  return {
    slug: this.slug,
    name: this.name,
    count: this.count,
    size: this.size,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
    manager: this.manager,
  };
};

mongoose.model('Equipment', EquipmentSchema);
