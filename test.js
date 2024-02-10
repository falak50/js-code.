const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
}

const member = {
    firstName: "Hege",
    lastName: "Nilsen",
}

let boundFullName = person.fullName.bind(member); // Bind fullName method to member object
let fullName = boundFullName(); // Call the bound function
console.log(fullName); // Output: Hege Nilsen
