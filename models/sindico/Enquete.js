var mongoose = require('mongoose');

var EnqueteSchema = new mongoose.Schema({
    data:  { type: String, required: true },
    titulo: {type: String, required: true},
    descricao: {type: String, require: true},
});

module.exports = mongoose.model('Enquete', EnqueteSchema);