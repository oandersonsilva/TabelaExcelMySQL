const Sequelize = require('sequelize')
const connection = require('./connection')

const interfaceTable = connection.getQueryInterface()

module.exports = interfaceTable
