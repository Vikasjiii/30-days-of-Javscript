const selectElement = document.querySelector("select");
const selectedOptionParagraph = document.querySelector("p span");
selectElement.addEventListener("change", (e) => {
  selectedOptionParagraph.innerText = e.target.value;
});
