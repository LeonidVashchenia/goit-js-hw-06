const buttonGreate = document.querySelector("button[data-create]");

const buttonDestroy = document.querySelector("button[data-destroy]");

const inputRef = document.querySelector("input");

const boxArea = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.log(getRandomHexColor());

function createBoxes(amount) {
  console.log(amount);
  amount = Number(inputRef.value);
  const arr = [];
  for (let i = 1; i <= amount; i += 1) {
    const width = 30 + 10 * i;
    const height = 30 + 10 * i;
    const backgroundColor = getRandomHexColor();
    arr.push(
      `<div style="width: ${width}px; height: ${height}px; background-color: ${backgroundColor};"></div>`
    );
  }
  boxArea.innerHTML = arr.join("");
}

buttonGreate.addEventListener("click", createBoxes);
buttonDestroy.addEventListener("click", () => {
  boxArea.innerHTML = "";
  inputRef.value = "";
});
