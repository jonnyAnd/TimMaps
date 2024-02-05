function main() {
  console.log("hello");

  //   addExportClick();
}

function contentClick(contentElement) {
  console.log("poo" + contentElement);

  makeImage(contentElement);

}



function makeImage(contentElement){
	// var container = document.getElementById("htmltoimage");; /* full page */
	html2canvas(contentElement, { allowTaint: true }).then(function (canvas) {

		var link = document.createElement("a");
		document.body.appendChild(link);
		link.download = "html_image.jpg";
		link.href = canvas.toDataURL();
		link.target = '_blank';
		link.click();
	});
}






main();
