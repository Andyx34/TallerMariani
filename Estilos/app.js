const title = document.querySelector("h1");

console.log(title);

title.style.color = "red";

const menu =  document.querySelector("menu");

console.log(menu);

menu.className = "main-menu";

const button = document.querySelector("button");

console.log(button);

button.addEventListener("click", () =>{
    menu.classList.toggle("invisible");
});

const contentArea =  document.getElementById("contentArea");

console.log(contentArea);

contentArea.innerHTML = "<p>Este es un nuevo parrafo</p>"

contentArea.insertAdjacentHTML("beforeend","<p>Este es otro parrafo nuevo</p>");

const listArea =  document.getElementById("listArea");

console.log(listArea);

listArea.innerHTML += "<li>Item 7</li>";

listArea.insertAdjacentHTML("beforeend","<li>Item 8</li>");