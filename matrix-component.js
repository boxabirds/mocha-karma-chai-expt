export class MatrixComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }


    determinant(m) {
        // If the matrix is 1x1, the determinant is the single element in the matrix
        if (m.length == 1) {
          return m[0][0];
        }
        // If the matrix is 2x2, the determinant is ad - bc
        else if (m.length == 2) {
          return m[0][0]*m[1][1] - m[0][1]*m[1][0];
        }
        // If the matrix is larger, we need to recurse
        else {
          let result = 0;
          for (let i = 0; i < m[0].length; i++) {
            // Generate the smaller matrix for the minor
            let smaller = m.slice(1).map(row => row.filter((_, j) => i != j));
            // Add or subtract (based on i) the product of the current element and the determinant of the smaller matrix
            result += Math.pow(-1, i) * m[0][i] * this.determinant(smaller);
          }
          return result;
        }
      }
      
    gcd(a, b) {
        // Euclidean algorithm to find the greatest common divisor
        while (b !== 0) {
            let t = b;
            b = a % b;
            a = t;
        }
        return a;
    }

    
    convertDecimalToFraction(floatValue, tolerance=0.0001) {
      let isNegative = false;
      if(floatValue < 0) {
        isNegative = true;
        floatValue = Math.abs(floatValue);
      }
    
      let numerator = 1;
      let h1 = 0;
      let denominator = 0;
      let h2 = 1;
      let b = floatValue;
    
      do {
        const a = Math.floor(b);
        let aux = numerator;
        numerator = a * numerator + h1;
        h1 = aux;
        aux = denominator;
        denominator = a * denominator + h2;
        h2 = aux;
        b = 1 / (b - a);
      } while (Math.abs(floatValue - numerator / denominator) > floatValue * tolerance);
    
      if(isNegative) {
        numerator = -numerator;
      }    
      return [numerator,denominator]
    }
    
  

  
  
  

      
    generateRandomInvertibleMatrix(n) {
        // we could generate a matrix using compositions but the numbers might end up being very large (hundreds or thousands)
        // so we rely on the fact that "most matrices are invertible" (citation needed)
        // TODO while(true) is not a good idea
      while (true) {
        // Generate a matrix with entries between -9 and 9
        let matrix = Array.from({length: n}, () => Array.from({length: n}, () => Math.floor(Math.random() * 19) - 9));
        // If the determinant is not zero, the matrix is invertible
        if (this.determinant(matrix) !== 0) {
          return matrix;
        }
      }
    }
            
    
}

customElements.define('matrix-component', MatrixComponent);
