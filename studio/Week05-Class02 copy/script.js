var imageArray = ["albumcovers/blindstar.jpg", "albumcovers/gdragon"];
function displayImage() {
  // console.log(Math.random() * 31);

  var num = Math.floor(Math.random() * 2);
  documents.canvas.src = imagesArray[num];
}

// function onClick() {
//   console.log("im clicked!");
// }

// }
