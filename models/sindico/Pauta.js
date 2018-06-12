var mongoose = require('mongoose');

var PautaSchema = new mongoose.Schema({
    local:  { type: String, required: true },
    data:  { type: String, required: true },
    assuntos:  { type: String, required: true }, 
  });

  module.exports = mongoose.model('Pauta', PautaSchema);