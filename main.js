//Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const btnBiscoito = document.querySelector("#btnBiscoito")
const btnReset = document.querySelector("#btnReset")

//Eventos
btnBiscoito.addEventListener('click', handleButtonAnimation)
btnReset.addEventListener('click', handleResetClick)

//Funções
function handleButtonAnimation(event) {
    event.preventDefault() //Não realize o procedimento padrão do HTML 
    toggleScreen()  
}

function handleResetClick() {
    toggleScreen()
}

function toggleScreen() {
    screen1.classList.toggle("hide")//Adciona ou remove o termo hide na <div class="screen1">, fazendo com que ele encontre o atributo já feito no CSS e suma a pág 
    screen2.classList.toggle("hide")//Adciona ou remove o termo hide na <div class="screen2">, fazendo com que ele encontre o atributo já feito no CSS e suma a pág
}