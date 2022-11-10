const occupations = {
  STUDENT: "Student",
  SOFTWARE_DEVELOPER: "Software Developer",
  TEACHER: "Teacher",
};

const personList = [];

const personAttributes = {
  firstname: "Santiago",
  lastname: "Jimenez",
  age: 9,
  hobbies: ["Jugar XBOX", "Jugar Roblox", "Jugar Futbol"],
  occupation: occupations.STUDENT,
};

personList.push(personAttributes);

const person2Attributes = {
  firstname: "Nicoll",
  lastname: "Jimenez",
  age: 16,
  hobbies: ["Leer", "Escuchar Musica", "Viajar"],
  occupation: occupations.STUDENT,
}
personList.push(person2Attributes);

personList.forEach((person) => {
  console.log(`
    Firstname: ${person.firstname}
    Lastname: ${person.lastname}
    Age: ${person.age}
    Hobbies: ${person.hobbies}
    Occupation: ${person.occupation}
    `);
});
