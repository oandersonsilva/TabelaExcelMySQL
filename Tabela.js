class Tabela {
  constructor(table) {
    this.dados = table.split('\n')
    this.title = this.dados[0].split(',')
    this.dados.shift()
    this.rows = []
    this.dados.forEach(element => {
      this.rows.push(element.split(','))
    })
  }
}

module.exports = Tabela
