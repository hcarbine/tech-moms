document.getElementById("btnOne").onclick = function() {
	var language = "Javascript";
	alert(language + " Rocks!");
};

document.getElementById("btnTwo").onclick = function() {
	var language = "Javascript";
	alert("language" + " Rocks!");
};



document.getElementById("btnThree").onclick = function() {
	var num = 4 + 2;
	alert("No Quotes: " + num);
};

document.getElementById("btnFour").onclick = function() {
	var num = "4" + "2";
	alert("Quotes: " + num);
};



document.getElementById("btnFive").onclick = function() {
	var num = 12 + 6 / 3;
	alert("Order of Operations: " + num);
};

document.getElementById("btnSix").onclick = function() {
	alert("Adding " + 4 + 2);
};

document.getElementById("btnSeven").onclick = function() {
	alert("Adding " + (4 + 2));
};
document.getElementById("btnEight").onclick = function() {
	alert("Modulus " + 17 % 3);
};

document.getElementById("btnNine").onclick = function() {
	alert("Divide " + 17 / 3);
};

document.getElementById("btnTen").onclick = function() {
	alert("ParseInt " + parseInt(17 / 3));
};

document.getElementById("btnEleven").onclick = function() {

	alert("ToFixed " + parseFloat(17 / 3).toFixed(2));
};



document.getElementById("btnTwelve").onclick = function() {
	var num = prompt("Enter a number");
	alert("You entered: " + num);
};

document.getElementById("btnThirteen").onclick = function() {
	var txt = prompt("Enter a number");
	alert("Adding two: " + txt + 2);
};

document.getElementById("btnFourteen").onclick = function() {
	var txt = prompt("Enter a number");
	var num = parseInt(txt);
	alert("Adding two: " + num + 2);
};


document.getElementById("btnFifteen").onclick = function() {
	var txt = prompt("Enter a word");
	var num = txt.length;
	alert("Length: " + num);
};


document.getElementById("btnSixteen").onclick = function() {
	var txt = prompt("Enter a word");
	var letter = txt.charAt(0);
	alert("Char At: " + letter);
};

document.getElementById("btnSeventeen").onclick = function() {
	var txt = prompt("Enter a word");
	var num = prompt("Enter a number less then " + txt.length);
	alert("Char At: " + txt.charAt(num));
};

/********************************************************** 
 * Your turn:  Complete the method to display the last letter of
 * whatever word the user enters in.
 ********************************************************/
document.getElementById("btnEighteen").onclick = function() {
	var txt = prompt("Enter a word");
	var end = txt.length - 1; //Modifiy this code to be the last position in the word
	alert("Last Letter: " + txt.charAt(end)); //Modify this code to print out the character at the last position
};


/********************************************************** 
 * Your turn:  Complete the method to display the last letter of
 * whatever word the user enters in.
 ********************************************************/
document.getElementById("btnNineteen").onclick = function() {
	var num = prompt("Enter a number");
	var ans = num%2;  //Modifiy this code to be the remainder of the number divided by 2
	alert("Remainder: " + ans); 
};


/********************************************************** 
 * Your turn:  Complete the method to display to have the user enter a
 * the current tempature in Fahrenheit.  Have the program report what
 * that tempature is in Celsius.  You may need to look up the equation.
 * 
 * Have the answer display to two decimal places.
 ********************************************************/
document.getElementById("btnTwenty").onclick = function() {
	var far = prompt("Enter Temperature")
	var cel = (5/9)*(far-32)
	alert("celcius: " + cel);
};
document.getElementById("btnTwenty").onclick=function(){
	var dog=prompt("Enter your dogs age");
	var hum=(dog*7)
	alert("Your dog is " +hum +" years old in human years.")
}
//Enter in the amount of change: 67
//2Quarter
//1Dime
//1Nickel
//2Pennies

document.getElementById("btnTwenty").onclick = function() {
	var tot=prompt("Enter your total amount of change");
	var qua=parseInt(tot/25)
	var dim=(tot-(25*qua))
	var tdi=parseInt(dim/10)
	var nic=(tdi-(10*tdi))
	var tni=parseInt(nic/5)
	var pen=(tni-(5*tni))
	var tpi=parseInt(pen/1)

	alert("Quarters: " + dim + "\nDimes: " + nic + "\nNickels: " + pen + "\nPennies: " + tpi);
}