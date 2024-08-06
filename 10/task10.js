document.addEventListener("DOMContentLoaded", () => {
  window.scrollTo(0, document.body.scrollHeight);
});
let count = 1;
const task10Container = document.querySelector(".task-10");
const addSquareButton = document.querySelector(".button");
addSquareButton.addEventListener("click", () => {
  const square = document.createElement("div");
  square.classList.add("square");
  square.innerText = count++;
  task10Container.append(square);
});

task10Container.addEventListener("click", (e) => {
  if (e.target.tagName === "DIV") {
    e.target.remove();
  }
});



