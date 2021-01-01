'use strict';

let todoItems = [];
let todoItem = document.getElementById("input-todo-box");
let add = document.getElementById('add-button');

add.addEventListener('click', () => {

  const todo = todoItem.value;

  if (!todoItem.value)
  {
    alert("入力して下さい");
  } else
  {
    var table = document.createElement('table');
    var tr = document.createElement('tr');
    var th = document.createElement('th');
    var td = document.createElement('td');

    th.textContent = (todoItems.length);
    tr.appendChild(th);
    td.textContent = todoItem.value;
    tr.appendChild(td);
    table.appendChild(tr);
    document.getElementById('wrapper').appendChild(table);

    let todolist = document.getElementById('todo-list');
    todoItems.push(todo);

    const progressButton = document.createElement('button');
    progressButton.innerText = '作業中';
    tr.appendChild(progressButton);

    progressButton.addEventListener('click', () => {
      if (progressButton.innerText = '作業中')
      {
        progressButton.innerText = '完了';
      } else
      {
        progressButton.innerText = '作業中';
      }
    });

    const removeButton = document.createElement('button');
    removeButton.innerText = '削除';
    tr.appendChild(removeButton);
    removeButton.addEventListener('click', () => {
      document.getElementById('wrapper').removeChild(table);
      tr.removeChild(progressButton);
      tr.removeChild(removeButton);
    });
    const reset = document.getElementById("input-todo-box");
    reset.value = '';
  }


}
, false);
