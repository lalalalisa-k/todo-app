'use strict';

const todoItems = [];
const todoItem = document.getElementById("input-todo-box");
const addButton = document.getElementById('add-button');
const table = document.createElement('table');
const tr = document.createElement('tr');
const td = document.createElement('td');

const addTask = () => {
  addButton.addEventListener('click', () => {
    const todo = todoItem.value;
    if (todo)
    {
      todoItems.push(todo);
      document.getElementById('wrapper').appendChild(table);
      const reset = document.getElementById("input-todo-box");
      reset.value = '';
      showTask();
    } else
    {
      alert("入力して下さい");
    }
  }
    , false);
}

const showTask = () => {

  const tr = document.createElement('tr');
  const td = document.createElement('td');
  const td2 = document.createElement('td');

  let newRow = table.insertRow();
  let newCell = newRow.insertCell();
  let newText = document.createTextNode(todoItems.length);
  newCell.appendChild(newText);

  newCell = newRow.insertCell();
  newText = document.createTextNode(todoItems);
  newCell.appendChild(newText);

  



  for (let i = 0; i < todoItems.length; i++)
  {
    //table.appendChild(tr);
    //tr.appendChild(td);
    //td.textContent = todoItems.length + " "+todoItems[i];

  }
  
  const createProgressButton = () => {
    const progressButton = document.createElement('button');
    progressButton.innerText = '作業中';
  
    //newCell2 = newRow.insertCell();
    //newCell2.appendChild(progressButton); ////
    //td.appendChild(progressButton) //
    newCell.appendChild(progressButton);
  
    progressButton.addEventListener('click', () => {
      if (progressButton.innerText = '作業中')
      {
        progressButton.innerText = '完了';
      } else
      {
        progressButton.innerText = '作業中';
      }
    });
  }

  const createRemoveButton = () => {

    const removeButton = document.createElement('button');
    removeButton.innerText = '削除';
  
    //td.appendChild(tr);
    //td.appendChild(removeButton);

    newCell.appendChild(removeButton);
  
      removeButton.addEventListener('click', () => {
        document.getElementById('wrapper').removeChild(table);
        tr.removeChild(progressButton);
        tr.removeChild(removeButton);
      });
  }

  createProgressButton();
  createRemoveButton();

}





addTask();

