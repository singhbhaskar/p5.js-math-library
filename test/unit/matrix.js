let expect = chai.expect;

describe('createMatrix()', function () {
  let pInst;

  beforeEach(function () {
    pInst = new p5(function () {});
  });

  afterEach(function () {
    pInst.remove();
  });

  it('Creates a p5.Matrix object', function () {
    describe('Default', function () {
      it('Returns a 4x4 identity matrix', function () {
        let a = pInst.createMatrix();
        expect(a).to.have.property('mat4').with.lengthOf(16);
        expect(a.mat4[15]).to.equal(1);
      });
    });

    describe('4x4', function () {
      it('Returns a 4x4 matrix', function () {
        let a = pInst.createMatrix( 1,  2,  3,  4,
                                    5,  6,  7,  8,
                                    9, 10, 11, 12,
                                   13, 14, 15, 16);
        expect(a).to.have.property('mat4').with.lengthOf(16);
        expect(a.mat4[15]).to.equal(16);
      });
    });

    describe('3x3 default', function () {
      it('Returns a 3x3 identity matrix', function () {
        let a = pInst.createMatrix('mat3');
        expect(a).to.have.property('mat3').with.lengthOf(9);
        expect(a.mat3[8]).to.equal(1);
      });
    });

    describe('3x3', function () {
      it('Returns a 3x3 matrix', function () {
        let a = pInst.createMatrix(1, 2, 3,
                                   4, 5, 6,
                                   7, 8, 9);
        expect(a).to.have.property('mat3').with.lengthOf(9);
        expect(a.mat3[8]).to.equal(9);
      });
    });

    describe('Bad arguments', function () {
      it('Throws an Error', function () {
        expect(function () {
          pInst.createMatrix(1, 2, 3, 4, 5, 6);
        }).to.throw(Error);
      });
    });

  });
});
