const slider = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

slider.value = slider.getAttribute("min");

function moveSlider() {
  text.style.fontSize = `${slider.value}px`;
}

slider.addEventListener("input", moveSlider);
