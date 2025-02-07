const items = document.querySelectorAll(".item");
const dropZone = document.getElementById("drop-zone");

// ドラッグ開始時の処理
items.forEach((item) => {
  item.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", item.id);
    item.classList.add("dragging");
  });

  item.addEventListener("dragend", () => {
    item.classList.remove("dragging");
  });
});

// ドロップゾーンにドラッグ中の処理
dropZone.addEventListener("dragover", (event) => {
  event.preventDefault();
  dropZone.classList.add("dragover");
});

// ドロップゾーンからドラッグが外れた場合の処理
dropZone.addEventListener("dragleave", () => {
  dropZone.classList.remove("dragover");
});

// ドロップ処理
dropZone.addEventListener("drop", (event) => {
  event.preventDefault();
  dropZone.classList.remove("dragover");

  const itemId = event.dataTransfer.getData("text/plain");
  const item = document.getElementById(itemId);

  if (item) {
    // ドロップゾーンにアイテムを追加
    dropZone.appendChild(item);

    // ドロップ後にスタイルを変更して目立たせる
    item.style.backgroundColor = "#4caf50";
    item.style.color = "#fff";

    // ドロップゾーンにフィードバックメッセージを表示
    const message = document.createElement("p");
    message.textContent = `${item.textContent} was dropped!`;
    message.classList.add("drop-message");

    // ドロップゾーンにメッセージを追加
    dropZone.appendChild(message);

    // 2秒後にメッセージを削除
    setTimeout(() => {
      if (message.parentNode) {
        message.parentNode.removeChild(message);
      }
    }, 2000);
  } else {
    console.error("Failed to find the dragged item.");
  }
});

var fileArea = document.getElementById('dragDropArea');
var fileInput = document.getElementById('fileInput');
fileArea.addEventListener('dragover', function(evt){
  evt.preventDefault();
  fileArea.classList.add('dragover');
});
fileArea.addEventListener('dragleave', function(evt){
    evt.preventDefault();
    fileArea.classList.remove('dragover');
});
fileArea.addEventListener('drop', function(evt){
    evt.preventDefault();
    fileArea.classList.remove('dragenter');
    var files = evt.dataTransfer.files;
    console.log("DRAG & DROP");
    console.table(files);
    fileInput.files = files;
    photoPreview('onChenge',files[0]);
});
function photoPreview(event, f = null) {
  var file = f;
  if(file === null){
      file = event.target.files[0];
  }
  var reader = new FileReader();
  var preview = document.getElementById("previewArea");
  var previewImage = document.getElementById("previewImage");

  if(previewImage != null) {
    preview.removeChild(previewImage);
  }
  reader.onload = function(event) {
    var img = document.createElement("img");
    img.setAttribute("src", reader.result);
    img.setAttribute("id", "previewImage");
    preview.appendChild(img);
  };

  reader.readAsDataURL(file);
}


