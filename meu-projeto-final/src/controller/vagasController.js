require("dotenv-safe").config();
const { connect } = require("../model/database");
const vagasModel = require("../model/vagas");

connect();

/// NOVA VAGA REGISTRO

        const getAllVagas = (req, res) => {
        
        vagasModel.find((err, vagas) => {
          if (err) {
            return res.status(424).send({ message: err.message });
          }
          res.status(200).send(vagas);
        });
      };

      module.exports = {
        getAllVagas
      }