const { EventEmitter } = require('events');

const originalAddListener = EventEmitter.prototype.addListener;

const addListener = function(type) {
  originalAddListener.apply(this, arguments);
  const numListeners = this.listeners(type).length;
  const max = typeof this._maxListeners === 'number' ? this._maxListeners : 10;
  if (max !== 0 && numListeners > max) {
    const error = new Error(
      'Too many listeners of type "' +
        type +
        '" added to EventEmitter. Max is ' +
        max +
        " and we've added " +
        numListeners +
        '.'
    );
    console.error(error);
    throw error;
  }
  return this;
};

module.exports = () => {
  EventEmitter.prototype.addListener = addListener;
  EventEmitter.prototype.on = addListener;
};
