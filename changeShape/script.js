let circle = document.getElementById("circle");
let colorBtn = document.getElementById("colour-btn");
let shapeBtn = document.getElementById("shape-btn");
let shape = document.querySelector(".innerShape");

colorBtn.addEventListener("click", () => {
  let data = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += data[Math.floor(Math.random() * 16)];
  }

  circle.style.backgroundColor = color;
});

shapeBtn.addEventListener("click", () => {
  shape.classList.toggle("tri");
});
