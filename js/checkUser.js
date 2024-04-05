document.addEventListener("DOMContentLoaded", function() {
  var modelInfo = document.getElementById("modelInfo");
  var nameInfo = document.getElementById("nameInfo");

  // Получение модели устройства с использованием библиотеки platform.js
  var model = platform.product;

  // Получение имени устройства с использованием библиотеки platform.js
  var name = platform.os.family;

  modelInfo.textContent = model || "Unknown";
  nameInfo.textContent = name || "Unknown";
});