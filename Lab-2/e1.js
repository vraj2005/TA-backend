class Student {
fullname = this.name;

  constructor(name, roll) {
    this.name = name;
    this.roll = roll;
  }
  // display() {
  //   return this.name + " (Roll: " + this.roll + ")";
  // }
}

const s = new Student("Vraj", 57);
console.log(s.fullname);