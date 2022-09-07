const listItems = document.querySelectorAll(".item");
const countCategories = listItems.length;
console.log("Number of categories:", countCategories);

listItems.forEach((item) => {
  const nameCategory = item.querySelector("h2").textContent;
  console.log("Category:", nameCategory);
  const countProduts = item.querySelectorAll("li").length;
  console.log("Elements:", countProduts);
});
