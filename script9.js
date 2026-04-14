function countStats() {
     let n = +document.getElementById('n').value;
     let sum = 0;
     let odd = 0;
     let even = 0;

     for (let i = 0; i < n; i++) {
          let num = +prompt(`Enter number ${i + 1}:`);
          sum += num;
          if (num % 2 === 0) even++;
          else odd++;
     }

     document.getElementById('result').innerHTML =
          `Sum: ${sum}<br>Odd: ${odd}<br>Even: ${even}`;
}