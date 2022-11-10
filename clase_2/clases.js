class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  getFirstname = () => this.firstname;
  getLastname = () => this.lastname;
}
// module.exports = { Person };
module.exports = Person
