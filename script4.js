function toggleCase() {
     let char = document.getElementById('letter').value;
     let result = document.getElementById('result');

     if (char.length !== 1) {
          result.textContent = 'Single letter only';
          return;
     }

     result.textContent = char.toUpperCase() === char
          ? char.toLowerCase()
          : char.toUpperCase();
}