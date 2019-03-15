describe('Complex numbers', function () {
  let pInst;

  beforeEach(function () {
    pInst = new p5(function () { });
  });

  afterEach(function () {
    pInst.remove();
  });

  it('Creates a complex number', function () {
    describe('Default', function () {
      it('Returns a complex number 0 + 0i', function () {
        let z = pInst.complex();
        expect(z.a).to.equal(0);
        expect(z.a).to.equal(0);
        expect(z.toString()).to.equal("0 + 0i");
      });
    });

    describe('Creating i vector', function () {
      it('Returns the unit vector 1 + 0i', function () {
        let i = pInst.complex().getUnitX();
        expect(i.a).to.equal(1);
        expect(i.b).to.equal(0);
      });
    });

    describe('Creating a complex number with given a and b', function () {
      it('Returns the complex number 3 + 6i', function () {
        let z = pInst.complex(3, 6);
        expect(z.toString()).to.equal("3 + 6i");
      });
    });
  });
});
