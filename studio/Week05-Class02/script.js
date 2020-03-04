// var imageArray = [
//   "albumcovers/blindstar.jpg",
//   "albumcovers/gdragon.jpg",
//   "albumcovers/cardib.jpg",
//   "albumcovers/childishgambino.jpg",
//   "albumcovers/cjamm",
//   "albumcovers/bewhy",
//   "albumcovers/tylerthecreator",
//   "albumcovers/drake.jpg",
//   "albumcovers/travisscott.jpg",
//   "albumcovers/trippieredd.jpg",
//   "albumcovers/dean.jpg",
//   "albumcovers/groovyroom.jpg",
//   "albumcovers/ziont.jpg",
//   "albumcovers/zico2,jpg",
//   "albumcovers/crush.jpg",
//   "albumcovers/zico.jpg",
//   "albumcovers/sokodomo.jpg",
//   "albumcovers/jcole.jpg",
//   "albumcovers/richbrian",
//   "albumcovers/loco.jpg",
//   "albumcovers/macmiller.jpg",
//   "albumcovers/sikk.jpg",
//   "albumcovers/thecarters.jpg",
//   "albumcovers/trippieredd2.jpg",
//   "albumcovers/trippieredd3.jpg",
//   "albumcovers/youngthug.jpg",
//   "albumcovers/hoody.jpg",
//   "albumcovers/junoflo.jpg",
//   "albumcovers/juicewrld.jpg",
//   "albumcovers/richbrian2.jpg",
//   "albumcovers/higherbrothers.jpg"
// ];
// var $items = document.querySelectorAll(".item");
// const randomGenerator = Math.round(Math.random() * $items.length);
// $items[0].innerHTML = ` <img src="albumcovers/image-${randomGenerator}.jpg"/>
//        `;
// function displayImage() {
// console.log(Math.random() * 31);

//   var num = Math.floor(Math.random() * 31);
//   documents.canvas.src = imagesArray[num];
// }

// function onClick() {
//   console.log("im clicked!");
// }

// }

var items = document.querySelectorAll(".container");
items.forEach((item, i) => {
  var randomGenerator = Math.round(Math.random() * 31);
  item.innerHTML = `<img src="raveposters/${randomGenerator}.jpg" class="image"/>`;
});
function handleClick() {
  console.log("this function runs every time you click the button");
  // Take a look at index-comments.html and index-final.html to get ideas for how you can generate and manipulate content on the screen when this function runs
  // what if we randomized the images on the screen every time we clicked the button? How would we have to change our in-class code?
  // Try to do additional things inside here too. Learn how to use style in JavaScript to change colors, typography, etc.
}
