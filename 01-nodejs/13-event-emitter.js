// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmittier = require('events');

const customEmittier = new EventEmittier();

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

customEmittier.on('response', (fullName, age, id) => {
  console.log(`data recieved user ${fullName} age ${age} years with id: ${id}`);
});

customEmittier.on('response', (fullName) => {
  console.log(`some other logic here`);
});

customEmittier.emit('response', 'Michael Corleone', 35, 1);
