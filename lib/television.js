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

  togglePower: function () {
     if (this.power === 'Off') {
       this.power = 'On';
     } else {
       this.power = 'Off';
     }
     return this.power;
  },
  increaseVolume: function () {},
  decreaseVolume: function () {},
  changeInput: function () {},
};

module.exports = television;
