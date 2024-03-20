
let hrs=document.getElementById("hrs");
let min=document.getElementById("min");
let sec=document.getElementById("sec");
let date=document.getElementById("date");

function updateTime() {
    let currentTime = new Date();
    hrs.innerHTML = currentTime.getHours();
    min.innerHTML = currentTime.getMinutes();
    sec.innerHTML = currentTime.getSeconds();
    date.innerHTML = currentTime.toDateString();
    setTimeout(updateTime, 1000);
}

updateTime();

