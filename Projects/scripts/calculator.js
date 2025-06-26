    let calculation=localStorage.getItem('cal') || '0';
    showCalculation();
    function updateCalculation(value){
      if(value === '='){
        calculation=eval(calculation);
        console.log(calculation);
      }
      else
      calculation+=value;
      localStorage.setItem('cal',calculation);
      showCalculation();
    }
    function showCalculation(){
      document.querySelector('.calVal').innerHTML = `${calculation}`;
    }