//want it to turn on and off
//increase or decrease volume
//increase of decrease channel
//yo it's ok to throw in empty brackets in the beginning to get your thoughts out
//pseudocode is your friend
'use strict';

const television = {
  make: 'JC Penney',
  model: '1982 Monitor',
  mfgYear: '1982',
  power: 'Off',
  volume: 0,
  channel: 2,

  togglePower: function () {
     if (this.power === 'Off') {
       this.power = 'On';
     } else {
       this.power = 'Off';
     }
     return this.power;
  },
  increaseVolume: function () {
    return ++this.volume;
  },
  decreaseVolume: function () {
    return --this.volume;
  },
  increaseChannel: function () {
    return ++this.channel;
  },
  decreaseChannel: function () {
    return --this.channel;
  },
  changeInput: function () {},
};

module.exports = television;
