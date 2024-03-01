let circle = document.querySelector(".circle");
let bg = document.querySelector(".bg");
let body = document.body;
let h1 = document.querySelector("h1");
bg.addEventListener("click", () => {
  circle.classList.toggle("moved");
  body.classList.toggle("bgblack");
  h1.classList.toggle("h1black");
});
