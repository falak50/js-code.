const obj = {
    [Symbol.toPrimitive](hint) {
      if (hint === 'number') {
        return 42;
      }
      if (hint === 'string') {
        return 'forty-two';
      }
      return 'default';
    }
  };
  
  console.log(Number(obj)); // Output: 42
  console.log(String(obj)); // Output: "forty-two"
  console.log(obj + ''); // Output: "default"
  const obj1 = {
    value: 42,
    valueOf() {
        return this.value;
    }
};

console.log(Number(obj1)); // Output: 42
const obj3 = {
    name: 'John',
    age: 30,
    toString() {
        return `${this.name}, ${this.age} years old`;
    }
};

console.log(String(obj3)); // Output: "John, 30 years old"
  