const addCampos = require('./addCampos')
const leitura = require('./leitura')
const Tabela = require('./Tabela')

var csv = './arquivo.csv'

async function Main() {
  var tabela = await leitura(csv)
  var table1 = new Tabela(tabela)
  console.log(table1.title)
  console.log(table1.rows)
  //modelTable.create({ nome: ' Anderson ' })
  addCampos(table1.title)
}

Main()
