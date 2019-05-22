describe("Airport", function() {

  beforeEach(function(){
    weather = new Weather();
    airport = new Airport(weather);
    plane = new Plane();
    spyOn(weather, 'isStormy').and.returnValue(false);
  });

  it("allows a specific plane to land", function() {
    expect(airport.allowLanding(plane)).toEqual(plane);

  });

  it("shows a plane has landed", function() {
    airport.allowLanding(plane);
    expect(airport.list).toContain(plane);
  });

  it("allow take off of any plane and confirms plane is no longer at airport", function() {
    airport.allowLanding(plane);
    airport.allowTakeOff(plane);
    expect(airport.list).not.toContain(plane);

  });

  it("prevents takeoff when weather is stormy", function() {
    airport.allowLanding(plane);
    // spyOn(weather, 'isStormy').and.returnValue(true);
    weather.isStormy.and.returnValue(true);
    airport.allowTakeOff(plane);
    expect(weather.isStormy).toHaveBeenCalled();
    expect(airport.list).toContain(plane);
  });

  it("prevents landing when the weather is stormy", function(){
    weather.isStormy.and.returnValue(true);
    airport.allowLanding(plane);
    expect(weather.isStormy).toHaveBeenCalled();
    expect(airport.list).not.toContain(plane);
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
