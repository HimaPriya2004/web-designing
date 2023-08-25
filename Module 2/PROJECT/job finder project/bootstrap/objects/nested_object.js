// Creating a nested object representing a person and their address
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zipCode: "10001"},
    occupation: "Engineer"};
    // Accessing properties of the main object
  console.log(person.firstName); // Output: John
  console.log(person.lastName);  // Output: Doe
  // Accessing properties of the nested object
  console.log(person.address.street);   // Output: 123 Main Street
  console.log(person.address.city);     // Output: New York
  console.log(person.address.state);    // Output: NY
  console.log(person.address.zipCode);  // Output: 10001
  