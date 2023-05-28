const menu = document.getElementById("list");
const toogleMenu = document.getElementById("toogleNav");
const pen = document.getElementById("pencil");
const penImg = document.getElementById("pencilImage");
const mainCanvas = document.getElementById("main-canvas");
const context = mainCanvas.getContext("2d");
let penStatus = false;
let menuStatus = false;
let initialX;
let initialY;

const dibujar = (cursorX, cursorY) => {
  context.beginPath();
  context.moveTo(initialX, initialY);
  context.lineWidth = 50;
  context.strokeStyle = "#000";
  context.lineCap = "round";
  context.lineJoin = "round";
  context.lineTo(cursorX, cursorY);
  context.stroke();

  initialX = cursorX;
  initialY = cursorY;
};

const mouseDown = (evt) => {
  initialX = evt.offsetX;
  initialY = evt.offsetY;
  dibujar(initialX, initialY);
  mainCanvas.addEventListener("mousemove", mouseMoving);
};

const mouseMoving = (evt) => {
  dibujar(evt.offsetX, evt.offsetY);
};

const mouseUp = () => {
  mainCanvas.removeEventListener("mousemove", mouseMoving);
};

const penMove = () => {
  penStatus = !penStatus;
  if (penStatus === true) {
    penImg.style.display = "none";
    mainCanvas.addEventListener("mousedown", mouseDown);
    mainCanvas.addEventListener("mouseup", mouseUp);
  } else {
    penImg.style.display = "block";
    mainCanvas.removeEventListener("mousedown", mouseDown);
    mainCanvas.removeEventListener("mouseup", mouseUp);
  }
};

const menuOpen = () => {
  menuStatus = !menuStatus;
  if (menuStatus === true) {
    toogleMenu.style.display = "block";
  } else {
    toogleMenu.style.display = "none";
  }
};

pen.addEventListener("click", penMove);
menu.addEventListener("click", menuOpen);
