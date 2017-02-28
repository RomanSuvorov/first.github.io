/**
 * Created by Roman on 01.02.2017.
 */
'use strict';

var btnStart = document.getElementsByClassName('btn-start')[0];
var btnSplit = document.getElementsByClassName('btn-split')[0];
var btnReset = document.getElementsByClassName('btn-reset')[0];
var display = document.getElementById('display_number');
var contForSpl = document.getElementsByClassName('splits')[0];
var run = true, timer, sec, min, hour, msec, currentTime = 0, startTime, splitNum = 0, parag;

btnStart.addEventListener('click',startTimer);
btnReset.addEventListener('click',resetTimer);
btnSplit.addEventListener('click', showSplit);

function startTimer() {
    if(run){
        btnStart.innerHTML = 'Stop';
        timer = setInterval(showTime, 70);
        run = false;
        startTime = Date.now();
    }else{
        splitNum++;
        btnStart.innerHTML = 'Start';
        run = true;
        currentTime = currentTime + Date.now() - startTime;
        clearInterval(timer);
        parag = document.createElement('p');
        parag.classList.add('split');
        contForSpl.appendChild(parag);
        parag.innerHTML = splitNum + ' Stop: ' + display.innerHTML;
    }
}

function showTime() {
    display.innerHTML = procTime();
}

function procTime() {
    msec = (Date.now() - startTime + currentTime)%1000;
    sec = ((Date.now() - startTime + currentTime)-((Date.now() - startTime + currentTime)%1000))/1000%60;
    min = ((Date.now() - startTime + currentTime)-((Date.now() - startTime + currentTime)%60000))/60000%60;
    hour = ((Date.now() - startTime + currentTime)-((Date.now() - startTime + currentTime)%360000))/360000;
    return addZero(2, hour) + ':' + addZero(2, min) + ':' + addZero(2, sec) + ':' + addZero(3, msec);
}

function addZero(numOfVal, value) {
    var valToStr = String(value);
    while(valToStr.length < numOfVal){
        valToStr = '0' + valToStr;
    }
    return valToStr;
}

function resetTimer() {
    btnStart.innerHTML = 'Start';
    currentTime = 0;
    run = true;
    clearInterval(timer);
    display.innerHTML = '00:00:00:000';
    while(contForSpl.lastChild){
        contForSpl.removeChild(contForSpl.lastChild);
    }
    splitNum = 0;
}

function showSplit() {
    if(!run) {
        splitNum++;
        parag = document.createElement('p');
        parag.classList.add('split');
        contForSpl.appendChild(parag);
        parag.innerHTML = splitNum + ' Split: ' + display.innerHTML;
    }
}
