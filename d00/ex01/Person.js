const persons = [];

class Person {
// module.exports = Person = class {
  // constructor() {
  // }

  addPerson(person) {
    persons.push(person);
    console.log(persons);
  }

  showPerson() {
    console.table(persons)
  }

}

module.exports = Person;
module.exports.persons = persons;