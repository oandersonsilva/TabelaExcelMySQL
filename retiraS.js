function retiraS(nome) {
  if (nome[nome.length - 1] == 's') {
    nome = nome.slice(0, -1)
  }
  return nome
}

module.exports = retiraS
