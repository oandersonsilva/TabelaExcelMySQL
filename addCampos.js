const Sequelize = require('sequelize')
const interfaceTable = require('./database/interface')

function addColuna(nome) {
  interfaceTable.addColumn('TABLE1s', nome, {
    type: Sequelize.STRING
  })
}

function addCampos(titulo) {
  titulo.forEach(Element => {
    addColuna(Element)
  })
}

module.exports = addCampos
