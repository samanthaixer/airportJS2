function Weather() {

};

Weather.prototype.isStormy = function() {
  let generator = Math.random();
  console.log(generator);
  if(generator == 0) return false;
  return true;
};
