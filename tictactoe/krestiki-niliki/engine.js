var cont = document.getElementsByClassName('container')[0];
var table = document.getElementsByClassName('table')[0];
var isFirst = true;

var tableArr = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
first.onclick = function(){
    if(isFirst) {
        first.classList.add('xxxx');
        setStep(0,1);
    }
    else {
        first.classList.add('zero');
        setStep(0,0);
    }
    console.log(tableArr)
};

second.onclick = function(){
    //alert('123');
    if(isFirst) {
        second.classList.add('xxxx');
        setStep(1,1);
    }
    else {
        second.classList.add('zero');
        setStep(1,0);
    }
};

third.onclick = function(){
    //alert('123');
    if(isFirst) {
        third.classList.add('xxxx');
        setStep(2,1);
    }
    else {
        third.classList.add('zero');
        setStep(2,0);
    }
};

four.onclick = function(){
    //alert('123');
    if(isFirst) {
        four.classList.add('xxxx');
        setStep(3,1);
    }
    else {
        four.classList.add('zero');
        setStep(3,0);
    }
};

five.onclick = function(){
    //alert('123');
    if(isFirst) {
        five.classList.add('xxxx');
        setStep(4,1);
    }
    else {
        five.classList.add('zero');
        setStep(4,0);
    }
};

six.onclick = function(){
    //alert('123');
    if(isFirst) {
        six.classList.add('xxxx');
        setStep(5,1);
    }
    else {
        six.classList.add('zero');
        setStep(5,0);
    }
};

seven.onclick = function(){
    //alert('123');
    if(isFirst) {
        seven.classList.add('xxxx');
        setStep(6,1);
    }
    else {
        seven.classList.add('zero');
        setStep(6,0);
    }
};

eight.onclick = function(){
    //alert('123');
    if(isFirst) {
        eight.classList.add('xxxx');
        setStep(7,1);
    }
    else {
        eight.classList.add('zero');
        setStep(7,0);
    }
};

nine.onclick = function(){
    //alert('123');
    if(isFirst) {
        nine.classList.add('xxxx');
        setStep(8,1);
    }
    else {
        nine.classList.add('zero');
        setStep(8,0);
    }
};

function checkWin() {
    //Player First

      // Firs Horzintal
    if(tableArr[0] == 0 && tableArr[1] == 0 && tableArr[2] == 0) {
        return true;
    } // Left Vertical
    if(tableArr[0] == 0 && tableArr[3] == 0 && tableArr[6] == 0) {
        return true;
    } // Left Diag
    if(tableArr[0] == 0 && tableArr[4] == 0 && tableArr[8] == 0) {
        return true;
    } // Right Vertical
    if(tableArr[2] == 0 && tableArr[5] == 0 && tableArr[8] == 0) {
        return true;
    } // Diag Right
    if(tableArr[2] == 0 && tableArr[4] == 0 && tableArr[6] == 0) {
        return true;
    } // Center Horizontal
    if(tableArr[3] == 0 && tableArr[4] == 0 && tableArr[5] == 0) {
        return true;
    } // Bottom Horizontal
    if(tableArr[6] == 0 && tableArr[7] == 0 && tableArr[8] == 0) {
        return true;
    }
    if(tableArr[1] == 0 && tableArr[4] == 0 && tableArr[7] == 0) {
        return true;
    }
    // Player Second
    if(tableArr[0] == 1 && tableArr[1] == 1 && tableArr[2] == 1) {
        return false;
    }
    if(tableArr[0] == 1 && tableArr[3] == 1 && tableArr[6] == 1) {
        return false;
    }
    if(tableArr[0] == 1 && tableArr[4] == 1 && tableArr[8] == 1) {
        return false;
    }
    if(tableArr[2] == 1 && tableArr[5] == 1 && tableArr[8] == 1) {
        return false;
    }
    if(tableArr[2] == 1 && tableArr[4] == 1 && tableArr[6] == 1) {
        return false;
    }
    if(tableArr[3] == 1 && tableArr[4] == 1 && tableArr[5] == 1) {
        return false;
    } 
    if(tableArr[6] == 1 && tableArr[7] == 1 && tableArr[8] == 1) {
        return false;
    }
    if(tableArr[1] == 1 && tableArr[4] == 1 && tableArr[7] == 1) {
        return false;
    }
}

function setStep(arrPos,player) {
    tableArr[arrPos] = player;
    isFirst = !isFirst;
    if(checkWin()) {
        msg('нолики');
        setTimeout(function(){
            cont.removeChild(document.getElementsByClassName('msg')[0]);  
            clear(); 
        }, 3000);

    } else if(checkWin() == false) {
        msg('крестики');
        setTimeout(function(){
            cont.removeChild(document.getElementsByClassName('msg')[0]);
            clear();
        }, 3000);
    }
}

function msg(player) {
    var msg = document.createElement('div');
        msg.className = 'msg msg-alert'
        msg.innerHTML = `<strong>Ура!</strong> Победили ${player}`;
    cont.append(msg);
}

function clear() {
  for(var i = 0; i < table.childNodes.length; i++) {
    table.childNodes[i].className = 'block';
  }
  tableArr = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
}
