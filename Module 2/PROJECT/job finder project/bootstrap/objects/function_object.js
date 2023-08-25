 // Creating an object using constructor function
 function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    console.log(this.make + " " + this.model + " " + this.Car );
  }
    // Creating instances (objects) of the Car class
  const car1 = new Car("Toyota", "Corolla", 2022);
  const car2 = new Car("Honda", "Civic", 2021);
    // Accessing object properties of car1 and car2
  console.log(car1.make);  // Output: Toyota
  console.log(car1.model); // Output: Corolla
  console.log(car1.year);  // Output: 2022
  console.log(car2.make);  // Output: Honda
  console.log(car2.model); // Output: Civic
  console.log(car2.year);  // Output: 2021
  