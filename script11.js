function productSign() {
     let a = +document.getElementById('a').value;
     let b = +document.getElementById('b').value;
     let result = document.getElementById('result');

     if (a === 0 || b === 0) {
          result.textContent = 'zero';
     } else if (a > 0 === b > 0) {
          result.textContent = 'positive';
     } else {
          result.textContent = 'negative';
     }
}