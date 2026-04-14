function check() {
     let a = +document.getElementById('a').value;
     let b = +document.getElementById('b').value;
     let result = document.getElementById('result');

     let ans = a === 15 || b === 15 || a + b === 15;
     result.textContent = ans;
     result.style.color = ans ? 'green' : 'red';
}