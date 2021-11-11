var answer = "";
var equation = "";
var clear = 0;
var outputtext = document.getElementById("output");
var powers = ""
function enterNumber(numberCharacter) {
  console.log(numberCharacter);
  outputtext.innerHTML += numberCharacter;

  equation += numberCharacter;
}
function setOperator(operatorCharcter) {
  outputtext.innerHTML += operatorCharcter;
  equation += operatorCharcter;
}
var num1;
var num2;
function setAnswer() {
  var answer = eval(equation);
  equation = `${answer}`;
  outputtext.innerHTML = answer;
  console.log(`setAnswer` + answer);
  return answer;
}

function clearAll() {
  console.log(`clearAll`);
  outputtext.innerHTML = "";
  answer = "";
  equation = "";
}
function removecharacter() {
  equation = equation.substr(0, equation.length - 1);
  outputtext.innerHTML = equation;
  console.log(equation);
}
