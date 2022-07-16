require("dotenv-safe").config();
const { connect } = require("../model/database");
const candidatasModel = require("../model/candidatas");
const empresaModel = require("../model/empresa");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;
const { auth } = require("./autenticacao");

connect();

/// REGISTRO 

const registerNewCandidata = async (req, res) => {
  
  const  { email, password } = req.body

  if (!email || !password) {
    return res.status(422).send({
      message: 'Invalid payload',
    });
  }

  const encryptedPassword = await bcrypt.hash(req.body.password, 10);

  req.body.password = encryptedPassword;
  const newCandidata = new candidatasModel(req.body);

  try {
    await newCandidata.save();

    res.status(201).send({
      message: "Candidata cadastrada com sucesso!",
      candidata: newCandidata,
    });
  } catch (err) {
    res.status(424).send({ message: err.message })
  }
};


/// ROTA DE LOGIN

const login = (req, res) => {
    candidatasModel.findOne({ email: req.body.email }, (err, candidata) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    };
    if (!candidata) {
      return res.status(404).send('Não existe candidata cadastrada com esse email');
    };

    const password = bcrypt.compareSync(req.body.password, candidata.password);
    if (!password) {
      return res.status(403).send('Acesso negado: senha incorreta');
    };

    const token = jwt.sign({ email: candidata.email }, SECRET);
    return res.status(200).send( { token:token, candidata } );
  });
};

///// ALTERAR OU ACRESCENTAR DADOS CURRICULO

  const alterarCandidatas = (req, res) => {
  const token = auth(req, res);
  jwt.verify(token, SECRET, (err) => {
    if (err) {
      return res.status(403).send("Token inválido!");
    }
    const id = req.params.id;
    const updateCandidata = req.body;
    candidatasModel.findByIdAndUpdate(id, updateCandidata, (err, candidata) => {
      if (err) {
        return res.status(424).send({ message: err.message });
      } else if (candidata) {
        return res.status(200).send("Atualizado com sucesso!");
      }
      res.status(404).send("Registro não encontrado");
    });
  });
};


//// DELETAR CURRICULO
  const deletarCandidata = (req, res) => {
  const token = auth(req, res);
  jwt.verify(token, SECRET, (err) => {
    if (err) {
      return res.status(403).send("Token inválido!");
    }
    const params = req.query;
    candidatasModel.deleteMany(params, (err, candidata) => {
      if (err) {
        return res.status(424).send({ message: err.message });
      } else if (candidata) {
        return res.status(200).send("Removide com sucesso!");
      }
      res.status(404).send("Registro não encontrado!");
    });
  });
};

//// TODAS AS EMPRESAS 

  const allEmpresas = (req, res) => {
  empresaModel.find((err, empresa) => {
    if (err) { 
      return res.status(424).send({ message: err.message });
    }
    res.status(200).send(empresa);
  });
};


module.exports = {
    allEmpresas,
    login,
    registerNewCandidata,
    alterarCandidatas,
    deletarCandidata,
};