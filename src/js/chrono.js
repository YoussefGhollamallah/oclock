
let s = 0;
let m = 0;
let h = 0;
let mn = 0;

let chrono = document.getElementById("chronometre");

function refresh() {
    const t = 500;
    setTimeout(showChrono, t);
}

function showChrono() {
    s++;

    if (s == 60) {
        m++;
        s = 0;
    }

    if (m == 60) {
        h++;
        m = 0;
    }

    var formattedH = h.toString().padStart(2, '0');
    var formattedM = m.toString().padStart(2, '0');
    var formattedS = s.toString().padStart(2, '0');

    var time = formattedH + ":" + formattedM + ":" + formattedS;
    chrono.innerHTML = time;

    refresh()


}



let startBtn = document.querySelector('#start')


startBtn.addEventListener("click", showChrono)
