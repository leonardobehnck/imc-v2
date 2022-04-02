let tabelaImc = [
  { classificacao: "Muito abaixo do peso", menorQue: 17 },
  { classificacao: "Abaixo do peso", menorQue: 18.5 },
  { classificacao: "Peso normal", menorQue: 24.9 },
  { classificacao: "Sobrepeso", menorQue: 30 },
  { classificacao: "Obesidade Grau I", menorQue: 35 },
  { classificacao: "Obesidade Grau II", menorQue: 40 },
  { classificacao: "Obesidade Grau III", menorQue: 1000 },
]

function gerarTabela() {

}




function calcular() {
  let peso = Number(document.getElementById('peso').value)
  let altura = Number(document.getElementById('altura').value)
  let res = document.getElementById('res')
  let imc = (peso / (altura * altura)).toFixed(2)
  let classificacao = ""
  let mensagem = ""


  if (peso > 0 && altura > 0) {
    if (imc < 17) {
      classificacao = "Você está muito abaixo do peso."
    }
    else if (imc < 18.5) {
      classificacao = "Você está abaixo do peso."
    }
    else if (imc < 24.9) {
      classificacao = "Peso normal."
    }
    else if (imc < 30) {
      classificacao = "Acima do peso."
    }
    else if (imc < 35) {
      classificacao = "Obesidade Grau I."
    }
    else if (imc < 40) {
      classificacao = `Obesidade Grau II. Seu IMC é <strong>${imc}</strong>`
    }
    else {
      classificacao = `Obesidade Grau III. Seu IMC é <strong>${imc}</strong>`
    }
  }
  else {
    alert("Digite um valor")
  }
  mensagem = "Peso: " + peso + "kg<br/>" + "Altura: " + altura + "m<br/>" + "IMC: " + imc + "<br/>" + "Classificação: " + classificacao

  res.innerHTML += mensagem
}

