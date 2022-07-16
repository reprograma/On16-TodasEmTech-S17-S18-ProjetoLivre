const mongoose = require("mongoose");

const vagasSchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
    
    nomeDaEmpresa: { type: String, required: true },
    cargo: { type: String, required: true},
    horario: { type: Number, required: true },
    flexibilidade: { type: String, required: true },
    beneficios: { type: String, required: true},
    salario: { type: Number, required: true},
    regime: { type: String, required: true},
    tecnologiasExigidas: { type: String, required: true},
    experienciaExigida: { type: String, required: true},
    areaExperiencia: { type: String, required: true },
    escolaridade: { type: Number, required: true},
    local: { type: Number, required: true},
  },
  {
    versionKey: false,
  }
);

const vagasCollection = mongoose.model("collectionVagas", vagasSchema);
module.exports = vagasCollection 