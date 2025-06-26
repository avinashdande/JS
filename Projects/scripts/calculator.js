    let calculation=localStorage.getItem('cal') || '0';
    showCalculation();
    function updateCalculation(value){
      if(value === '='){
        calculation=eval(calculation);
        console.log(calculation);
      }
      else{
        if(calculation === '0')
        calculation = value;                  // It makes the zero disappear and dosen't work as 025 will be considered as octal value, leave it if you dont understand
        else
        calculation+=value;
      }
      localStorage.setItem('cal',calculation);
      showCalculation();
    }
    function showCalculation(){
      document.querySelector('.calVal').innerHTML = `${calculation}`;
    }