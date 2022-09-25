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

const clear = () => {
  result = "0";
  storedNums = null;
  operator = null;
  hasSecondVal = false;
  progress = null;
  showResult();
};

const operations = (opr) => {
  const val = parseFloat(result);

  if (operator && hasSecondVal) {
    operator = opr;
    return;
  }

  if (storedNums === null) {
    storedNums = val;
  } else if (operator) {
    const showResult = calculate(storedNums, val, operator);

    result = `${parseFloat(showResult.toFixed(10))}`;
    storedNums = showResult;
  }
  hasSecondVal = true;
  operator = opr;

  if (!val == 0) {
    if (opr != "=") {
      progress === null
        ? (progress = `${val} ${opr} `)
        : (progress += `${val} ${opr} `);
    } else {
      progress === null ? (progress = `${val} `) : (progress += `${val}`);
    }
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

  if (element.matches(".AC")) {
    clear();
    return;
  }

  numbers(element.value);
  showResult();
});
