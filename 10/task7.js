const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
 
  e.preventDefault();
  const formData = new FormData(form);
  const name = formData.get("name");
  const password = formData.get("password");
  console.log(name);
  console.log(password);
});
