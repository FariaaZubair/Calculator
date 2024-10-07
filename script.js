function add() {
    var firstValue = +document.getElementById("num1").value;
    var secondValue = +document.getElementById("num2").value;
    var result = firstValue + secondValue;
    document.getElementById("result").value = result;
}
function subtract() {
    var firstValue = +document.getElementById("num1").value;
    var secondValue = +document.getElementById("num2").value;
    var result = firstValue - secondValue;
    document.getElementById("result").value = result;
}
function multiplication() {
    var firstValue = +document.getElementById("num1").value;
    var secondValue = +document.getElementById("num2").value;
    var result = firstValue * secondValue;
    document.getElementById("result").value = result;
}
function division() {
    var firstValue = +document.getElementById("num1").value;
    var secondValue = +document.getElementById("num2").value;
    var result = firstValue / secondValue;
    document.getElementById("result").value = result;
}
function clearFields() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").value = "";
}
