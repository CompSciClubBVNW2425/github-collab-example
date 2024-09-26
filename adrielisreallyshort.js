const shortAdr = document.getElementById("short");
let frame = 0;

function growAdr() {
  frame++;
  shortAdr.style.transform = "scale(" + Math.abs(Math.sin(frame/10)*1) + ")";
  requestAnimationFrame(growAdr);
}

growAdr();

window.requestAnimationFrame(growAdr);
