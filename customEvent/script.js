  // イベントと一緒にハンドラに来る追加の詳細情報です
  elem.addEventListener("hello", function(event) {
    alert(event.detail.name);
  });

  // 明示的にカスタムイベントを呼び出す(onload)
  elem.dispatchEvent(
    new CustomEvent("hello", {
      detail: { name: "Kenta" }
    })
  );