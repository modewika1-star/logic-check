function findZero() {
     let x = [
          +document.getElementById('x1').value,
          +document.getElementById('x2').value,
          +document.getElementById('x3').value,
          +document.getElementById('x4').value,
          +document.getElementById('x5').value
     ];

     let pos = x.indexOf(0) + 1;
     document.getElementById('result').textContent = pos || 'No zero';
}