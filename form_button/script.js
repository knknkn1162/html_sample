const buttonElement = document.querySelector("#js-form-button");
const inputElement = document.querySelector("#js-form-input");
buttonElement.addEventListener("click", (event) => {
  console.log(inputElement.value);
  // inputの中身を空にする
  inputElement.value = '';
});