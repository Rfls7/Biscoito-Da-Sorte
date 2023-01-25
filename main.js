//Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const sorte = [
    "O aprendizado é como o horizonte: não há limites.",
    "Não há que ser forte, há que ser flexível.",
    "Limitações são fronteiras criadas apenas pela nossa mente.",
    "O cão não ladra por valentia e sim por medo.",
    "Procure acender uma vela em vez de amaldiçoar a escuridão.",
    "A palavra é prata, o silêncio é ouro.",
    "Lembre-se de que grandes realizações e grandes amores envolvem grandes riscos.",
    "Um pouco de perfume sempre fica nas mãos de quem oferece flores.",
    "O homem só envelhece quando os lamentos substituem seus sonhos.",
    "A persistência realiza o impossível.",
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
]

const btnBiscoito = document.querySelector("#btnBiscoito")
const btnReset = document.querySelector("#btnReset")

//Eventos
btnBiscoito.addEventListener('click', handleButtonAnimation)
btnReset.addEventListener('click', handleResetClick)

//Funções
function handleButtonAnimation(event) {
    event.preventDefault() //Não realize o procedimento padrão do HTML 
    toggleScreen()  
    usarSorte()
}

function handleResetClick() {
    toggleScreen()
}

function toggleScreen() {
    screen1.classList.toggle("hide")//Adciona ou remove o termo hide na <div class="screen1">, fazendo com que ele encontre o atributo já feito no CSS e suma a pág 
    screen2.classList.toggle("hide")//Adciona ou remove o termo hide na <div class="screen2">, fazendo com que ele encontre o atributo já feito no CSS e suma a pág
}

function usarSorte() {
    let sortes = sorte.length
    let randomNumber = Math.floor(Math.random() * sortes)  
    screen2.querySelector("p").innerText = `${sorte[randomNumber]}`
}
