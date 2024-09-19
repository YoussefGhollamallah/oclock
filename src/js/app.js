
async function refresh() {
    var t = 1000;
    setTimeout("showHorloge()", t)
}

async function showHorloge() {
    let date = new Date()
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let time = h + ":" + m + ":" + s;
    let divHorloge = document.getElementById("horloge");
    divHorloge.innerHTML = time;
    refresh()
}

showHorloge()