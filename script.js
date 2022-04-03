let tabelaImc = [
  { classificacao: "Muito abaixo do peso", menorQue: 17 },
  { classificacao: "Abaixo do peso", menorQue: 18.5 },
  { classificacao: "Peso normal", menorQue: 24.9 },
  { classificacao: "Sobrepeso", menorQue: 30 },
  { classificacao: "Obesidade Grau I", menorQue: 35 },
  { classificacao: "Obesidade Grau II", menorQue: 40 },
  { classificacao: "Obesidade Grau III", menorQue: 999 },
]

function gerarTabela() {
  let classificacao = "<tr><td>Classificação</td><td>Menor que</td><td id='btnRemover'></td></tr>"
  let i = 0
  for (item of tabelaImc) {
    let imcReal = (item.menorQue < 500) ? item.menorQue : "-"
    classificacao += `<tr><td>${item.classificacao}</td><td>${imcReal}</td><td id="btnRemover"><button onclick="remove(${i})">-</button></td></tr>`
    i++
  }
  document.getElementById('classificacaoImc').innerHTML = classificacao
  let tabela = ""
  for (item of tabelaImc) {
    tabela += item.classificacao + "," + item.menorQue + "\n"
  }
  document.getElementById('editorImc').value = tabela
}

function atualizaTabela() {
  let leitura = document.getElementById('editorImc').value
  let linhas = leitura.split("\n")
  tabelaImc = []
  for (linha of linhas) {
    let par = linha.split(",")
    if (par.length > 1) {
      let entrada = { classificacao: par[0], menorQue: par[1] }
      tabelaImc.push(entrada)
    }
    gerarTabela()
  }
}

function remove(indice) {
  tabelaImc.splice(indice, 1)
  gerarTabela()
}

function calcular() {
  let peso = Number(document.getElementById('peso').value)
  let altura = Number(document.getElementById('altura').value)
  let res = document.getElementById('res')
  let imc = (peso / (altura * altura)).toFixed(2)
  let classificacao = ""
  let mensagem = ""

  for (item of tabelaImc) {
    if (imc <= item.menorQue) {
      classificacao = item.classificacao
      break
    }
  }

  mensagem = "Peso: " + peso + "kg<br/>" + "Altura: " + altura + "m<br/>" + "IMC: " + imc + "<br/>" + "Classificação: " + classificacao

  res.innerHTML = mensagem
}

