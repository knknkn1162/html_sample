const formElement = document.querySelector("#js-form");
const fileInputElement = document.querySelector("#js-form-file");
formElement.addEventListener("submit", (event) => {
  // comment out when post API
  event.preventDefault();
  Array.from(fileInputElement.files).forEach(file => {
    console.log(`filename: ${file.name}: {type: ${file.type}, size: ${file.size}}`);
  });
});