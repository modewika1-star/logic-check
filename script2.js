function checkSquare() {
     let n = +document.getElementById('num').value;
     let result = document.getElementById('result');

     let root = Math.sqrt(n);
     let ans = Number.isInteger(root);

     result.textContent = ans ? 'Perfect Square ✅' : 'Not Perfect Square ❌';
     result.style.color = ans ? 'green' : 'red';
}