require("dotenv-safe").config();
const { connect } = require("../model/database");
const empresaModel = require("../model/empresa");
const candidatasModel = require("../model/candidatas");
const vagasModel = require("../model/vagas")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;
const { auth } = require("./autenticacao");

connect();

/// NOVA EMPRESA REGISTRO

const registerNewEmpresa = (req, res) => {
    ;
      // const encryptedPassword = bcrypt.hashSync(req.body.password, 10);
      // req.body.password = encryptedPassword;
      const newEmpresa = new empresaModel(req.body);
      newEmpresa.save((err) => {
        if (err) {
          return res.status(424).send({ message: err.message });
        }
        res.status(201).send({
          message: "A empresa foi registrada com sucesso!",
          administrator: newEmpresa,
        });
      });
      };


  const registerNewVaga = (req, res) => {
  // const token = auth(req, res);
  // jwt.verify(token, SECRET, err => {
  //   if (err) {
  //     return res.status(403).send('Acesso negado: token inválido');
  //   };

    const newVagas = new vagasModel(req.body);
    newVagas.save(err => {
      if (err) {
        return res.status(500).send({ message: err.message });
      };
      res.status(201).send({ 
        message: "A vaga foi registrada com sucesso!"})
    });
  }



  /// ROTA DE LOGIN EMPRESA

  const loginEmpresa = (req, res) => {
      empresaModel.findOne({ email: req.body.email }, (err, empresa) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      };
      if (!empresa) {
        return res.status(404).send('Não há instituição cadastrada com esse email');
      };
  
      const password = bcrypt.compareSync(req.body.password, empresa.password);
      if (!password) {
        return res.status(403).send('Acesso negado: senha incorreta');
      };
  
      const token = jwt.sign({ email: empresa.email }, SECRET);
      return res.status(200).send(token);
    });
  };
  
  
  //// TODAS AS CANDIDATAS 

  const allCandidatas = (req, res) => {
    candidatasModel.find((err, candidata) => {
      if (err) {
        return res.status(424).send({ message: err.message });
      }
      res.status(200).send(candidata);
    });
  };
  


module.exports = {
    registerNewEmpresa,
    registerNewVaga,
    loginEmpresa,
    allCandidatas
}