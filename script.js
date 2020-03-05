const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const colorIs = document.querySelector("#colorIs");
const body = document.querySelector("body");
const random = document.querySelector("#random");


color1.value = "#b0e0e6"
color2.value = "#d2b48c"
body.style.background = "linear-gradient(to right, #b0e0e6, #d2b48c)"
colorIs.textContent = body.style.background

// Change BG color
function setGradient() {
  body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")"

  colorIs.textContent = body.style.background
}

// Random Color
function randomColor(){
  let color = Math.floor(Math.random() * 16777215).toString(16);
  for(count = color.length; count < 6; count++) {
      color = "0" + color;                     
  }
  var randomColor1 = "#" + color;

  let color2 = Math.floor(Math.random() * 16777215).toString(16);
  for(count = color.length; count < 6; count++) {
      color = "0" + color;                     
  }
  var randomColor2 = "#" + color2;

  body.style.background = "linear-gradient(to right, " + randomColor1 + "," + randomColor2 + ")"

  colorIs.textContent = body.style.background
  
}


// Event listener
color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)

random.addEventListener("click", randomColor)