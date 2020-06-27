let check = false;
let data = document.getElementById("data");
let content = document.getElementById("content");

// this function is used to add history in table
function logtable(exp, res) {
    content.innerHTML += "<tr> <td>" + exp + "</td> <td>" + res + "</td> </tr>";
}

// function to enter value into filed when user press buttun
function num(num) {
    if (check == true) {
        data.value = "";
    }
    check = false;
    if (num === "c") {
        data.value = "";
    }
    else if (num === "<") {
        let n = data.value.slice(0, data.value.length - 1);
        data.value = n;
    }
    else {
        data.value += num;
    }
}

// Function that calculate result of the calculation
function res() {
    if (data.value != "") {
        let result = eval(data.value);
        logtable(data.value, result);
        data.value = result;
        check = true;
    }
    else {
        alert("Enter some value first to perform calculation.")
    }
}



// This code is written to enable the user to dirctly type using keyboard like in windows calulator
document.onkeydown = function (e) {
    if (check == true) {
        data.value = "";
    }
    check = false;
    if (e.key == 1) {
        data.value += 1;
    } else if (e.key == 2) {
        data.value += 2;
    } else if (e.key == 3) {
        data.value += 3;
    } else if (e.key == 4) {
        data.value += 4;
    } else if (e.key == 5) {
        data.value += 5;
    } else if (e.key == 6) {
        data.value += 6;
    } else if (e.key == 7) {
        data.value += 7;
    } else if (e.key == 8) {
        data.value += 8;
    } else if (e.key == 9) {
        data.value += 9;
    } else if (e.key == 0) {
        data.value += 0;
    } else if (e.key == '+') {
        data.value += '+';
    } else if (e.key == '-') {
        data.value += '-';
    } else if (e.key == '*') {
        data.value += '*';
    } else if (e.key == '/') {
        data.value += '/';
    } else if (e.key == 'Backspace') {
        let n = data.value.slice(0, data.value.length - 1);
        data.value = n;
    } else if (e.key == 'Enter') {
        if (data.value != "") {
            let result = eval(data.value);
            logtable(data.value, result);
            data.value = result;
            check = true;
        }
        else {
            alert("Enter some value first to perform calculation.")
        }
    }
}

// Function to clear the history
function clearHistory() {
    content.innerHTML = " ";
    content.innerHTML = "<tr><th>Expression</th><th>Result</th></tr>"
}

// Show History
function showHistory(){
    move.classList.toggle('showHistory');
}