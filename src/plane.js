'use strict';

function Plane() {
  this.name = "Fred";
  this.landed = false;
}

Plane.prototype.land = function(airport) {
  airport.allowLanding(this);
  return this.landed = true;
}

Plane.prototype.takeOff = function(airport) {
  airport.allowTakeOff(this);
  return this.landed = false;
}
