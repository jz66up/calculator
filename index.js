const addEl = document.querySelector(".add");
const subtractEl = document.querySelector(".subtract");
const multiplyEl = document.querySelector(".multiply");
const divideEl = document.querySelector(".divide");
const equalEl = document.querySelector(".equal");
const numEl = document.querySelectorAll(".num");
const displayEl = document.querySelector(".display");
const clearEl = document.querySelector(".clear");
const deleteEl = document.querySelector(".delete");
const decimalEl = document.querySelector(".decimal");
const negativeEl = document.querySelector(".negative")

let numArray = [];
let input = "";
let operatorPresent = false;
let equalsPresent = false;
let firstno;
let secondno;

let operator = "";
let answer = "";

function operate() {
  switch (operator) {
    case "+":
      answer = firstno + secondno;
      console.log("answer is", answer);
      displayEl.innerText = answer;
      firstno = answer;
      console.log("firstno is (after equals)", firstno);
      secondno = "";

      break;
    case "-":
      answer = firstno - secondno;
      console.log("answer is", answer);
      displayEl.innerText = answer;
      firstno = answer;
      console.log("firstno is (after equals)", firstno);
      secondno = "";
      break;
    case "*":
      answer = firstno * secondno;
      console.log("answer is", answer);
      displayEl.innerText = answer;
      firstno = answer;
      console.log("firstno is (after equals)", firstno);
      secondno = "";
      break;
    case "/":
      answer = firstno / secondno;
      console.log("answer is", answer);
      displayEl.innerText = answer;
      firstno = answer;
      console.log("firstno is (after equals)", firstno);
      secondno = "";
    default:
      break;
  }
}

addEl.addEventListener("click", () => {
  operator = "+";
  displayEl.innerText = "+";
  operatorPresent = true;
  input = "";
});

subtractEl.addEventListener("click", () => {
  operator = "-";
  displayEl.innerText = "-";
  operatorPresent = true;
  input = "";
});

multiplyEl.addEventListener("click", () => {
  operator = "*";
  displayEl.innerText = "*";
  operatorPresent = true;
  input = "";
});

divideEl.addEventListener("click", () => {
  operator = "/";
  displayEl.innerText = "/";
  operatorPresent = true;
  input = "";
});

equalEl.addEventListener("click", () => {
  displayblink();
  operate();
  operatorPresent = false;
});

clearEl.addEventListener("click", () => {
  displayEl.innerText = 0;
  operatorPresent = false;
  answer = "";
  firstno = "";
  secondno = "";
  input = "";
});

deleteEl.addEventListener("click", () => {
  console.log("firstno is", firstno);
  input = input.substring(0, input.length - 1);
  displayEl.innerText = input;

  if (input === "") {
    displayEl.innerText = 0;
  }
});


negativeEl.addEventListener("click", ()=>{
  if (operatorPresent === false) {
    input = (+input * -1).toString()
    firstno = +input
    displayEl.innerText = input
  }
  if (operatorPresent === true) {
    input = (+input * -1).toString()
    secondno = +input
    displayEl.innerText = input
  }
  


  
})





numEl.forEach((num) => {
  num.addEventListener("click", () => {
    if (operatorPresent === false) {
      displayblink();
      input = input + num.innerText;
      displayEl.innerText = input;
      firstno = +input;
      console.log("firstno is", firstno);
    }

    if (operatorPresent === true) {
      displayblink();
      input = input + num.innerText;
      displayEl.innerText = input;
      secondno = +input;
      console.log("secondnumber is", secondno);
    }
  });
});

function displayblink() {
  displayEl.style.color = "#5D7C5D";
  setInterval(turnblack, 300);
  clearInterval();
}

function turnblack() {
  displayEl.style.color = "black";
}
