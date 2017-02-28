/**
 * Created by Roman on 31.01.2017.
 */
"use strict"

var btnStart = document.getElementsByClassName("button_start")[0];
var btnClear = document.getElementsByClassName("button_clear")[0];
var highDisplay = document.getElementsByClassName("high_Display")[0];
var smallDisplay = document.getElementsByClassName("small_Dislpay")[0];

var startTime, time, run = true, currentTime = 0;


btnStart.addEventListener('click', startTimer);
btnClear.addEventListener('click', clearTimer);


function startTimer() {
    if(run){
        btnStart.classList.add("button_pause");
        btnStart.innerHTML = "Pause";
        run = false;
        startTime = Date.now();//запоминаем время нажатия кнопки старт
        // console.log(startTime);
        time = setInterval(showTime, 100)
    } else {
        btnStart.classList.remove("button_pause");
        run = true;
        btnStart.innerHTML = "Continue";
        clearInterval(time);
        currentTime = (Date.now() - startTime) + currentTime;
    }
}

function showTime() {
    highDisplay.innerHTML = showHours();
    smallDisplay.innerHTML = showMiliSec();
}


function showMiliSec() {
    var msec = (Date.now() - startTime + currentTime)%1000;
    return addZero(3,msec);
}

function showHours() {
    var sec = ((Date.now() - startTime + currentTime) - ((Date.now() - startTime + currentTime)%1000))/1000%60;
    var min = ((Date.now() - startTime + currentTime) - ((Date.now() - startTime + currentTime)%60000))/60000%60;
    var hour = ((Date.now() - startTime + currentTime) - ((Date.now() - startTime + currentTime)%360000))/360000;
    return addZero(2,hour) + ":" + addZero(2,min) + ":" + addZero(2,sec);
}

function addZero(numOfDigits, value) {
    var valStr = String(value);
    while(valStr.length < numOfDigits) {
        valStr = "0" + valStr;
    }
    return valStr;
}

function clearTimer() {
    clearInterval(time);
    highDisplay.innerHTML = '00:00:00';
    smallDisplay.innerHTML = '000';
    btnStart.classList.remove("button_pause");
    btnStart.innerHTML = 'Start';
    currentTime = 0;
    run = true;
}
