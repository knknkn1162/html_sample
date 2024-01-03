const formElement = document.querySelector("#js-form");
const inputElement = document.querySelector("#js-form-input");
const templateElement = document.querySelector("#js-template");
const ulElement = document.querySelector("#js-ul");
formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = inputElement.value;
  if(!value.length > 0) {
    alert("テキスト入力してください")
    return;
  }

  // see https://developer.mozilla.org/ja/docs/Web/HTML/Element/template#documentfragment_%E3%81%AE%E8%90%BD%E3%81%A8%E3%81%97%E7%A9%B4%E3%81%AE%E5%9B%9E%E9%81%BF
  const clone = templateElement.content.firstElementChild.cloneNode(deep=true);
  const labelElement = clone.querySelector("label");
  const buttonElement = clone.querySelector("button");
  const checkboxElement = clone.querySelector("input[type=checkbox]")
  labelElement.innerText = value;
  ulElement.appendChild(clone);
  buttonElement.addEventListener("click", (event) => {
    clone.remove();
  });
  checkboxElement.addEventListener("change", (event) => {
    clone.className = event.target.checked ? "checked" : "";
  });
  inputElement.value = ""
});