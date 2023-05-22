const button = document.getElementById("button");
const body = document.querySelector("body");
const colorNumber = document.querySelector(".numero_cor");
const colorCard = document.querySelector(".card_cor");

const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const rbgColor = `rgb(${r},${g},${b})`;
  return rbgColor;
};
//function rgbAhex(r,g,b){
    
   // return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//}

const setBackgrount = () => {
  const newColor = generateRandomColor();
  console.log(newColor);
  colorNumber.innerHTML = newColor;
  body.style.backgroundColor = newColor;
  colorCard.style.backgroundColor = newColor;
};

button.addEventListener("click", setBackgrount);