const fs = require('fs')

function escrever(data, texto) {
  texto = data + JSON.stringify(texto)
  fs.writeFile('./arquivo.md', texto, () => {
    console.log('texto escrito')
  })
}
var texto = { nome: 'anderson', idade: 29 }
function ler() {
  fs.readFile('./database/Model.js', { encoding: 'utf-8' }, (err, data) => {
    if (err) {
      console.log('erro de leitura')
    } else {
      escrever(data, texto)
    }
  })
}

ler()
