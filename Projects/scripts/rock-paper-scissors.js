    let count = JSON.parse(localStorage.getItem('score')) || { // Can be used as default operator value that is true will be taken
      Wins:0, 
      Loses:0, 
      Ties:0
    };
    /*
    if(!count)
    count ={
      Wins:0,
      Loses:0,
      Ties:0
    }; Same as above default operator
    */
    updateScore();
    function playGame(pick){
      const move = pickMove();
      let state = ''
      if(pick === 'Scissors')
      {
        if(move === 'Rock'){
          state = 'You lost.';
          count.Loses+=1;
        }
        else if(move === 'Paper'){
          state = 'You Won.';
          count.Wins+=1;
        }
        else{
          state = 'Tie.';
          count.Ties+=1;
        }
      }
      else if(pick === 'Paper')
      {
        if(move === 'Rock'){
          state = 'You Won.';
          count.Wins+=1;
        }
        else if(move === 'Paper'){
          state = 'Tie.';
          count.Ties+=1;
        }
        else{
          state = 'You lost.';
          count.Loses+=1;
        }
      }
      else{
        if(move === 'Rock'){
          state = 'Tie.';
          count.Ties+=1;
        }
        else if(move === 'Paper'){
          state = 'You lost.';
          count.Loses+=1;
        }
        else{
          state = 'You Won.';
          count.Wins+=1;
        }
      }
      localStorage.setItem('score',JSON.stringify(count));
      /*alert(`You picked ${pick}. System picked ${move}, ${state}.\nWins:${count.Wins}, Loses:${count.Loses}, Ties:${count.Ties}`);*/ //can be used as alert try this too
      updateScore();
      document.querySelector('.js-res')
        .innerHTML = `${state}`;
      document.querySelector('.pick')
        .innerHTML = `You
    <img src="images/${pick}-emoji.png" class="img">
    <img src="images/${move}-emoji.png" class="img">
    Computer`;
    }
    function pickMove(){
      const randomNumber = Math.random();
      let move = ''
      if(randomNumber >=0 && randomNumber < 1/3)
      move = 'Rock';
      else if(randomNumber >=1/3 && randomNumber < 2/3)
      move = 'Paper';
      else
      move = 'Scissors';
      return move;
    }
    function updateScore(){
      document.querySelector('.score')
        .innerHTML = `Wins:${count.Wins}, Losses:${count.Loses}, Ties:${count.Ties}`;
    }