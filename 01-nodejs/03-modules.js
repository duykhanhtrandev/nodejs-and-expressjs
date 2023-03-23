// ComnonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./04-names');
const sayHi = require('./05-utils');
const data = require('./06-alernative-flavor');
require('./07-mind-grenade');

const { john, peter } = names;

sayHi('susan');
sayHi(john);
sayHi(peter);
