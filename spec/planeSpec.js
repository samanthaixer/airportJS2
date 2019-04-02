describe("Plane", function(){
  it("creates a new plane", function(){
    plane = new Plane();
    expect(plane.name).toEqual("Fred");
  });
});
