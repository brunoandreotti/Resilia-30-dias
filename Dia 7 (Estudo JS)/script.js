function pularLinha() {
  document.write('<br>')
  document.write('<br>')
}

function mostrarIdade(nome, anoAtual, anoNasc) {
  var idade = anoAtual - anoNasc

  return document.write(`${nome} tem ${idade} anos`),
  pularLinha()
}

// mostrarIdade('Bruno', 2021, 1998)

// mostrarIdade('João', 2021, 1978)


function termometro(nome, tempCorpo) {
  
  if (tempCorpo >= 37.6 && tempCorpo <= 39.5) {
    console.log(`${nome}, você está com febre, procure um médico!`)
  } else if (tempCorpo >= 39.6 && tempCorpo <= 41) {
    console.log(`${nome}, você está com febre alta, procure um médico!`)
  } else if (tempCorpo > 41) {
    console.log(`${nome}, você está com hipertermia, procure um médico!`)
  } else {
    console.log(`${nome}, você não está com febre, fique tranquilo!`)
  }
}

termometro('Bruno', 38)
