describe("Weather", function() {
  it("returns sunny weather", function() {
    weather = new Weather();
    spyOn(Math, 'random').and.returnValue(0);
    expect(weather.isStormy()).toEqual(false);
  });

  it("returns stormy weather", function() {
    weather = new Weather();
    spyOn(Math, 'random').and.returnValue(1);
    expect(weather.isStormy()).toEqual(true);
  });

});
