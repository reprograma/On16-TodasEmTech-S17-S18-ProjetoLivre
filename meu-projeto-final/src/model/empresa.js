const mongoose = require("mongoose");

const empresaSchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
    
    nome: { type: String, required: true },
    CNPJ: { type: Number, required: true},
    finsLucrativos: { type: Boolean, required: true},
    email: { type: String, required: true },
    password: { type: String, required: true },
    
  },
  {
    versionKey: false,
  }
);

const empresaCollection = mongoose.model("collectionEmpresas", empresaSchema);
module.exports = empresaCollection 