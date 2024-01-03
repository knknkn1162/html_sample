const buttonElement = document.querySelector('button');
buttonElement.addEventListener(
  'click',
  event => {
    // templete 要素の content 属性の有無を確認することで、
    // ブラウザーが HTML の template 要素に対応しているかテストします。
    if ("content" in document.createElement("template")) {
      // 既存の HTML tbody と template の行を使って
      // table をインスタンス生成します。
      const tbodyElement = document.querySelector("tbody");
      const templateElement = document.querySelector("#productrow");

      // 新しい行を複製して表に挿入します。
      const clone = templateElement.content.cloneNode(deep=true);
      let td = clone.querySelectorAll("td");
      td[0].textContent = new Date().toISOString();
      td[1].textContent = "Kenta"
      tbodyElement.appendChild(clone);
    } else {
      // HTML の template 要素に対応していないので
      // 表に行を追加するほかの方法を探します。
    }
  })