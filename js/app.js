const calculatorValue = document.querySelector("#value");
const buttons = document.querySelector(".buttons");

let result = "0";

const showResult = () => {
  calculatorValue.innerText = result;
};
showResult();

const numbers = (num) => {
  result = result === "0" ? num : result + num;
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
  result = "0";
  showResult();
};

const operations = (opr) => {
  console.log(opr);
  showResult();
};

buttons.addEventListener("click", (e) => {
  let element = e.target;

  if (!element.matches(".btn")) {
    return;
  }

  if (element.matches(".operator")) {
    operations(element.value);
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
