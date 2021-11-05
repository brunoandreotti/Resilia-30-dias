var submitButton = document.querySelector('div#app form#form button#consultar')
var zipCodeField = document.querySelector('div#app form#form input#digitarCEP')
var content = document.querySelector('div#app main')

submitButton.addEventListener('click', run)

function run (event) {
    
    event.preventDefault() // irá desabilitar o comportamento padrão de recarregar a página ao clicar em um botão dentro de um form

    // console.log(zipCodeField.value) // irá imprimir no console o valor digitado no campo de cep

    // A API somente entende CEPS que forem digitado como '14302006' ou '14302-006', como o usuário digite com um ponto ou um espaço no lugar do traço, a API não reconhecera.

    var zipCode = zipCodeField.value
    zipCode = zipCode.replace(' ', '')// dessa forma o valor de zipCodeField(CEP) que for digitado com um espaço, será substituído por nada/valor vazio
    zipCode = zipCode.replace('.', '')// dessa forma o valor de zipCodeField(CEP) que for digitado com um ponto, será substituído por nada/valor vazio

    // o .replace não tira caracteres de fora da string, então se o espaço ou o ponto fosse digitado antes ou depois do cep, também iria dar erro ao consultar a API, para resolver isso, utilizei .trim que remove espaçamentos antes e depois da string

    zipCode = zipCode.trim()

    axios
    .get('https://viacep.com.br/ws/'+zipCode+'/json/')
    .then(function (response) {
        content.innerHTML = ''
        dataCEP = response.data
        var line = document.createElement('p')
        var text = document.createTextNode('Sua rua é ' + dataCEP.logradouro + ', seu bairro é ' + dataCEP.bairro + ' e sua cidade é ' + dataCEP.localidade + '-' + dataCEP.uf)

        line.appendChild(text)
        content.appendChild(line)
  

        if (dataCEP.erro == true) {
            throw new Error ('CEP inválido!') // isso avisará que deu um erro e mandara para o .catch    
        }

    })
    .catch(function (error) {
        content.innerHTML = ''
        var line = document.createElement('p')
        var text = document.createTextNode('CEP inválido!')
        line.appendChild(text)
        content.appendChild(line) 
    })

      
}


