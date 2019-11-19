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

var randColor1 = [0, 25, 12];
var randColor2 = [3, 34, 2];

function randList(lis) {
  for (var i = 0; i < lis.length; i++) {
    lis[i] = Math.floor(Math.random() * 256);
  }
}

function selfDestruct(){
  randList(randColor1);
  randList(randColor2);
  var one = "rgb(" + randColor1[0] + ", " + randColor1[1] + ", " + randColor1[2] +")";
  var two = "rgb(" + randColor2[0] + ", " + randColor2[1] + ", " + randColor2[2] +")";

  body.style.background = "linear-gradient(to right, " + one
  + ", " + two + ")";
  css.textContent = body.style.background;
}
