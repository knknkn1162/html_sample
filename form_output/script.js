const formElement = document.querySelector("#js-form");
const inputaElement = document.querySelector("#a");
const inputbElement = document.querySelector("#b");
const outputElement = document.querySelector("#o");

formElement.addEventListener("submit", (event) => {
  return false;
});

formElement.addEventListener("input", (event) => {
  outputElement.value = inputaElement.valueAsNumber + inputbElement.valueAsNumber;
});