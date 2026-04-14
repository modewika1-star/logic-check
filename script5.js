function sumOdds() {
     let start = +document.getElementById('start').value;
     let end = +document.getElementById('end').value;
     let result = document.getElementById('result');

     let sum = 0;
     for (let i = start + 1; i < end; i++) {
          if (i % 2 === 1) sum += i;
     }

     result.textContent = sum;
}
