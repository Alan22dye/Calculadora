function appendToScreen(value) {
    document.getElementById('screen').value += value;
}

function clearScreen() {
    document.getElementById('screen').value = '';
}

function calculate() {
    var result = eval(document.getElementById('screen').value);
    document.getElementById('screen').value = result;
}
