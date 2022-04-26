var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
var count = 0;
for(var i = 0; i< officeItems.length; i++) {
    console.log(officeItems[i]);
    if(officeItems[i]=="computer"){
        count++
    }
}
console.log("there are "+count+" computers")

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 
  for(var i = 0; i< peopleWhoWantToSeeMadMaxFuryRoad[i]; i++)
  var pronoun = "";
  if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender == "female"){
      pronoun= "her";
  }
  else{pronoun = "him";
}
  if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >=18){
      console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough, let " + pronoun + "in.");
  }
  else{console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough, don't let " + pronoun + " in")
}

var lights = [2, 5, 435, 4, 3];
var sum = 0;
for(var i=0; i<lights.length; i++){
    sum += lights[i];
}
if(sum%2==1){
    console.log("the light is on");
}
else{
    console.log("the light is off");
}