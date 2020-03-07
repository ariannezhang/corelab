window.onLoad = function() {
  var button = document.getElementById("button");

  function selectrandom(x) {
    y = x[Math.floor(Math.random() * x.length)];
    return y;
  }
  window.onload = choosePic;

  var myPix = new Array(
    "images/lion.jpg",
    "images/tiger.jpg",
    "images/bear.jpg"
  );
  function generate() {
    var selected_one = selectrandom(line_one);
    var selected_two = selectrandom(line_two);
    var selected_three = selectrandom(line_three);
    var selected_four = selectrandom(line_four);

    first_line.innerHtml = selected_one;
    second_line.innerHtml = selected_two;
    third_line.innerHtml = selected_three;
    four_line.innerHtml = selected_four;
  }
  document.getElementById("button").onclick = function() {
    console.log("click");
    generate();
  };

  function choosePic() {
    randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("myPicture").src = myPix[randomNum];
  }
};
generate();
// this function above is code from the internet
