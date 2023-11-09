const minutesEl = document.querySelector("#minutes") // 1. crio as variaveis e chamo pelo o id
const secondsEl = document.querySelector("#seconds")
const millisecondsEl = document.querySelector("#milliseconds")
const startBtn = document.querySelector("#startBtn")
const pauseBtn = document.querySelector("#pauseBtn")
const resumeBtn = document.querySelector("#resumeBtn")
const resetBtn = document.querySelector("#resetBtn")

let interval; // 2. crio uma variavel global para pode modifica-la no meu código
let minutes = 0; // 2. crio variaveis zeradas para poder modifica-la
let seconds = 0;
let milliseconds = 0;
let isPaused = false; // 2. iniciamente começa como falsa

startBtn.addEventListener("click", startTimer) // 3. crio o evento chamando a função
pauseBtn.addEventListener("click", pauseTimer)  // 6. crio o evento chmando a função
resumeBtn.addEventListener("click", resumeTimer) // 7. crio o evento chamando a função
resetBtn.addEventListener("click", resetTimer) // 8. crio o evento chamando a função

function startTimer() {

    interval = setInterval(() => { // 3. mudo o meu interval pra setInterval, pq esse setinterval que determinar a mudança do tempo

        if (!isPaused) { // 3. verificar se não esta pausado 

            milliseconds += 10

            if (milliseconds === 1000) { // 3. verifico se o milisegundo é igual a 1000, se for eu incremento 1 segundo
                seconds++; // <=
                milliseconds = 0; // 3. se for eu zero o milisegundo
            }

            if (seconds === 60) { // 3. verifico se os segundos forem igual a 60, os minutos ganham mais um minuto e o segundo volta pra zero 
                minutes++;
                seconds = 0;
            }

            minutesEl.textContent = formatTime(minutes); // 3. aqui estou trocando os valores do meus números. Recebo a função de formatação do tempo
            secondsEl.textContent = formatTime(seconds); // 3. aqui estou trocando os valores do meus números. Recebo a função de formatação do tempo
            millisecondsEl.textContent = formatMilliseconds(milliseconds); // 3. aqui estou trocando os valores do meus números. Recebo a função de formatação do tempo em millisegundos
        }

    }, 10); // 3. executar a cada 10 milisegundos

    startBtn.style.display = "none"; // 5. Aqui eu estou fazendo o botão de iniciar desaparecer quando o cronometro começa a contar
    pauseBtn.style.display = "block"; // 5. Aqui eu estou fazendo o botão de pause aparecer quando o cronometro começa a contar
}

function pauseTimer() { // 6. Aqui crio a função para quando o botão pause é clicado, o cronometro pare de contar.

    isPaused = true; // 6. Quando eu coloco true, automaticamente o setinterval e o if não roda mais
    pauseBtn.style.display = "none"; // 6. Aqui eu oculto o botão de pausar
    resumeBtn.style.display = "block";  // 6. Aqui eu mostro o botão de resumir
}

function resumeTimer() {  // 7. Aqui eu crio a função pra quando o botão de resumir é clicado, a contagem do cronometro continue
    isPaused = false; // 7. coloca a variavel como falsa pra rodar o setinterval e o if
    pauseBtn.style.display = "block"; // 7. Aqui eu mostro o botão de pausar
    resumeBtn.style.display = "none"; // 7. Aqui eu oculto o botão de resumir
}

function resetTimer() { // 8. Aqui eu crio a função pra quando o botão de resetar é clicado, a contagem do cronometro zere
    clearInterval(interval) // 8. Aqui estou limpando o intervalo, fazendo ele parar de existir, pq eu não quero que conte os números
    minutes = 0; // 8. eu zero os minutos
    seconds = 0; // 8. eu zero os segundos
    milliseconds = 0; // 8. eu zero os millisegundos

    minutesEl.textContent = "00" // 8. estou mudando o texto do  meu elemento
    secondsEl.textContent = "00" // 8. estou mudando o texto do  meu elemento
    millisecondsEl.textContent = "000" // 8. estou mudando o texto do  meu elemento

    startBtn.style.display = "block"; // 8. Aqui eu mostro o botão de iniciar
    pauseBtn.style.display = "none"; // 8.Aqui eu oculto o botão de pausar
    resumeBtn.style.display = "none"; // 8. Aqui eu oculto o botão de resumir

}

function formatTime(time) { // 4. função criada para formatar o tempo.

    return time < 10 ? `0${time}` : time; // 4. A Função vai receber um tempo, eu vou retornar um tempo for menor que 10, eu vou retornar com 0 na frente. Coloca essa função nos meus elementos.
}

function formatMilliseconds(time) { // 4. Função criada para formatar os millisegundos

    return time < 100 ? `${time}`.padStart(3, "0") : time; // 4. A Função vai receber um tempo, eu vou retornar um tempo for menor que 100, eu vou retornar os 0(zeros) que faltam para o millisegundos. Preciso converter para uma string, só coloca entre template strings `${time}` a variavel time. Coloca essa função nos meus elementos.
}



