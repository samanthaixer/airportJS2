function Airport(weather) {
  this.list = [];
  this.weather = weather;
  this.capacity = 1;
}



Airport.prototype.allowLanding = function(plane) {

  Airport.prototype.isFull = function() {
    if (this.list.length == this.capacity) return true;
  }

  if(this.isFull() != true) {
    this.list.push(plane);
    return plane;
  }
  else throw new Error("Airport is full");
};

Airport.prototype.takeOff = function() {
  if (this.weather.isStormy() == false) {
    this.list.pop();
  }
  return plane;
}
