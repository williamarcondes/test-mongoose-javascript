const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
  id: ObjectId,
  title: String,
  description: String,
  price: Number
});

const ProductModel = mongoose.model('Product', ProductSchema);

module.exports = ProductModel;