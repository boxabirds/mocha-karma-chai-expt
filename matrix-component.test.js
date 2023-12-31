import { expect } from 'chai';
import { MatrixComponent } from './matrix-component';
describe('MatrixComponent', function() {
    it('can be instantiated', function() {
        const component = new MatrixComponent();
        expect(component).to.be.instanceOf(MatrixComponent);
    });
});
describe('MatrixComponent', function() {
  let component;

  beforeEach(() => {
    component = new MatrixComponent();
  });

  describe('hasAtLeastOneNonZeroOnDiagonal', function() {
    it('returns true when at least one non-zero element is on the diagonal', function() {
      component.matrix = [[0, 2], [3, 4]];
      expect(component.hasAtLeastOneNonZeroOnDiagonal()).to.be.true;
    });

    it('returns false when all diagonal elements are zero', function() {
      component.matrix = [[0, 2], [3, 0]];
      expect(component.hasAtLeastOneNonZeroOnDiagonal()).to.be.false;
    });
  });

  describe('firstPivotNormalizedTo1', function() {
    it('returns true when the first non-zero element of the first row is 1', function() {
      component.matrix = [[0, 1, 2], [0, 3, 4]];
      expect(component.firstPivotNormalizedTo1()).to.be.true;
    });

    it('returns false when the first non-zero element of the first row is not 1', function() {
      component.matrix = [[0, 2, 3], [4, 5, 6]];
      expect(component.firstPivotNormalizedTo1()).to.be.false;
    });
  });

  describe('isUpperTriangularForm', function() {
    it('returns true for an upper triangular matrix', function() {
      component.matrix = [[1, 2, 3], [0, 4, 5], [0, 0, 6]];
      expect(component.isUpperTriangularForm()).to.be.true;
    });

    it('returns false for a non-upper triangular matrix', function() {
      component.matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
      expect(component.isUpperTriangularForm()).to.be.false;
    });
  });

  describe('allDiagonalsAre1', function() {
    it('returns true when all diagonal elements are 1', function() {
      component.matrix = [[1, 0], [0, 1]];
      expect(component.allDiagonalsAre1()).to.be.true;
    });

    it('returns false when any diagonal element is not 1', function() {
      component.matrix = [[1, 0], [0, 2]];
      expect(component.allDiagonalsAre1()).to.be.false;
    });
  });

  describe('isInRowEchelonForm', function() {
    it('returns true for a matrix in row echelon form', function() {
      component.matrix = [[1, 2, 3], [0, 4, 5], [0, 0, 6]];
      expect(component.isInRowEchelonForm()).to.be.true;
    });

    it('returns false for a matrix not in row echelon form', function() {
      component.matrix = [[0, 1, 2], [1, 2, 3], [0, 4, 5]];
      expect(component.isInRowEchelonForm()).to.be.false;
    });
  });

  describe('isIdentity', function() {
    it('returns true for an identity matrix', function() {
      component.matrix = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
      expect(component.isIdentity()).to.be.true;
    });

    it('returns false for a non-identity matrix', function() {
      component.matrix = [[1, 0, 0], [0, 2, 0], [0, 0, 1]];
      expect(component.isIdentity()).to.be.false; 
    });


    it('returns false for a matrix with non-zero off-diagonal elements', function() {
      component.matrix = [[1, 0, 0], [0, 1, 0], [1, 0, 1]];
      expect(component.isIdentity()).to.be.false;
    });
  });
  
  describe('isInReducedRowEchelonForm', function() {
    it('returns true for a matrix in reduced row echelon form', function() {
      component.matrix = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
      expect(component.isInReducedRowEchelonForm()).to.be.true;
    });

    it('returns false for a matrix not in reduced row echelon form', function() {
      component.matrix = [[1, 2, 3], [0, 4, 5], [0, 0, 6]];
      expect(component.isInReducedRowEchelonForm()).to.be.false;
    });
  });  



  describe('convertDecimalToFraction', function() {
    it('converts 1 to [1,0, 1]', function() {
      expect(component.convertDecimalToFraction(1)).to.deep.equal([1,0, 1]);
    });

    it('converts 3.1415926535 to [3, 16, 113]', function() {
      expect(component.convertDecimalToFraction(3.1415926535)).to.deep.equal([3, 16, 113]);
    });

    it('converts -0.9999999999999999 to [-1, 0, 1]', function() {
      expect(component.convertDecimalToFraction(-0.9999999999999999)).to.deep.equal([-1, 0, 1]);
    });

    it('converts 0.9999999999999999 to [1, 0, 1]', function() {
      expect(component.convertDecimalToFraction(0.9999999999999999)).to.deep.equal([1, 0, 1]);
    });
    it('converts 0.0000000000000001 to [0, 0, 1]', function() {
      expect(component.convertDecimalToFraction(0.0000000000000001)).to.deep.equal([0, 0, 1]);
    });

    it('converts 10.9999999999999999 to [10, 0, 1]', function() {
      expect(component.convertDecimalToFraction(10.9999999999999999)).to.deep.equal([11, 0, 1]);
    });

    it('converts -0.1 to [0, -1, 10]', function() {
      expect(component.convertDecimalToFraction(-0.1)).to.deep.equal([0, -1, 10]);
    });

    it('converts -0.4 to [0, -2, 5]', function() {
      expect(component.convertDecimalToFraction(-0.4)).to.deep.equal([0, -2, 5]);
    });

    it('converts 0.3333 to [0, 1, 3]', function() {
      expect(component.convertDecimalToFraction(0.33333)).to.deep.equal([0, 1, 3]);
    });

    it('converts 0.09090909 to [0, 1, 11]', function() {
      expect(component.convertDecimalToFraction(0.09090909)).to.deep.equal([0, 1, 11]);
    });

    it('converts 0.14285714285 to [0, 1, 7]', function() {
      expect(component.convertDecimalToFraction(0.14285714285)).to.deep.equal([0, 1, 7]);
    });

    it('converts 0.666666 to [0, 2, 3]', function() {
      expect(component.convertDecimalToFraction(0.666666)).to.deep.equal([0, 2, 3]);
    });

    it('converts 0.08333333 to [0, 1, 12]', function() {
      expect(component.convertDecimalToFraction(0.08333333)).to.deep.equal([0, 1, 12]);
    });

    it('converts 0.16666 to [0, 1, 6]', function() {
      expect(component.convertDecimalToFraction(0.16666)).to.deep.equal([0, 1, 6]);
    });

    it('converts 0.076923076923076923 to [0, 1, 13]', function() {
      expect(component.convertDecimalToFraction(0.076923076923076923)).to.deep.equal([0, 1, 13]);
    });

    it('converts 0.0714285714285714285 to [0, 1, 14]', function() {
      expect(component.convertDecimalToFraction(0.0714285714285714285)).to.deep.equal([0, 1, 14]);
    });

    it('converts 0.0666666 to [0, 1, 15]', function() {
      expect(component.convertDecimalToFraction(0.0666666)).to.deep.equal([0, 1, 15]);
    });

    it('converts 0.001 to [0, 1, 100]', function() {
      expect(component.convertDecimalToFraction(0.01)).to.deep.equal([0, 1, 100]);
    });

    it('converts 0.0001 to [0, 1, 1000]', function() {
      expect(component.convertDecimalToFraction(0.001)).to.deep.equal([0, 1, 1000]);
    });

    it('converts 0.125 to [0, 1, 8]', function() {
      expect(component.convertDecimalToFraction(0.125)).to.deep.equal([0, 1, 8]);
    });

    // Add more tests as per your examples
  });
});

