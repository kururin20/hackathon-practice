var state =0;
var time = 0;
var timerLabel = document.querySelector('#timerLabel');

function start() {
    state=1;
    timer();
}

function stop() {
    state=0;
}

function reset() {
    state=0;
    time=0;
    timerLabel.innerText = '00:00:00';
}

function timer() {
    if(state==1){
        setTimeout(function() {
            time++;
            var min = Math.floor(time/100/60);
            var sec =Math.floor(time/100);
            sec %= 60;
            var mSec = time%100;
            if(min<10) min = "0" + min;
            if(sec<10) sec = "0" + sec;
            if(mSec<10) mSec = "0" + mSec;
            timerLabel.innerText = min + ":" + sec + ":" + mSec;
            timer();
        }, 10);
    }
}