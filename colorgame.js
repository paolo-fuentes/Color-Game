var numSquares = 6;
var colors = [];
var pickedColor //= pickColor(); //choose the right answer

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    //mode buttons event listeners
    setupModeButtons();
    //square listeners
    setupSquares();
    reset();
}   

function setupModeButtons(){
    for(var i = 0; i < modeButtons.length; i++){ // when swapping between easy and hard
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected"); /* transfers selected to clicked button */
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            
            reset();
            //figure out how many squares to show
            //pick new colors
            // pick new picked color
            //update pages to reflect changes
        });
    }
}

function setupSquares(){
    for (var i = 0; i < squares.length; i++) {
        //add initial colors to squares
        //squares[i].style.backgroundColor = colors[i];
    
        //add click listeners to squares
        squares[i].addEventListener("click", function(){
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to pickedColor
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?"
            }
            else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
    
        });
    }
}

function reset(){
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colors of squares
    colorDisplay.textContent = pickedColor;
    
    for(var i = 0; i < squares.length; i++){
        if (colors[i]){ //if there is a color at the current index (only applies to first three since colors = generateRandomColors(3);)
            squares[i].style.display = "block"; // reshow all buttons when we press hard from easy mode
            squares[i].style.backgroundColor = colors[i]; //set new color to first three squares
        }
        else{
            squares[i].style.display = "none"; //hide last three
        }
    }
    h1.style.backgroundColor = "steelblue";

    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
}

// easyBtn.addEventListener("click", function(){
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;

//     for(var i = 0; i < squares.length; i++){
//         if (colors[i]){ //if there is a color at the current index (only applies to first three since colors = generateRandomColors(3);)
//             squares[i].style.backgroundColor = colors[i]; //set new color to first three squares
//         }
//         else{
//             squares[i].style.display = "none"; //hide last three
//         }
//     }
// });

// hardBtn.addEventListener("click", function(){
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;

//     for(var i = 0; i < squares.length; i++){
//         squares[i].style.backgroundColor = colors[i]; //set new color to first three squares
//             squares[i].style.display = "block"; 
//     }
// });

resetButton.addEventListener("click", function(){
    reset();
})

//colorDisplay.textContent = pickedColor;

// for (var i = 0; i < squares.length; i++) {
//     //add initial colors to squares
//     squares[i].style.backgroundColor = colors[i];

//     //add click listeners to squares
//     squares[i].addEventListener("click", function(){
//         //grab color of clicked square
//         var clickedColor = this.style.backgroundColor;
//         //compare color to pickedColor
//         if(clickedColor === pickedColor){
//             messageDisplay.textContent = "Correct";
//             changeColors(clickedColor);
//             h1.style.backgroundColor = clickedColor;
//             resetButton.textContent = "Play Again?"
//         }
//         else{
//             this.style.backgroundColor = "#232323";
//             messageDisplay.textContent = "Try Again";
//         }

//     });
// }

function changeColors(color){
    //loop thorugh all squares
    for (var i = 0; i < squares.length; i++) {
        //change color to match given color
        squares[i].style.backgroundColor = color;
    }
    
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length) 
    return colors[random];
}

function generateRandomColors(num){
    //make an array 
    var arr = []
    //repeat num times
    for(var i = 0; i <num; i++){
        //get random color and push into array
        arr.push(randomColor());
        
    }
    //return array
    return arr
}

function randomColor(){
    // pick a 'red' from 0 to 255
    //pick a 'green' from 0 to 255
    //pick a 'blue' form 0 to 255
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)
    return "rgb(" + r +", " + g + ", " + b + ")";
}