const decrementBut = document.querySelector('[data-action="decrement"]');
console.log(decrementBut);

const incrementBut = document.querySelector('[data-action="increment"]');
console.log(incrementBut);

let counterValue = document.querySelector("#value").textContent;
console.log(counterValue);

// decrementBut.addEventListener("click", () => {
//   console.log("click");
// });
function handleDecrementButClick() {
  console.log("click");
  const counter = Number(counterValue) - 1;
  return (counterValue.textContent = counter);
}
function handleIncrementButClick() {
  console.log("click");
  const counter = Number(counterValue) + 1;
  return (counterValue.textContent = counter);
}

decrementBut.addEventListener("click", handleDecrementButClick);

incrementBut.addEventListener("click", handleIncrementButClick);

// const handleClick = (event) => {
//   console.log("event: ", event);
//   console.log("event type: ", event.type);
//   console.log("currentTarget: ", event.currentTarget);
// };

// decrementBut.addEventListener("click", handleClick);
