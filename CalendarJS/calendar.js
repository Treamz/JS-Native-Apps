let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

let monthAndYear = document.getElementById('monthAndYear');

showCalendar(currentMonth, currentYear);
function showCalendar(month, year) {
    let firstDay = new Date(year, month).getDate();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    let tbl = document.getElementById('calendar-body');

    tbl.innerHTML = "";

    monthAndYear.innerHTML = `${months[month]} ${year}`;

    let date = 1;

    for (let i = 0; i < 6; i++) {
        let row = document.createElement('tr');
        for(let j = 0; j < 7; j++) {
            if(i === 0 && j < firstDay) {
                let cell = document.createElement('td');
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if(date > daysInMonth) {
                break;
            }
            else {
                let cell = document.createElement('td');
                let cellText = document.createTextNode(date);
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            date++;
        }
        tbl.appendChild(row);
    }
}

function prev() {
    currentYear = (currentMonth === 0) ? currentYear - 1: currentYear;
    currentMonth =  currentMonth === 0? 11: currentMonth -1;
    showCalendar(currentMonth, currentYear);
}

function next() {
    currentYear = currentYear === 1? currentYear + 1: currentYear
    currentMonth =(currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}