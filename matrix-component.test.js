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

  describe('convertDecimalToFraction', function() {
    it('converts 1 to [1,0, 1]', function() {
      expect(component.convertDecimalToFraction(1)).to.deep.equal([1,0, 1]);
    });

    it('converts 3.1415926535 to [3, 14159, 100000]', function() {
      expect(component.convertDecimalToFraction(3.1415926535)).to.deep.equal([3, 16, 113]);
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

