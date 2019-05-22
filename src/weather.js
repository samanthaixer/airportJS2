'use strict';

// NOTE: This is bad practice - need to understand more about modules
const _CHANCE_OF_STORM = 0.8;

function Weather() {

};

Weather.prototype.isStormy = function() {
  let generator = Math.random();
  if(generator <= _CHANCE_OF_STORM) return false;
  return true;
};
