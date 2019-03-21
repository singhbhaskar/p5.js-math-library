describe('Trigonometry', function () {
  let pInst;

  beforeEach(function () {
    pInst = new p5(function () { });
  });

  afterEach(function () {
    pInst.remove();
  });


  describe('It exists', function () {
    it('Returns the module name', function () {
      let name = pInst.trigonometry();
      expect(name).toEqual('trigonometry');
    });
  });
});
