let started = false;
let time = 5 * 60;
let timerInterval;

let timeInput = document.querySelector('#timeInput');
let display = document.querySelector('#display');
let startStopBtn = document.querySelector('#startStop');
let resetBtn = document.querySelector('#reset');
let increaseBtn = document.querySelector('#increase');
let decreaseBtn = document.querySelector('#decrease');


function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    return minutes.toString().padStart(2, '0') + ':' + remainingSeconds.toString().padStart(2, '0');
}



function updateDisplay() {
    display.textContent = formatTime(time);
}


function startStopTimer() {
    if (!started) {
        timerInterval = setInterval(() => {
            time--;
            updateDisplay();
            if (time <= 0) {
                clearInterval(timerInterval);
                alert('Temps écoulé !');
            }
        }, 1000);
        startStopBtn.textContent = 'Stop';
        started = true;
    } else {
        clearInterval(timerInterval);
        startStopBtn.textContent = 'Start';
        started = false;
    }
}


function resetTimer() {
    clearInterval(timerInterval);
    time = parseInt(timeInput.value) * 60;
    updateDisplay();
    startStopBtn.textContent = 'Start';
    started = false;
}


function increaseTime() {
    let currentTime = parseInt(timeInput.value);
    timeInput.value = currentTime + 1;
    time = parseInt(timeInput.value) * 60;
    updateDisplay();
}


function decreaseTime() {
    let currentTime = parseInt(timeInput.value);
    if (currentTime > 0) {
        timeInput.value = currentTime - 1;
        time = parseInt(timeInput.value) * 60;
        updateDisplay();
    }
}


function updateTimeFromInput() {
    time = parseInt(timeInput.value) * 60;
    updateDisplay();
}


startStopBtn.addEventListener('click', startStopTimer);
resetBtn.addEventListener('click', resetTimer);
increaseBtn.addEventListener('click', increaseTime);
decreaseBtn.addEventListener('click', decreaseTime);
timeInput.addEventListener('change', updateTimeFromInput);


updateDisplay();
