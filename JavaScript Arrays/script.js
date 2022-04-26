document.getElementById("btnOne").onclick = function() {
	var language = ["Javascript", "Java", "c++", "HTML", "CSS", "Python"];
	alert("Number of Languages: " + language.length);
};

document.getElementById("btnTwo").onclick = function() {
	var language = ["Javascript", "Java", "c++", "HTML", "CSS", "Python"];
	var input = prompt("Enter a number from 0 to " + language.length);
	alert(language[input] + " Rocks!");
};



document.getElementById("btnThree").onclick = function() {
  var language = ["Javascript", "Java", "c++", "HTML", "CSS", "Python"];
	//Modify the lastPos variable to use the length property 
	//to allow it to print the last item in the list
	var lastPos = 5;  
	alert(language[lastPos] + " is the last language in the list");
};



document.getElementById("btnFour").onclick = function() {
	var language = ["Javascript", "Java", "c++", "HTML", "CSS", "Python"];
	for(var i = 0; i < language.length; i++){
		alert(language[i]);
	}
};





document.getElementById("btnFive").onclick = function() {
	 var language = ["Javascript", "Java", "c++", "HTML", "CSS", "Python"];
	 displayList(language, "divFive");
};

function displayList(lst, location){
	 var str = "<ol>";
	 for(var i = 0; i < lst.length; i++){
		 str += "<li>" + lst[i] + "</li>";
	 }
	 str += "</ol>";
	 document.getElementById(location).innerHTML = str;
}

var newList = [];
document.getElementById("btnSix").onclick = function() {
	var input = prompt("Enter a shopping list item: ");
	newList.push(input);
	displayList(newList, "divSix");
};

document.getElementById("btnSeven").onclick = function() {
	//Create an array of your favorite bands named bands  
	//Use the displayList function to display the list in divSeven
	var bands = ["Nsync", "Backstreet Boys", "98 degrees", "LFO"];
	displayList(bands, "divSeven");
};


document.getElementById("btnEight").onclick = function() {
	var language = ["Javascript", "Java", "c++", "HTML", "CSS", "Python"];
	language.sort();
	language.reverse();
	displayList(language, "divEight");
};

document.getElementById("btnNine").onclick = function() {
	var dieRolls = [];
  var input = prompt("How many times do you want to roll a die?")
	for(var i = 0; i < input; i++){
		var die = Math.floor(Math.random() * 6 + 1);
		dieRolls.push(die);
	}
	displayList(dieRolls, "divNine");
};

document.getElementById("btnTen").onclick = function() {
//Display a list of 10 random numbers with a range of 1-100 by following the steps
//Create an empty numbers array
//Create a random number with a range of 1 to 100
//Add that random number to your array 10 times
//Sort the array from highest to lowest
//Display the array in a div named divTen
var list = [];
for(var i = 0; i< 10; i++){
var num =Math.floor(Math.random()* 100)+1;
list.push(num);
}
list.sort()
displayList(list, "divTen");


};

document.getElementById("btnEleven").onclick = function() {
  var zooAnimal = ["zebra", "tiger", "lion", "giraffe", "peacock", "bear", 
			"elephant", "camel", "monkey", "otter"];
	var input = prompt("Enter an animal");
	var exists = 0;
	for(var i = 0; i < zooAnimal.length; i++){
		if(zooAnimal[i] == input){
			exists++;
		}
	}
	if(exists == 0){
		alert("Sorry, we do not have that animal");
	}
	else{
		alert("Yes, that animal is in our zoo");
	}
};



/********************************************************** 
 * Your turn:  Comlete the code segment to count the number of times
 * the user rolled "doubles" or the same value on both dice.  
 ********************************************************/
document.getElementById("btnTwelve").onclick = function() {
	//Two arrays of 20 random dice rolls
	var dice1 = get20DiceRolls();
	var dice2 = get20DiceRolls();
	//Variable to count the number of times the user rolled "doubles"
	var countDoubles = 0;

	//TODO: Code a search loop here

	alert("Amount of doubles: " + countDoubles)
	document.getElementById("divTwelve").innerHTML = 
			"Dice 1 Rolls: " + dice1.toString() + "<br>" +
			"Dice 2 Rolls: " + dice2.toString();
};

function get20DiceRolls(){
	var rolls = [];
	for(var i = 0; i < 20; i++){
		rolls.push(Math.floor(Math.random() * 6+1));
	}
	return rolls;
}

/********************************************************** 
 * Your turn:  Magic Eight Ball
 * Create an app similar to the Magic Eight Ball.  
 * When the user clicks the button, it will give a random 
 * response.  Create an array of responses.  Then create
 * a random number within the range of your responses
 * Display the random response in a div named divThirteen  
 ********************************************************/

document.getElementById("btnThirteen").onclick = function() {
   
};
