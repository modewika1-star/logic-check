function finalGrade() {
     let exam = +document.getElementById('exam').value;
     let projects = +document.getElementById('projects').value;
     let result = document.getElementById('result');

     if (exam > 90 || projects > 10) {
          result.textContent = 100;
     } else if (exam > 75 && projects >= 5) {
          result.textContent = 90;
     } else if (exam > 50 && projects >= 2) {
          result.textContent = 75;
     } else {
          result.textContent = 0;
     }
}