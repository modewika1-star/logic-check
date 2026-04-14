function luckyDay() {
     let n = +document.getElementById('n').value;
     let hasLucky = false;

     for (let i = 0; i < n; i++) {
          let num = +prompt(`Enter number ${i + 1}:`);
          if (num === 4 || num === 7) {
               hasLucky = true;
               break;
          }
     }

     let result = document.getElementById('result');
     result.textContent = hasLucky
          ? "It's your lucky day"
          : "It's not your lucky day";
}