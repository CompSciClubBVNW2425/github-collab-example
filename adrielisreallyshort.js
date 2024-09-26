const shortAdr = document.getElementById("short");
let frame = 0;

function growAdr() {
  frame++;
  shortAdr.style.transform = "scale(" + 0.5 + Math.sin(frame/10)*1 + ")";
  requestAnimationFrame(growAdr);
}

growAdr();

window.requestAnimationFrame(growAdr);
