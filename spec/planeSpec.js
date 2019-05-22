describe("Plane", function(){
  beforeEach(function() {
    plane = new Plane();
    weather = new Weather();
    airport = new Airport(weather);
    spyOn(weather, 'isStormy').and.returnValue(false);
  });

  it("creates a new plane", function(){
    expect(plane.name).toEqual("Fred");
  });

  it("lands a plane at the airport", function(){
    expect(plane.land(airport)).toEqual(true);

  });

  it("makes a plane take off from the airport when sunny", function(){
    plane.land(airport);
    plane.takeOff(airport);
    expect(airport.list).not.toContain(plane);
  });
});
