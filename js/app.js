const storedValue = document.querySelector(".storedValue");
const calculatorValue = document.querySelector(".value");
const buttons = document.querySelector(".buttons");

let result = "0";
let storedNums = null;
let operator = null;
let hasSecondVal = false;
let progress = null;

const showResult = () => {
  calculatorValue.innerText = result;
  storedValue.innerText = progress;
  console.log(storedNums);
};
showResult();

const calculate = (n1, n2, opt) => {
  if (opt === "+") {
    return n1 + n2;
  } else if (opt === "-") {
    return n1 - n2;
  } else if (opt === "*") {
    return n1 * n2;
  } else if (opt === "/") {
    return n1 / n2;
  }

  return n2;
};

const numbers = (num) => {
  if (hasSecondVal) {
    result = num;
    hasSecondVal = false;
  } else {
    result = result === "0" ? num : result + num;
  }
};

const decimal = () => {
  if (!result.includes(".")) {
    result += ".";
    showResult();
  }
};

const negativePositive = () => {
  if (result === "0") {
    return;
  }
  if (result.includes("-")) {
    result = result.replace("-", "");
  } else {
    result = "-" + result;
  }
  showResult();
};

const clear = () => {
  progress = null;
  result = "0";
  showResult();
};

const operations = (opr) => {
  const val = parseFloat(result);

  if (storedNums === null) {
    storedNums = val;
  } else if (operator) {
    const showResult = calculate(storedNums, val, operator);

    result = String(showResult);
    storedNums = showResult;
  }
  hasSecondVal = true;
  operator = opr;

  if (!val == 0 && opr != "=") {
    progress === null
      ? (progress = `${val} ${opr} `)
      : (progress += `${val} ${opr} `);
  }

  showResult();
};

buttons.addEventListener("click", (e) => {
  let element = e.target;

  if (!element.matches(".btn")) {
    return;
  }

  if (element.matches(".operator")) {
    operations(element.value);
    showResult();
    return;
  }

  if (element.matches(".decimal")) {
    decimal();
    return;
  }

  if (element.matches(".negPoz")) {
    negativePositive();
    return;
  }

  if (element.matches(".AC")) {
    clear();
    return;
  }

  numbers(element.value);
  showResult();
});
