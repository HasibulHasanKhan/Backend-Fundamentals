// syntax : on(event, listen)
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// eventEmitter.on('message', (msg) => {
//   console.log(`Received: ${msg}`);
// });

// eventEmitter.emit('message', 'Hello, Hasib');

// once execute the listener only once :

// eventEmitter.once('init', () => {
//   console.log('Initialization done.');
// });

// eventEmitter.emit('init');
// eventEmitter.emit('init');

// removeListener (event, listener) :

// const callback = (msg) => console.log(msg);

// eventEmitter.on('notify', callback);
// eventEmitter.emit('notify', 'Message one');

// eventEmitter.removeListener('notify', callback);

// creating custom EventEmitter :

// class MyEmiiter extends EventEmitter {
//   triggerEvent() {
//     console.log('Event about to be emitted....');
//     this.emit('customEvent', 'some data');
//   }
// }

// const myEmiiter = new MyEmiiter();

// myEmiiter.on('customEvent', (data) => {
//   console.log(`received ${data}`);
// });

// myEmiiter.triggerEvent();
