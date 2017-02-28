/**
 * Created by Roman on 30.10.2016.
 */
var timer, startTime, split;
var ms = 0, sec = 0, min = 0, hour = 0, currentTime = 0, splitNum = 0;
var timerRunningStatus = true;
var buttonStart = document.querySelector('.btn-start');
var buttonSplit = document.querySelector('.btn-split');
var buttonReset = document.querySelector('.btn-reset');
var display = document.querySelector('.display_number');
var splits = document.querySelector('.splits');



buttonStart.addEventListener('click', timerRun);
buttonSplit.addEventListener('click', addSplit);
buttonReset.addEventListener('click', resetTimer);


    function timerRun() {
        if (timerRunningStatus) {
            buttonStart.innerHTML = 'Stop';
            timer = setInterval(showTime, 54);
            timerRunningStatus = false;
            startTime = Date.now();
        } else {
            clearInterval(timer);
            timerRunningStatus = true;
            buttonStart.innerHTML = 'Start';
            currentTime = currentTime + (Date.now() - startTime);
        }
    }

    function showTime() {
        display.innerHTML = calculation();
    }

    function calculation() {
        var statement = ((Date.now() - startTime) + currentTime);
        ms = statement % 1000;
        sec = ((statement - (statement % 1000)) / 1000) % 60;
        min = ((statement - (statement % 60000)) / 60000) % 60;
        hour = (statement - (statement % 360000)) / 360000;
        return(addSero(2, hour) + ":" + addSero(2, min) + ":" + addSero(2, sec) + ":" + addSero(3, ms));
    }

    function addSero(numLength, stringNum) {
        var value = String(stringNum);
        while ( value.length < numLength) {
            value = "0" + value;
        }
        return value;
    }

    function addSplit() {
        split = document.createElement('p');
        split.classList.add('split');
        if(!timerRunningStatus) {
            splitNum++;
            if( splitNum == 4){
                split.innerHTML = 'Split ' + splitNum + ' : ' + display.innerHTML + ' You can scroll this page down';
            } else {
                split.innerHTML = 'Split ' + splitNum + ' : ' + display.innerHTML;
            }
        }
        splits.appendChild(split);
    }


    function resetTimer() {
        clearInterval(timer);
        display.innerHTML = '00:00:00:000';
        timerRunningStatus = true;
        currentTime = 0;
        splitNum = 0;
        buttonStart.innerHTML = 'Start';
        while (splits.lastChild) {
            splits.removeChild(splits.lastChild);
        }
    }
