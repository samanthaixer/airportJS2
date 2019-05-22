'use strict';

function Airport(weather) {
  this.list = [];
  this.weather = weather;
  this.capacity = 1;
};

Airport.prototype.allowLanding = function(plane) {

  this.isFull = function() {
    if (this.list.length == this.capacity) return true;
  }

  if(this.weather.isStormy()!= true) {
    if(this.isFull() != true) {
      this.list.push(plane);
      return plane;
    }
    else throw new Error("Airport is full");
  }
  return plane;
};

Airport.prototype.allowTakeOff = function(plane) {
  if (this.weather.isStormy() == false) {
    let index = this.list.indexOf(plane);
    this.list.splice(index, 1);
  }
  return plane;
};
