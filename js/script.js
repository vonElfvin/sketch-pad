//start the boxes as default
var color = "default";
//start with 10x10 boxes
var boxes = 10;

function printBoxes(amount){
	//clears up the container
	$("#container").empty();
	//calculates the width/height of the boxes inside the container
	var temp = 100/amount + "%"
	//adds the container with e.g. 10x10 boxes
	for(var i=0; i<amount*amount; ++i){
		$("#container").append("<div class='box'></div>");
	}
	//sets the width/height of the new boxes
	$(".box").width(temp);
	$(".box").height(temp);
}
//the document is ready
$(document).ready(function(){
	//print all boxes with the default values given at the top
	printBoxes(boxes);
});

$(document).on("mouseenter", ".box", function(){
	//on hover, check which color setting is present, 
	//change background-color accordingly
	switch(color){
		case "default":
			//default setting is making the boxes black
			$(this).css("background-color", "black");
			break;

		case "random":
			//calculate 3 random values from 0 to 255 to give to the new RGB color
			var rgb1 = Math.floor(Math.random()*256);
			var rgb2 = Math.floor(Math.random()*256);
			var rgb3 = Math.floor(Math.random()*256);
			$(this).css("background-color", "rgb("+rgb1+","+rgb2+","+rgb3+")");
			break;

		case "whiteToBlack":
			//get the opacity of the box and add 0.1 (10 times given in task)
			var opacity = parseFloat($(this).css("opacity"))+0.1;
			//change the opacity to its new value
			$(this).css("opacity", opacity);
			break;
	}
});

$(document).on("click", ".button", function(){
	//claim the value of clicked button
	var value = $(this).val();
	switch(value){
		//if the button for amount of boxes is pressed, ask for how many, print boxes
		//also reset opacity to 1
		case "1":
			color = "default";
			boxes = prompt("How many boxes per row?");
			printBoxes(boxes);
			$(".box").css("opacity", "1");
			break;
		//if the random color is selected, change color to random and print boxes
		//also reset opacity to 1
		case "2":
			color = "random";
			printBoxes(boxes);
			$(".box").css("opacity", "1");
			break;
		//if the "whiteToBlack" button is pressed, print new boxes
		//change the boxes opacity to 0 and color to black
		case "3":
			color =  "whiteToBlack"
			printBoxes(boxes);
			$(".box").css("opacity", "0");
			$(".box").css("background-color", "black");
			break;
	}
});

//if you click the checkbox for Border
$(document).on("click", ".border-check", function(){
	//changes the border-color to black if checked, else it changes it to white again
	if($(this).is(':checked')) {
        $("#container").css("border-color","black");
    } else {
        $("#container").css("border-color", "white");
    }
});