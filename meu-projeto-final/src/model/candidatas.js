const mongoose = require('mongoose');

const candidatasSchema = new mongoose.Schema({ 
    _id: {type: mongoose.Schema.Types.ObjectId, auto: true, required: true},

        nomeCompleto: {type: String, required: true},
        contatoTelefone: {type: Number},
        contatoEmail: {type: String},
        dataNascimento: {type: String},
        localNascimento: {type: String},
        escolaridade: {type: String},
        objetivo: {type: String},
        resumoProfissional: {type: String},
        email: { type: String, required: true },
        password: { type: String, required: true },
        cargoPretendido: { type: String},
        flexibilidade: { type: Boolean},
        beneficiosPretendidos: {type: String},
        salarioPretendido: {type: Number},
        regime: {type: Number},
        tecnologias: {type: String},
        experienciaExigida: {type: Number},
        areaDeExperiencia: {type: String},
        escolaridade: {type: Number},
        local: {type: Number},
        curriculo: {type: String},
 
    },
        {
            versionKey: false
        } 
);


const candidatasCollection = mongoose.model('candidatas', candidatasSchema)
module.exports = candidatasCollection 