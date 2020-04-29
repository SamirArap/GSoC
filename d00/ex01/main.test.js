const mocha = require('mocha');
const chai = require('chai');
chai.should();
const assert = require('chai').assert;

const person = require('./Person');
const addPerson = require('./Person').addPerson;

describe('Person class addPerson()', function () {
  it('should push without error', function () {
    const persons = {
      id: 1,
      firstName: 'John',
      lastName: 'Doe'
    };

    const result = addPerson(persons);
    result.persons.firstName.should.be.eql('John')
    expect(result).length.should.be.eql(1)
    expect(result).to.be.a('object');
  });
  

});

