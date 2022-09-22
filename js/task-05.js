inputRef.addEventListener("input", (event) => {
  outputRef.textContent = event.currentTarget.value;
  if (outputRef.textContent === "") {
    outputRef.textContent = "Anonymous";
  }
});
