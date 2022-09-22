const buttonRef = document.querySelector(".change-color");
const colorName = document.querySelector(".color");
console.log(colorName.textContent);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeRandomColor() {
  const currentColor = getRandomHexColor();
  document.body.style.backgroundColor = currentColor;
  colorName.textContent = currentColor;
}

buttonRef.addEventListener("click", changeRandomColor);
