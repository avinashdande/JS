    let todoArr = JSON.parse(localStorage.getItem('todo')) || [];
    function check(){
      if(event.key === 'Enter')
      addWork();
    }
    function addWork(){
      let arrElement;
      let todoList = '';
      let inputElement = document.querySelector('.input');
      let name = inputElement.value
      let dueElement = document.querySelector('.js-date');
      let dueDate = dueElement.value;
      if(name !== '')
      todoArr.push({name, dueDate}); //Actually it should be name: name But if both property and value are same then we can use this format
      for(let i = 0;i < todoArr.length;i++){
        arrElement = todoArr[i];
        todoList += `<div>${arrElement.name}</div>
            <div>${arrElement.dueDate}</div> 
          <button onclick="todoArr.splice(${i}, 1);addWork();" class="delete-button">Delete</button>`;
      }
      document.querySelector('.Works').innerHTML = `${todoList}`;
      localStorage.setItem('todo',JSON.stringify(todoArr));
      inputElement.value = '';
    }
    addWork();