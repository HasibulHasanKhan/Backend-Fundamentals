const EventEmitter = require('event');

class School extends EventEmitter {
  startPeriod() {
    console.log('Class started');

    setTimeout(() => {
      this.emit(
        'bellRing',
        {
          period: 'first',
          text: 'period ended',
        },
        2000
      );
    });
  }
}

MediaSourceHandle.exports = School;
