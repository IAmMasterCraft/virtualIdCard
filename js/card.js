/*IAmMasterCraft*/
function downloadPng (userName) {
  html2canvas(document.querySelector("#main-cont")).then(canvas => {
      document.querySelector("#capture")).appendChild(canvas);
      return Canvas2Image.saveAsImage(canvas, null, null, "png", userName)
  });
}
