const TIMER_ID = document.getElementById('countdown');

class Timer {
    constructor(toDate) {
        this.toDate = toDate;
    }
    start() {
        var dateMs = new Date(this.toDate).getTime();
        var dateNow = Date.now();
        var counter = new Date(dateMs - dateNow);
        console.log(this.convert(counter));
        TIMER_ID.innerHTML = `<div class="cdays">${this.convert(counter).days} <span class="days">Дней</span></div>
        <div class="chours">${this.convert(counter).hours} <span class="days">Часов</span></div>
        <div class="cmin">${this.convert(counter).minutes} <span class="days">Минут</span></div>
        <div class="cmin">${this.convert(counter).sec} <span class="days">Секунд</span></div>`;
        setTimeout(this.start.bind(this),1000);
    }
    
    convert(milliSeconds) {
        let days = Math.floor(milliSeconds/(86400 * 1000));
        milliSeconds -= days*(86400*1000);
        let hours = Math.floor(milliSeconds/(60 * 60 * 1000 ));
        milliSeconds -= hours * (60 * 60 * 1000);
        let minutes = Math.floor(milliSeconds/(60 * 1000));
        milliSeconds -= minutes * 60 * 1000;
        let sec = Math.floor(milliSeconds/1000);

        return {
             days,hours,minutes,sec
        } 
    }

}

