const minutesEl = document.querySelector("#minutes") // crio as variaveis e chamo pelo o id
const secondsEl = document.querySelector("#seconds")
const millisecondsEl = document.querySelector("#milliseconds")
const startBtn = document.querySelector("#startBtn")
const pauseBtn = document.querySelector("#pauseBtn")
const resumeBtn = document.querySelector("#resumeBtn")
const resetBtn = document.querySelector("#resetBtn")

let interval; // crio uma variavel global para pode modifica-la no meu código
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false; // iniciamente começa como falsa

startBtn.addEventListener("click", startTimer) // crio o evento chamando a função

function startTimer() {

    interval = setInterval(() => { // mudo o meu interval pra setInterval, pq esse setinterval que determinar a mudança do tempo

        if (!isPaused) { // verificar se não esta pausado 

            milliseconds += 10

            if (milliseconds === 1000) { // verifico se o milisegundo é igual a 1000, se for eu incremento 1 segundo
                seconds++; // <=
                milliseconds = 0; // se for eu zero o milisegundo
            }

            if (seconds === 60) { // verifico se os segundos forem igual a 60, os minutos ganham mais um minuto e o segundo volta pra zero 
                minutes++;
                seconds = 0;
            }

            minutesEl.textContent = minutes // aqui estou trocando os valores do meus números 
            secondsEl.textContent = seconds // aqui estou trocando os valores do meus números 
            millisecondsEl.textContent = milliseconds // aqui estou trocando os valores do meus números 
        }

    }, 10) // executar a cada 10 milisegundos
}



