describe('Complex Numbers', function () {
  let pInst;

  beforeEach(function () {
    pInst = new p5(function () { });
  });

  afterEach(function () {
    pInst.remove();
  });

  describe('Creating complex numbers', function () {
    it('Returns a complex number 0 + 0i', function () {
      let z = pInst.complex();
      expect(z.a).toEqual(0);
      expect(z.a).toEqual(0);
      expect(z.toString()).toEqual("0 + 0i");
    });

    it('Returns the unit vector 1 + 0i', function () {
      let i = pInst.complex().getUnitX();
      expect(i.a).toEqual(1);
      expect(i.b).toEqual(0);
    });

    it('Returns the unit vector 0 + 1i', function () {
      let j = pInst.complex().getUnitY();
      expect(j.a).toEqual(0);
      expect(j.b).toEqual(1);
    });

    it('Returns the complex number 3 + 6i', function () {
      let z = pInst.complex(3, 6);
      expect(z.toString()).toEqual("3 + 6i");
    });
  });

  describe('Operations on complex numbers', function() {
    it('Returns the modulus of 3 + 4i, which is 5', function() {
      let z = pInst.complex(3, 4);
      expect(z.modulus()).toEqual(5);
    });

    it('Returns the phase angle of 1 + 1i, which is π/4 radians', function() {
      let z = pInst.complex(1, 1);
      expect(z.phaseAngle()).toEqual(Math.PI/4);
    });

    it('Returns the conjugate of 3 + 5i, which is 3 - 5i', function() {
      let z = pInst.complex(3, 5);
      let c = z.conjugate();
      expect(c.a).toEqual(3);
      expect(c.b).toEqual(-5);
      expect(c.toString()).toEqual("3 - 5i");
    });

    it('Returns the sum of 3 + 2i and 6 + 10i, which is 9 + 12i', function() {
      let z = pInst.complex(3, 2);
      let z1 = pInst.complex(6, 10);
      let c = pInst.complex().add(z, z1);
      expect(c.a).toEqual(9);
      expect(c.b).toEqual(12);
      expect(c.toString()).toEqual("9 + 12i");
    });

    it('Returns the sum of 3 + 2i and 6 + 10i, which is -3 - 8i', function() {
      let z = pInst.complex(3, 2);
      let z1 = pInst.complex(6, 10);
      let c = pInst.complex().subtract(z, z1);
      expect(c.a).toEqual(-3);
      expect(c.b).toEqual(-8);
      expect(c.toString()).toEqual("-3 - 8i");
    });
  });
});
