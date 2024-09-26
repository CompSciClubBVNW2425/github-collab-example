const shortAdr = document.getElementById("short");
let frame = 0;

function growAdr() {
  frame++;
  shortAdr.style.transform = "scale(" + 1 + Math.sin(frame/10)*1 + ")";
  requestAnimationFrame(growAdr);
}

growAdr();

window.requestAnimationFrame(growAdr);
