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
    it('converts 1 to [1, 1]', function() {
      expect(component.convertDecimalToFraction(1)).to.deep.equal([1, 1]);
    });

    it('converts -0.1 to [-1, 10]', function() {
      expect(component.convertDecimalToFraction(-0.1)).to.deep.equal([-1, 10]);
    });

    it('converts -0.4 to [-2, 5]', function() {
      expect(component.convertDecimalToFraction(-0.4)).to.deep.equal([-2, 5]);
    });

    it('converts 0.3333 to [1, 3]', function() {
      expect(component.convertDecimalToFraction(0.33333)).to.deep.equal([1, 3]);
    });

    it('converts 0.125 to [1, 8]', function() {
      expect(component.convertDecimalToFraction(0.125)).to.deep.equal([1, 8]);
    });

    // Add more tests as per your examples
  });
});

