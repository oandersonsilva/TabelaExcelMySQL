const addCampos = require('./addCampos')
const cadastro = require('./Cadastro')
const criarTabela = require('./database/Model')
const leitura = require('./leitura')
const retiraS = require('./retiraS')
const Tabela = require('./Tabela')

var csv = './arquivo.csv'

async function Main() {
  var tabela = await leitura(csv)
  var table1 = new Tabela(tabela)

  console.log(table1.title)
  console.log(table1.rows)

  var nomeTabela = 'maremoto'
  nomeTabela = retiraS(nomeTabela)
  criarTabela(nomeTabela, table1)
  //Começar a montar a lógica do codastro dos Itens

  //cadastro(table1.rows)
}

Main()
