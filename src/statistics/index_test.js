describe('Statistics', function () {
  let pInst;

  beforeEach(function () {
    pInst = new p5(function () { });
  });

  afterEach(function () {
    pInst.remove();
  });


  describe('Finding mean of an array of numbers', function () {
    it('Returns the mean of [3, 1, 4, 1, 5, 9]', function () {
      let name = pInst.statistics();
      const digits = [3, 1, 4, 1, 5, 9]; 
      let avg = name.mean(digits);
      expect(avg).toEqual(23/6); 
    });
  });
});
