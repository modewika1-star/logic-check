function printDivisors() {
     let n = +document.getElementById('n').value;
     let result = document.getElementById('result');
     let divisors = [];

     for (let i = 1; i <= n; i++) {
          if (n % i === 0) {
               divisors.push(i);
          }
     }

     result.textContent = divisors.join(' ');
}