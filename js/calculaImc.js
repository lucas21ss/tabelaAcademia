//mudando o titulo de forma mais dinamica
//declarando variaveis utilizando o let
let titulo = document.querySelector('.titulo')
titulo.textContent = 'Aparecida Nutricionista'
//---------------------------------------------------
//selecionando todos os pacientes
let pacientes = document.querySelectorAll('.paciente')

for (let i = 0; i <= pacientes.length; i++){
 let paciente = pacientes[i]
//recebendo o peso do paciente
 let pesoTd = paciente.querySelector('.info-peso')
let peso = pesoTd.textContent
 //recebendo a altura do paciente
let alturaTd = paciente.querySelector('.info-altura')
let altura = alturaTd.textContent

let imcTd = paciente.querySelector('.info-imc')
//toFixed para ajustar as casas decimais
let imc = calculaImc(peso, altura)
imcTd.textContent = imc

}

function calculaImc (peso, altura){
    let imc = 0
    //calculando o imc do paciente
 imc = peso / (altura * altura)
 return imc.toFixed(2)
}


