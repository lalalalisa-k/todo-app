'use strict';
{
  const todoItems = [];
  const todoItem = document.getElementById("input-todo-box");
  const addButton = document.getElementById('add-button');
  const table = document.createElement('table');
  const tr = document.createElement('tr');
  const td = document.createElement('td');
  let todo = todoItem.value;

  /* ここでtodosを宣言するとエラーになります。
  const todos = {
        id: todoItems.length, task: todoItem.value, status: '作業中'
      }　*/

  const addTask = () => {
    addButton.addEventListener('click', () => {
      let todo = todoItem.value;
      //const todos = {
      //  id: todoItems.length, task: todoItem.value, status: '作業中'
      //}

      if (todo)
      {
        todoItems.push(todo);
        /* 連想配列「todos」の
        「id」にIDとして　格納したい
          todos.id = todoItems.length; //
          todos.task = todoItem.value; //
          todos.status = '作業中';      //
        */

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

  const showTask = () => {

    const tr = document.createElement('tr');
    const td = document.createElement('td');

    for (let i = 0; i < todoItems.length; i++)
    {
      table.appendChild(tr);
      tr.appendChild(td);
      td.textContent = todoItems.length + " " + todoItems[i] + " " + todoItems.task;
      //td.textContent = todo[id] + " " + todo[task];

    }
    console.log(todo);

    const createProgressButton = () => {
      const progressButton = document.createElement('button');
      progressButton.innerText = '作業中';
      td.appendChild(progressButton);

      progressButton.addEventListener('click', () => {
        if (progressButton.innerText === '作業中')
        {
          progressButton.innerText = '完了';
          //todo.status = "done"; //プロパティ追加
        } else
        {
          progressButton.innerText = '作業中';
          //todo.status = "progress" //プロパティ追加
        }
      });
    }

    const removeTodo = () => {

    }

    const createRemoveButton = () => {
      const removeButton = document.createElement('button');
      removeButton.innerText = '削除';
      td.appendChild(removeButton);

      removeButton.addEventListener('click', () => {

        td.removeChild(removeButton);
        tr.removeChild(td);

        //removeTodo();
      });
    }
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
        alert("aaaa");

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
