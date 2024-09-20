var started = false;
var myTimer;
var timer = 0;
var minutes = 0;
var hours = 0;
var tourCount = 0;

let startBtn = document.querySelector('#start');
let resetBtn = document.querySelector('#reset');
let tourBtn = document.querySelector('#tour');
let toursList = document.querySelector('#tours');

function refresh() {
    if (!started) {
        myTimer = setInterval(startChrono, 1000);
        started = true;
        startBtn.innerText = 'Stop';
    } else {
        started = false;
        clearInterval(myTimer);
        startBtn.innerText = 'Start';
    }
}

function startChrono() {
    if (started) {
        ++timer;
        if (timer == 60) {
            minutes++;
            timer = 0;
        }
        if (minutes == 60) {
            hours++;
            minutes = 0;
        }
        
        let chrono = document.getElementById("chronometre");
        var formatH = hours.toString().padStart(2, '0');
        var formatM = minutes.toString().padStart(2, '0');
        var formatT = timer.toString().padStart(2, '0');
        
        chrono.textContent = formatH + ':' + formatM + ':' + formatT;
    }
}

function resetChrono() {
    clearInterval(myTimer);
    timer = 0;
    minutes = 0;
    hours = 0;
    started = false;
    
    let chrono = document.getElementById("chronometre");
    chrono.textContent = '00:00:00';
    startBtn.innerText = 'Start';

    toursList.innerHTML = "";
    tourCount = 0;
}

function tourChrono() {
    if (started) {
        let chrono = document.getElementById("chronometre").textContent;
        tourCount++;
        
        let newTour = document.createElement('li');
        newTour.textContent = "Tour " + tourCount + ": " + chrono;
        
        toursList.appendChild(newTour);
    }
}

resetBtn.addEventListener('click', resetChrono);

startBtn.addEventListener('click', refresh);

tourBtn.addEventListener('click', tourChrono);
