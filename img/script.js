const img = document.getElementById('lampadina');
const button = document.getElementById('bottone');


button.addEventListener('click', function () {
  if (button.textContent.includes("Accendi")) {
    img.src = "img/yellow_lamp.png";
    button.textContent = "Spegni";
  } else {
    img.src = "img/white_lamp.png";
    button.textContent = "Accendi";
  }
});