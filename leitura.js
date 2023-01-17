const fs = require('fs')
const util = require('util')
var leitura = util.promisify(fs.readFile)

async function Read(arquivo) {
  try {
    return await leitura(arquivo, { encoding: 'utf-8' })
  } catch (error) {
    console.log(error)
  }
}

module.exports = Read
