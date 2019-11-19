var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function setGradient(){
  body.style.background = "linear-gradient(to right, " + color1.value
  + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
}

setGradient();
//color1.addEventListener("input", setGradient);
//color2.addEventListener("input", setGradient);
button.addEventListener("click", selfDestruct);

var one = [0, 25, 12];

function selfDestruct(){
  for (var i = 0; i < one.length; i++) {
    one[i] = Math.floor(Math.random() * 256);
  }
  var two = "rgb(" + one[0] + ", " + one[1] + ", " + one[2] +")";
  console.log(two);


  body.style.background = "linear-gradient(to right, " + two
  + ", " + color2.value + ")";
  console.log("hilfe");
  console.log(two);
  console.log(body.style.background);
}
