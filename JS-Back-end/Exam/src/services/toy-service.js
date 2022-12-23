const Toy = require('../models/Toy');

exports.create = (toyData) => Toy.create(toyData);

exports.getById = (id) => Toy.findById(id);

exports.getAll = () => Toy.find({}).lean();

exports.deleteToy = (id) => Toy.findByIdAndDelete(id);

exports.updateToy = (id, toyData) => Toy.findByIdAndUpdate(id, toyData, {runValidators: true});
