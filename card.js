/*IAmMasterCraft*/
function downloadPng(userName) {
  html2canvas(document.querySelector("#main-cont")).then((canvas) => {
    document.querySelector("#capture").appendChild(canvas);
    Canvas2Image.saveAsImage(canvas, null, null, "png", userName);
    return downloadFileCallBack("png");
  });
}

function downloadPdf(userName) {
  var doc = new jsPDF();
  html2canvas(document.querySelector("#main-cont")).then((canvas) => {
    document.querySelector("#capture").appendChild(canvas);
    var img=canvas.toDataURL("image/png");
    doc.addImage(img, 'JPEG', 10, 10, (canvas.width/10), (canvas.height/10));
    doc.save(userName + ".pdf");
  });
  // doc.text("Hello world!", 10, 10);
  // doc.save(userName + ".pdf");
  return downloadFileCallBack("pdf");
}

function downloadFileCallBack(fileType) {
  if (fileType == "png") {
    setTimeout(
      alert(
        "The generated ID Card [PNG/Image Format] has been downloaded to your device please check your gallery/download folder. It is saved with your name!"
      ),
      5000
    );
  }
  if (fileType == "pdf") {
    setTimeout(
      alert(
        "The generated ID Card [PDF Format] has been downloaded to your device please check your download folder. It is saved with your name!"
      ),
      10000
    );
  }
}
