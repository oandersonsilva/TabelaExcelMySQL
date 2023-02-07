const Sequelize = require('sequelize')
const connection = require('./connection')
const addCampos = require('../addCampos')

function criarTabela(tabela, table1) {
  const modelTable = connection.define(tabela, {})

  modelTable.sync({ force: true }).then(() => {
    console.log('tabela criada')
    addCampos(table1.title, tabela)
  })

  console.log('cadastro feito')
}

module.exports = criarTabela
