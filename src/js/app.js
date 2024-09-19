var upcomingAlarms = [];
var pastAlarms = [];

async function refresh() {
    var t = 1000;
    setTimeout(showHorloge, t);
}

async function showHorloge() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    if (h < 10) { h = '0' + h; }
    if (m < 10) { m = '0' + m; }
    if (s < 10) { s = '0' + s; }

    let time = h + ":" + m + ":" + s;
    let divHorloge = document.getElementById("horloge");
    divHorloge.innerHTML = time;

    checkAlarms(h, m);
    refresh();
}

function setAlarm() {
    let alarmInput = document.getElementById("alarmTime").value;
    if (alarmInput) {
        upcomingAlarms.push(alarmInput);
        updateAlarmLists();
        document.getElementById("alarmTime").value = '';
    }
}

function checkAlarms(h, m) {
    let currentTime = h + ":" + m;
    
    for (let i = 0; i < upcomingAlarms.length; i++) {
        if (upcomingAlarms[i] === currentTime) {
            alert("Alarme déclenchée !");
            pastAlarms.push(upcomingAlarms[i]);
            upcomingAlarms.splice(i, 1); // Supprime l'alarme déclenchée
            updateAlarmLists();
            break;
        }
    }
}

function updateAlarmLists() {
    let upcomingList = document.getElementById("upcomingAlarms");
    let pastList = document.getElementById("pastAlarms");

    // Mets à jour les alarmes à venir
    upcomingList.innerHTML = '';
    for (let alarm of upcomingAlarms) {
        let li = document.createElement("li");
        li.textContent = alarm;
        upcomingList.appendChild(li);
    }

    // Mets à jour les alarmes passées
    pastList.innerHTML = '';
    for (let alarm of pastAlarms) {
        let li = document.createElement("li");
        li.textContent = alarm;
        pastList.appendChild(li);
    }
}

showHorloge();
