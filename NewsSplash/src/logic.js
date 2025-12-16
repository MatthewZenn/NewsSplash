const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
var currentColor = "black";
var currentLine = "2px";

document.getElementById("red").addEventListener('click', () => {
  currentColor = "rgb(255, 117, 117)";
  document.getElementById('headline').innerHTML = currentColor;
});
document.getElementById("blue").addEventListener('click', () => {
  currentColor = "rgb(132, 210, 255)";
  document.getElementById('headline').innerHTML = currentColor;
});
document.getElementById("yellow").addEventListener('click', () => {
  currentColor = "rgb(255, 255, 102)";
  document.getElementById('headline').innerHTML = currentColor;
});
document.getElementById("orange").addEventListener('click', () => {
  currentColor = "rgb(255, 139, 62)";
  document.getElementById('headline').innerHTML = currentColor;
});
document.getElementById("deepblue").addEventListener('click', () => {
  currentColor = "rgb(96, 99, 255)";
  document.getElementById('headline').innerHTML = currentColor;
});
document.getElementById("green").addEventListener('click', () => {
  currentColor = "rgb(98, 255, 119)";
  document.getElementById('headline').innerHTML = currentColor;
});
document.getElementById("purple").addEventListener('click', () => {
  currentColor = "rgb(164, 94, 255)";
  document.getElementById('headline').innerHTML = currentColor;
});
document.getElementById("darkgreen").addEventListener('click', () => {
  currentColor = "rgb(19, 165, 0)";
  document.getElementById('headline').innerHTML = currentColor;
});
document.getElementById("pink").addEventListener('click', () => {
  currentColor = "rgb(255, 108, 243)";
  document.getElementById('headline').innerHTML = currentColor;
});
document.getElementById("brown").addEventListener('click', () => {
  currentColor = "rgb(145, 119, 71)";
  document.getElementById('headline').innerHTML = currentColor;
});
document.getElementById("black").addEventListener('click', () => {
  currentColor = "black";
  document.getElementById('headline').innerHTML = currentColor;
});

document.getElementById("erase").addEventListener('click', () => {
  currentColor = "white";
  document.getElementById('headline').innerHTML = currentColor;
});
document.getElementById("small").addEventListener('click', () => {
  currentLine = "2px";
  document.getElementById('headline').innerHTML = currentLine;
});
document.getElementById("medium").addEventListener('click', () => {
  currentLine = "6px";
  document.getElementById('headline').innerHTML = currentLine;
});
document.getElementById("large").addEventListener('click', () => {
  currentLine = "10px";
  document.getElementById('headline').innerHTML = currentLine;
});

document.getElementById("clearPage").addEventListener('click', () => {
  document.getElementById('headline').innerHTML = "";
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});