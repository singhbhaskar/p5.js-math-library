describe('Matrix', function () {
  let pInst;

  beforeEach(function () {
    pInst = new p5(function () { });
  });

  afterEach(function () {
    pInst.remove();
  });


  describe('Creating matrices', function () {
    it('Returns a 4x4 identity matrix', function () {
      let a = pInst.createMatrix();
      expect(a.mat4.length).toEqual(16);
      expect(a.mat4[15]).toEqual(1);
    });

    it('Returns a 4x4 matrix', function () {
      let a = pInst.createMatrix(1, 2, 3, 4,
                                 5, 6, 7, 8,
                                 9, 10, 11, 12,
                                13, 14, 15, 16);
      expect(a.mat4.length).toEqual(16);
      expect(a.mat4[15]).toEqual(16);
    });

    it('Returns a 3x3 identity matrix', function () {
      let a = pInst.createMatrix('mat3');
      expect(a.mat3.length).toEqual(9);
      expect(a.mat3[8]).toEqual(1);
    });

    it('Returns a 3x3 matrix', function () {
      let a = pInst.createMatrix(1, 2, 3,
        4, 5, 6,
        7, 8, 9);
      expect(a.mat3.length).toEqual(9);
      expect(a.mat3[8]).toEqual(9);
    });

    it('Throws an Error', function () {
      expect(function () {
        pInst.createMatrix(1, 2, 3, 4, 5, 6);
      }).toThrow();
    });
  });
});
