const user = {
  name: 'Hasib',
  sayHello: function () {
    return `Hello I'm ${this.name}`;
  },
  sayGoodbye: function () {
    return `Goodbye from ${this.name}`;
  },
};

let methodName = 'sayHello';
console.log(user[methodName]());
console.log(user['sayGoodbye']());
