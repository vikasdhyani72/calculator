function calculate(operation) {
  let num1 = Number(document.getElementById('num1').value)
  let num2 = Number(document.getElementById('num2').value)
  let result
  if (operation == '+') {
    result = num1 + num2
  } else if (operation == '-') {
    result = num1 - num2
  } else if (operation == '*') {
    result = num1 * num2
  } else if (operation == '/') {
    result = num1 / num2
  }
  document.getElementById('output').innerHTML = 'Result: ' + result
}

document.getElementById('btn1').addEventListener('click', function () {
  calculate('+')
})
document.getElementById('btn2').addEventListener('click', function () {
  calculate('-')
})
document.getElementById('btn3').addEventListener('click', function () {
  calculate('*')
})
document.getElementById('btn4').addEventListener('click', function () {
  calculate('/')
})
