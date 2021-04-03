'use strict';
{
  const todoItems = [];
  const todoItem = document.getElementById("input-todo-box");
  const addButton = document.getElementById('add-button');
  const table = document.createElement('table');
  const tr = document.createElement('tr');
  const th = document.createElement('th');
  const td = document.createElement('td');
  let todo = todoItem.value;

  const todos = {
    //id: todoItems.length, task: todoItem.value, status: '作業中'
  }


  const addTask = () => {
    addButton.addEventListener('click', () => {
      let todo = todoItem.value;
      if (todo)
      {
        todoItems.push(todos);
        todos.id = todoItems.length;
        todos.task = todoItem.value;
        todos.status = '作業中';

        document.getElementById('wrapper').appendChild(table);
        const reset = document.getElementById("input-todo-box");
        reset.value = '';
        showTask();
      } else
      {
        alert("入力して下さい");
      }
    });
  }

  const createProgressButton = () => {
    const progressButton = document.createElement('button');
    progressButton.innerText = '作業中';
    table.appendChild(tr);
    //tr.appendChild(th);
    //th.appendChild(td);
    td.appendChild(progressButton);

    progressButton.addEventListener('click', () => {
      if (progressButton.innerText === '作業中')
      {
        progressButton.innerText = '完了';
        todos.status = "done"; //プロパティ追加
      } else
      {
        progressButton.innerText = '作業中';
        todos.status = "progress" //プロパティ追加
      }
    });
  }

  const createRemoveButton = (id) => {

    const removeButton = document.createElement('button');
    removeButton.innerText = '削除';
    table.appendChild(tr);
    tr.appendChild(th);
    th.appendChild(td);
    td.appendChild(removeButton);

    removeButton.addEventListener('click', () => {

      td.removeChild(removeButton);
      tr.removeChild(td);
      //td.removeChild(table);

      const todoId = todoItems.findIndex(todos => {
        return todos.id === id;
      });
      todoItems.splice(todoId, 1);
      todoItems.forEach((value, index) => {
        todoItems[index].id = index;
      });
    });
  }

  const showTask = () => {

    const tr = document.createElement('tr');
    const th = document.createElement('th');
    //const td = document.createElement('td');

    //tr.appendChild(th);
    //tr.appendChild(td);
    //th.appendChild(td);

    for (let i = 0; i < todoItems.length ; i++)
    {
      table.appendChild(tr);
      tr.appendChild(th);
      //th.appendChild(td);
      th.textContent = todos['id'] + " " + todos['task'] + " " + todos['status'];

    }

    //tr.appendChild(td);
    //tr.appendChild(th);
    createProgressButton();
    createRemoveButton();
  }

  const radioButtonAll = document.getElementById('radio-all');
  const radioButtonWorking = document.getElementById('radio-working');
  const radioButtonDone = document.getElementById('radio-done');

  const radioFilter = () => {
    let flag = false;
    const radioForm = document.getElementById("radio-form");
    for (let i = 0; i < radioForm.length; i++)
    {
      if (radioButtonAll.checked)
      {
        flag = true;
        console.log("all");

        return showTask();

      } else if (radioButtonDone.checked)
      {

      } else if (radioButtonDone.checked)
      {

      }
    }

  }

  radioFilter();
  addTask();

}
