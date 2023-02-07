const Sequelize = require('sequelize')
const interfaceTable = require('./database/interface')

function addColuna(nome, tabela) {
  interfaceTable.addColumn(tabela, nome, {
    type: Sequelize.STRING
  })
}

function addCampos(titulo, tabela) {
  tabela += 's'
  console.log
  titulo.forEach(Element => {
    addColuna(Element, tabela)
  })
}

module.exports = addCampos
