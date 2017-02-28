/**
 * Created by Roman on 11.10.2016.
 */
"use strict"
var buttonStart = document.querySelector('.button_start');
var buttonClear = document.querySelector('.button_clear');
var highDisplay = document.querySelector('.high_Display');
var smallDislpay = document.querySelector('.small_Dislpay');
var timerRunningStatus = true;
var timer, startTime;
var ms = 0, sec = 0, min = 0, hour = 0, currentTime = 0;



buttonStart.addEventListener('click', startTimer);
buttonClear.addEventListener('click', clearTimer);

function startTimer() {
    if (timerRunningStatus) {
        buttonStart.classList.add("button_pause");
        buttonStart.innerHTML = 'Pause';
        timer = setInterval(showTime, 10);
        timerRunningStatus = false;
        startTime = Date.now();

    } else {
        buttonStart.classList.remove("button_pause");
        buttonStart.innerHTML = "Continue";
        timerRunningStatus = true;
        clearInterval(timer);
        currentTime = currentTime + Date.now() - startTime;
    }
}

    function showTime() {
        highDisplay.innerHTML = secMinHour();
        smallDislpay.innerHTML = mSec();
    }

    function mSec() {
        ms = (( Date.now() - startTime ) + currentTime) % 1000;
        return addZero(3, ms);
    }

    function secMinHour() {
        var statement = (( Date.now() - startTime ) + currentTime)
        sec = ((statement - (statement % 1000)) / 1000) % 60;
        min = ((statement - (statement % 60000)) / 60000) % 60;
        hour = (statement - (statement % 3600000)) / 3600000;

        return (addZero(2, hour) + ':' + addZero(2, min) + ':' + addZero(2, sec));
    }

    function addZero(lengthNum, number) {
        var value = String(number);
        while (value.length < lengthNum )
            value = "0" + value;
        return value;
    }

    function clearTimer() {
        clearInterval(timer);
        highDisplay.innerHTML = "00:00:00";
        smallDislpay.innerHTML = "000";
        buttonStart.innerHTML = "Start";
        ms = sec = hour = min = currentTime = 0;
        timerRunningStatus = true;
    }
