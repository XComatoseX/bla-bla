function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

// Проверяем, является ли устройство Samsung A52
function isSamsungA52() {
  // Можно попробовать определить устройство по строке user-agent
  return navigator.userAgent.includes("Samsung A52");
}

if (isMobileDevice() && isSamsungA52()) {
  modelInfo.textContent = "ДААА";
} else {
  modelInfo.textContent = "Unknown";
  console.log("Пользователь не зашел с телефона Samsung A52 или не с мобильного устройства");
}




