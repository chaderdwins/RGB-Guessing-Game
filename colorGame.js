var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square")
var pickedColor = pickColor();
var rbgQuiz = document.querySelector("#RBG")
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset")
var easyBtn = document.querySelector("#easyBtn")
var hardBtn = document.querySelector("#hardBtn")


easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	rbgQuiz.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if (colors[i]){
			squares[i].style.background = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	rbgQuiz.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
	}
});

resetButton.addEventListener("click", function(){
	//pick new colors
	colors = generateRandomColors(numSquares);
	//pick winning color
	pickedColor = pickColor();
	rbgQuiz.textContent = pickedColor;
	//change square colors
	for (var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i]
	}
	//change h1 background
	h1.style.backgroundColor = "cadetblue";
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";

});

rbgQuiz.textContent = pickedColor;

for (var i = 0; i < squares.length; i++){
	//add initial colors
	squares[i].style.backgroundColor = colors[i]
	//add click listeners
	squares[i].addEventListener("click", function(){
	//get color of picked square and compare it to picked color
	var clickedColor = this.style.backgroundColor
	if (clickedColor === pickedColor){
		messageDisplay.textContent = "Correct!";
		changeColors(clickedColor);
		h1.style.backgroundColor = clickedColor;
		resetButton.textContent = "Play Again?"
	} else {
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent = "Try Again";
	}
	});
};

function changeColors(color){
	for (var i = 0; i < squares.length; i++){
	//add initial colors
	squares[i].style.backgroundColor = color;
}
};

function pickColor(){
	var random = Math.floor(Math.random()*colors.length)
	return colors[random];
};

function generateRandomColors(num){
	//make an array
	var arr = [];
	//add numb colors to the array
	for(var i = 0; i <num; i++){
		arr.push(randomColor());
	}
	//return the array
	return arr;
}

function randomColor(){
	//pick red
	var r = Math.floor(Math.random()*256)
	//pick green
	var g = Math.floor(Math.random()*256)
	//pick blue
	var b = Math.floor(Math.random()*256)

	return "rgb(" + r + ", " + g + ", " + b +")";
}