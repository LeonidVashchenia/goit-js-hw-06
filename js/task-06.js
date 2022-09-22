const inputRef = document.querySelector("#validation-input");
console.log(inputRef);
const checkInput = Number(inputRef.dataset.length);
console.log(checkInput);

inputRef.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length !== checkInput) {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  } else {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  }
});
