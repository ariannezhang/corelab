// alert("Testing");
// var $desc = document.querySelector('.description');
// console.log('.description');

// $desc.innerHTML = 'hi';

// var $items = document.querySelectorAll(".item");
// $items[1].innerHTML = "no more item";

//console.log($items.length);
// for (var i = 0; i < $items.length; i++) {
//   $items[i].innerHTML = "item ghost";
// }
// i++ is shorthand for i plus one
// $items.forEach(item => {
//   item.innerHTML = "item ghost";
// });
console.log(Math.random() * $items.length);

const randomGenerator = Math.round(Math.random() * items.length);
$items[0].innerHTML = `
<img src="image-${RandomGenerator}.jpg/>`;

function onClick() {
  console.log("im clicked!");
}

//generates a random number between 0 and 1
//multiplying by 100 will generate something from 0 to 100
