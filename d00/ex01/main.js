const readline = require('readline-sync');
const Person = require('./Person');


var userResponse = 1;
var contactIndex = 0;

//MENU
console.log("\n##########################################");
while (userResponse != "EXIT") {
  console.log("ADD")
  console.log("SEARCH")
  console.log("EXIT")
  console.log("########################################## \n");

  userResponse = readline.question("Enter your command: ")
  
  if (userResponse == "ADD") {
    const person = new Person();

    person.id = ++contactIndex;
    person.firstName = readline.question("Enter your first name: ");
    person.lastName = readline.question("Enter your last name: ");

    person.addPerson(person)
    
  }
  else if (userResponse == "SEARCH") {
    const show = new Person();
    
    if (show.persons != '') {
      
      show.showPerson();
    
    } else {
      console.log("\n##########################################");
      console.log("You dont have any parson for search!")
      console.log("########################################## \n");
    }
  } else if (userResponse == "EXIT") {
    break;
  }
}