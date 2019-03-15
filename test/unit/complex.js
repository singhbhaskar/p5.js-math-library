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

    describe('Creating j vector', function () {
      it('Returns the unit vector 0 + 1i', function () {
        let j = pInst.complex().getUnitY();
        expect(j.a).to.equal(0);
        expect(j.b).to.equal(1);
      });
    });

    describe('Creating a complex number with given a and b', function () {
      it('Returns the complex number 3 + 6i', function () {
        let z = pInst.complex(3, 6);
        expect(z.toString()).to.equal("3 + 6i");
      });
    });
  });

  it('Operations on complex numbers', function() {

    describe('Modulus of a complex number', function() {
      it('Returns the modulus of 3 + 4i, which is 5', function() {
        let z = pInst.complex(3, 4); 
        expect(z.modulus()).to.equal(5); 
      }); 
    });

    describe('Phase angle of a complex number', function() {
      it('Returns the phase angle of 1 + 1i, which is π/4 radians', function() {
        let z = pInst.complex(1, 1); 
        expect(z.phaseAngle()).to.equal(Math.PI/4); 
      }); 
    });

    describe('Conjugate of a complex number', function() {
      it('Returns the conjugate of 3 + 5i, which is 3 - 5i', function() {
        let z = pInst.complex(3, 5); 
        let c = z.conjugate(); 
        expect(c.a).to.equal(3); 
        expect(c.b).to.equal(-5); 
        expect(c.toString()).to.equal("3 - 5i"); 
      }); 
    });

    describe('Adding two complex numbers', function() {
      it('Returns the sum of 3 + 2i and 6 + 10i, which is 9 + 12i', function() {
        let z = pInst.complex(3, 2); 
        let z1 = pInst.complex(6, 10); 
        let c = pInst.complex().add(z, z1); 
        expect(c.a).to.equal(9); 
        expect(c.b).to.equal(12); 
        expect(c.toString()).to.equal("9 + 12i"); 
      }); 
    });

    describe('Subtracting two complex numbers', function() {
      it('Returns the sum of 3 + 2i and 6 + 10i, which is -3 - 8i', function() {
        let z = pInst.complex(3, 2); 
        let z1 = pInst.complex(6, 10); 
        let c = pInst.complex().subtract(z, z1); 
        expect(c.a).to.equal(-3); 
        expect(c.b).to.equal(-8); 
        expect(c.toString()).to.equal("-3 - 8i"); 
      }); 
    });
  });

});
