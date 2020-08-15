/*IAmMasterCraft*/
function downloadPng(userName) {
  html2canvas(document.querySelector("#main-cont"), {
    scrollY: -window.scrollY,
    scrollX: -window.scrollX,
  }).then((canvas) => {
    document.querySelector("#capture").appendChild(canvas);
    Canvas2Image.saveAsImage(canvas, null, null, "png", userName);
    return downloadFileCallBack("png");
  });
}

function downloadPdf(userName) {
  var doc = new jsPDF();
  html2canvas(document.querySelector("#main-cont"), {
    scrollY: -window.scrollY,
    scrollX: -window.scrollX,
  }).then((canvas) => {
    document.querySelector("#capture").appendChild(canvas);
    var img=canvas.toDataURL("image/png", 1.0);
    doc.addImage(img, 'JPEG', 10, 10, (canvas.width/4), (canvas.height/4));
    doc.save(userName + ".pdf");
//     var string = doc.output('datauristring');
//     var blobPDF = new Blob([doc.output('blob')], {type : 'application/pdf'});
//     var blobUrl = URL.createObjectURL(blobPDF);
//     var iframe = "<iframe width='100%' height='100%' src='" + string + "'></iframe>"
//     var x = window.open();
//     x.document.open();
//     x.document.write(iframe);
//     $("#dl_link").attr("href", blobUrl).show();
    downloadFileCallBack("pdf");    
  });
  // doc.text("Hello world!", 10, 10);
  // doc.save(userName + ".pdf");
//   return downloadFileCallBack("pdf");
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
        "The generated ID Card [PDF Format] has been downloaded to your device please check your download folder. It is saved with 'NOUN_ID_CARD_'!"
      ),
      10000
    );
  }
}
