const { EventEmitter } = require('events');
const test = require('ava');
const maxListenersExceededWarning = require('../');

const eventEmitter = new EventEmitter();

maxListenersExceededWarning();

test('should throw an error when we go over the maxListeners', t => {
  eventEmitter.setMaxListeners(10);
  const err = t.throws(() => {
    for (let i = 0; i <= 10; i++) {
      eventEmitter.on('test', () => {});
    }
  });
  t.regex(err.message, /Too many listeners/);
});

test('should not throw an error if maxListeners is set to 0', t => {
  eventEmitter.setMaxListeners(0);
  t.pass();
});
