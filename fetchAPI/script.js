const bodyElement = document.querySelector("body");
const codeElement = document.querySelector("#js-code");
codeElement.innerText = "wait.."
text = fetch('https://httpbin.org/get')
  .then((res) => {
    res.text().
      then(
        text => codeElement.innerText = text
      );
  });