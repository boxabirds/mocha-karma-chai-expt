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

    
    convertDecimalToFraction(decimal) {
        const decimalStr = decimal.toString();
        // Check if it's a repeating decimal
        const match = decimalStr.match(/(-?\d*)\.(\d*?)(\d+)\2+/);
        let numerator, denominator;
    
        if (match) {
            // Repeating decimal
            const [_, wholePart, nonRepeating, repeating] = match;
            const lenNonRepeating = nonRepeating.length;
            const lenRepeating = repeating.length;
    
            // Create the fraction
            numerator = parseInt(wholePart + nonRepeating + repeating) - parseInt(wholePart + nonRepeating);
            denominator = Math.pow(10, lenNonRepeating + lenRepeating) - Math.pow(10, lenNonRepeating);
        } else {
            // Finite decimal
            if (decimalStr.includes('.')) {
                const parts = decimalStr.split('.');
                const wholePart = parts[0];
                const fractionalPart = parts[1];
                numerator = parseInt(wholePart) * Math.pow(10, fractionalPart.length) + parseInt(fractionalPart);
                denominator = Math.pow(10, fractionalPart.length);
            } else {
                // It's an integer
                return [decimal, 1];
            }
        }
    
        // Simplify the fraction
        const divisor = this.gcd(numerator, denominator);
        numerator /= divisor;
        denominator /= divisor;
    
        return [numerator, denominator];
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
