const operator = "+"
const mainContainerEl = document.getElementById("main-container")
const display = document.getElementById("display")

const calcInfo = {
  displayValue: "",
  currentValue: "",
  clearForNextValue: false,
  operator: ""
}

mainContainerEl.addEventListener("click", (event) => {
  const elementText = event.target.textContent
  event.preventDefault()

  if (display.textContent === "0") {
    display.textContent = ""
  }
  
  if (["*", "-", "/", "+"].includes(elementText)) {
    calcInfo.currentValue = display.textContent
    calcInfo.operator = elementText
    calcInfo.clearForNextValue = false
  } else if (elementText === "=") {
    calculate(+calcInfo.currentValue, +display.textContent, calcInfo.operator)
    
  } else if (elementText === "AC") {
    display.textContent = "0"
    resetCalculator()
  } else {
    if (calcInfo.operator && !calcInfo.clearForNextValue) {
        display.textContent = elementText
        calcInfo.clearForNextValue = true
    } else {
      display.textContent += elementText
    }
  }
})

function calculate(a, b, operator) {
  if (operator === "+") {
    display.textContent = add(a, b)
  } else if (calcInfo.operator === "-") {
    display.textContent = subtract(a, b)
  } else if (calcInfo.operator === "/") {
    display.textContent = divide(a, b)
  } else if (calcInfo.operator === "*") {
    display.textContent = multiply(a, b)
  }
}

function resetCalculator() {
  calcInfo.displayValue = ""
  calcInfo.currentValue = ""
  calcInfo.nextValue = ""
  calcInfo.operator = ""
}

function add(a, b) {
  return a + b
}

function multiply(a, b) {
  return a * b
}

function subtract(a, b) {
  return a - b
}

function divide(a, b) {
  return a / b
}