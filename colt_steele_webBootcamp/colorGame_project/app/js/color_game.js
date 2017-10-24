var numSquares = 6
var colors = [];
var square = document.querySelectorAll(".square");
var pickedColor;
var colordisplay = document.getElementById('colordisplay');
var messagedisplay = document.querySelector('#message');
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#resetbutton");
var modeButtons = document.querySelectorAll(".mode");
colordisplay.textContent = pickedColor;

init();

function init(){
  setupModeButtons();
  setupSquares();
  //will generate our colors for us
  reset();
}

function setupSquares() {
  for(var i = 0; i < square.length; i++){
    //define when a box is clicked
    square[i].addEventListener("click", function(){
      //grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      //compare to pickedColor
      if(clickedColor === pickedColor){
          messagedisplay.textContent = "CORRECT!";
          changeColors(clickedColor);
          h1.style.backgroundColor = clickedColor;
          resetbutton.textContent = "Play Again?";
      } else{
          this.style.backgroundColor = "#232323";
          messagedisplay.textContent = "Try Again";
        }
      });
  }
}

function setupModeButtons() {
  for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      //removes selected from both to be safe and adds to one clicked on
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      //If condition is true, the operator returns the value of expr1; otherwise, it returns the value of expr2. Same as if statement below.
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      reset();
    });
  }
}

function reset(){
  //When clicked: generate new colors
  colors = generateRandomColors(numSquares);
  //pick a new random colors
  pickedColor = pickColor();
  //change display to match picked color
  colordisplay.textContent = pickedColor;
  //change colors of squares on the page
  for(var i = 0; i < square.length; i++){
    if(colors[i]){
      square[i].style.display = "block";
      square[i].style.backgroundColor = colors[i];
    } else{
      square[i].style.display = 'none';
      }
  }
  //background, button text, & display reset also
  h1.style.backgroundColor = "steelblue";
  resetbutton.textContent = "New Colors";
  messagedisplay.textContent = "";
}

resetbutton.addEventListener("click", function(){
  reset()
})

function changeColors(color){
  //loop thorugh all squares
  for(var i = 0; i < square.length; i++){
    //change each color to match given color
    square[i].style.backgroundColor = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  //make an array
  var arr = [];
  //repeat num times
  for(var i = 0; i < num; i++){
    //get random color and push into array
    arr.push(randomColor());
  }
  //return the array
  return arr;
}

function randomColor(){
  //pick a red form 0 to 255
  var r = Math.floor(Math.random() * 255);
  //pick a green form 0 to 255
  var g = Math.floor(Math.random() * 255);
  //pick a blue form 0 to 255
  var b = Math.floor(Math.random() * 255);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
