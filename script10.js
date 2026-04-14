function pumGame() {
     let n = +document.getElementById('n').value;
     let result = document.getElementById('result');
     let output = '';
     let num = 1;

     for (let i = 0; i < n; i++) {
          let line = `${num} ${(num + 1)} ${(num + 2)} PUM`;
          output += line + '<br>';
          num += 4;
     }

     result.innerHTML = output;
}