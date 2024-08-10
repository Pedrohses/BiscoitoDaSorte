const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const btnCookie = document.querySelector('#cookie');
const btnAgain = document.querySelector('#again');
let randomNumber = Math.round(Math.random()*10);
const frases = [
    'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
    'A felicidade é uma jornada, não um destino.',
    'Grandes aventuras aguardam aqueles que se atrevem a sonhar.',
    'Uma oportunidade inesperada surgirá em breve.',
    'A sorte favorece os corajosos.',
    'Pequenos gestos trazem grandes recompensas.',
    'O sucesso está ao seu alcance, basta acreditar.',
    'O que você busca está mais próximo do que imagina.',
    'Uma surpresa agradável está reservada para você hoje.',
    'Você é mais forte do que pensa e mais amado do que sabe.'
];

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

// Funções Callback (Função sendo passada como argumento de outra função)
btnCookie.addEventListener('click', toggleScreen)
btnAgain.addEventListener('click', toggleScreen)

// Manipulação da DOM (Alterando elementos HTML com JS)
btnCookie.addEventListener('click', () => {
    do {
        if (randomNumber != 10) {
            document
                .querySelector('.screen2 p')
                .textContent = frases[randomNumber];
            randomNumber = Math.round(Math.random()*10);
            return;
        }
    } while (randomNumber == 10)
})
