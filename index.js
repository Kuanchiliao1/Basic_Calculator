const operator = "+"
const mainContainerEl = document.getElementById("main-container")
const display = document.getElementById("display")

const calcInfo = {
  displayValue: "",
  currentValue: "",
  nextValue: "",
  operator: ""
}

mainContainerEl.addEventListener("click", (event) => {
  const elementText = event.target.textContent
  event.preventDefault()
  
  if (["*", "-", "/", "+"].includes(elementText)) {
    calcInfo.currentValue = display.textContent
    calcInfo.operator = elementText
  } else if (elementText === "=") {
    if (calcInfo.operator === "+") {
      
    } else if (calcInfo.operator === "-") {

    } else if (calcInfo.operator === "/") {
      
    } else if (calcInfo.operator === "*") {
      
    }
  } else if (elementText === "") {
    
  }
    else {
    display.textContent += elementText
  }
})

function calculate(a, b, operator) {
  
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