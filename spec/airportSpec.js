describe("Airport", function() {

  beforeEach(function(){
    weather = new Weather();
    airport = new Airport(weather);
    plane = new Plane();
  });

  it("allows a specific plane to land", function() {
    expect(airport.allowLanding(plane)).toEqual(plane);

  });

  it("shows a plane has landed", function() {
    airport.allowLanding(plane);
    expect(airport.list).toContain(plane);
  });

  it("allow take off of last plane and confirms plane is no longer at airport", function() {
    spyOn(weather, 'isStormy').and.returnValue(false);
    airport.allowLanding(plane);
    airport.takeOff();
    expect(airport.list).not.toContain(plane);

  });

  it("prevents takeoff when weather is stormy", function() {
    spyOn(weather, 'isStormy').and.returnValue(true);
    airport.allowLanding(plane);
    airport.takeOff();
    expect(weather.isStormy).toHaveBeenCalled();
    expect(airport.list).toContain(plane);
  });

  it("has a default capacity of 1", function() {
    expect(airport.capacity).toEqual(1);

  });

  it("prevents further planes landing when the airport is full", function() {
    airport.allowLanding(plane);
    plane2 = new Plane();
    expect( function() {airport.allowLanding(plane2)} ).toThrowError("Airport is full");

  });

  it("should be able to see isFull method", function() {
    airport.allowLanding(plane);
    expect(airport.isFull()).toEqual(true);
  });

});
