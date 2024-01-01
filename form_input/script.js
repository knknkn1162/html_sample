const formElement = document.querySelector("#js-form");
const inputElement = document.querySelector("#js-form-input");
formElement.addEventListener("submit", (event) => {
  // これがないと get methodの"?k=test"付きでリクエスト発行される
  event.preventDefault();
  console.log(inputElement.value);
  // inputの中身を空にする
  inputElement.value = '';
});