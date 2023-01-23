const Sequelize = require('sequelize')
const connection = require('./connection')

const modelTable = connection.define('TABLE2', {
  nome: { type: Sequelize.STRING, allowNull: false }
})

modelTable.sync({ force: true }).then(() => {
  console.log('tabela criada')
})

module.exports = modelTable
