const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
var currentColor = "black";
var currentLine = 5;
let painting = false;

canvas.addEventListener('mousedown', (e) => {
    painting = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
});

canvas.addEventListener('mouseup', () => {
    painting = false;
});

canvas.addEventListener('mousemove', (e) => {
    if (painting) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.strokeStyle = currentColor;
        ctx.lineWidth = currentLine;
        ctx.lineCap = 'round';
        ctx.stroke();
    }
});

document.getElementById('export').addEventListener('click', ()=> {
  printresult();
})

document.getElementById("red").addEventListener('click', () => {
  currentColor = "rgb(255, 117, 117)";
  document.getElementById('spann').style.backgroundColor = currentColor;
});
document.getElementById("blue").addEventListener('click', () => {
  currentColor = "rgb(132, 210, 255)";
  document.getElementById('spann').style.backgroundColor = currentColor;
});
document.getElementById("yellow").addEventListener('click', () => {
  currentColor = "rgb(255, 255, 102)";
  document.getElementById('spann').style.backgroundColor = currentColor;
});
document.getElementById("orange").addEventListener('click', () => {
  currentColor = "rgb(255, 139, 62)";
  document.getElementById('spann').style.backgroundColor = currentColor;
});
document.getElementById("deepblue").addEventListener('click', () => {
  currentColor = "rgb(96, 99, 255)";
  document.getElementById('spann').style.backgroundColor = currentColor;
});
document.getElementById("green").addEventListener('click', () => {
  currentColor = "rgb(98, 255, 119)";
  document.getElementById('spann').style.backgroundColor = currentColor;
});
document.getElementById("purple").addEventListener('click', () => {
  currentColor = "rgb(164, 94, 255)";
  document.getElementById('spann').style.backgroundColor = currentColor;
});
document.getElementById("darkgreen").addEventListener('click', () => {
  currentColor = "rgb(19, 165, 0)";
  document.getElementById('spann').style.backgroundColor = currentColor;
});
document.getElementById("pink").addEventListener('click', () => {
  currentColor = "rgb(255, 108, 243)";
  document.getElementById('spann').style.backgroundColor = currentColor;
});
document.getElementById("brown").addEventListener('click', () => {
  currentColor = "rgb(145, 119, 71)";
  document.getElementById('spann').style.backgroundColor = currentColor;
});
document.getElementById("black").addEventListener('click', () => {
  currentColor = "black";
  document.getElementById('spann').style.backgroundColor = currentColor;
});

document.getElementById("erase").addEventListener('click', () => {
  currentColor = "white";
  document.getElementById('spann').style.backgroundColor = currentColor;
});
document.getElementById("small").addEventListener('click', () => {
  currentLine = 5;
  document.getElementById('code').innerHTML = currentLine;
});
document.getElementById("medium").addEventListener('click', () => {
  currentLine = 15;
  document.getElementById('code').innerHTML = currentLine;
});
document.getElementById("large").addEventListener('click', () => {
  currentLine = 25;
  document.getElementById('code').innerHTML = currentLine;
});
document.getElementById("largest").addEventListener('click', () => {
  currentLine = 40;
  document.getElementById('code').innerHTML = currentLine;
});

document.getElementById("clearPage").addEventListener('click', () => {
  document.getElementById('headline').innerHTML = "";
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

/**
 * Exports the generated article as a PNG file. The user will be prompted with a save window to select a save file target.
 */
function printresult() {
  html2canvas(document.querySelector("#container"), {
    width: 1200,
    height: 1000}).then(canvas2 => {
    document.body.appendChild(canvas2).style.visibility = "hidden";
    Canvas2Image.saveAsJPEG(canvas2, 1200, 1000);
  });
}