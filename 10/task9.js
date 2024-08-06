// const allLi = document.querySelectorAll("li");

// allLi.forEach((li)=>{
//     li.addEventListener("click",()=>{
//         console.log(li.innerText);

//     })

// })
//event delegation
const ul = document.querySelector("ul");
ul.addEventListener("click", (e) => {
  if ((e.target.tagName == "LI")) {
    console.log(e.target.innerText);
  }
});
