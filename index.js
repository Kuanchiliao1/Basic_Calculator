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
    if (calcInfo.operator) {
      calculate(+calcInfo.currentValue, +display.textContent, calcInfo.operator)
    }
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
  switch (operator) {
    case "+":
      display.textContent = add(a, b)
      break
    case "-":
      display.textContent = subtract(a, b)
      break
    case "/":
      display.textContent = divide(a, b)
      break
    case "*":
      display.textContent = multiply(a, b)
      break
    default:
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
  if (b === 0) {
    alert("stop doing that!")
    return a
  } else {
    return a / b
  }
}