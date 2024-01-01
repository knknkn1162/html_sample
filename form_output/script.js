const formElement = document.querySelector("#js-form");
const inputaElement = document.querySelector("#a");
const inputbElement = document.querySelector("#b");
const outputElement = document.querySelector("#o");

formElement.addEventListener("submit", (event) => {
  // イベントハンドラー属性値に指定したJavaScriptを実行後、最終的な戻り値がfalseであった場合、要素の本来の動作がキャンセルされます。これはpreventDefault()メソッドを実行するのと同じ効果です。
  return false;
});

formElement.addEventListener("input", (event) => {
  outputElement.value = inputaElement.valueAsNumber + inputbElement.valueAsNumber;
});