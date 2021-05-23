'use strict';

{
  const todoItems = [];
  const todoItem = document.getElementById('input-todo-box');
  const addButton = document.getElementById('add-button');
  const table = document.getElementById('table');

  const radioButtonAll = document.getElementById("radio-all");
  const radioButtonWorking = document.getElementById("radio-working");
  const radioButtonDone = document.getElementById("radio-done");

  const createProgressButton = (todo, status, row) => {
    const progressButton = document.createElement('button');
    progressButton.innerText = todo.status;
    status.appendChild(progressButton);
    progressButton.addEventListener('click', () => {

      if (progressButton.innerText === '作業中') {
        todo.status = '完了';
        progressButton.innerText = todo.status;
        row.classList.add('finish');

        if (radioButtonWorking.checked)
        {
          workingTodo();
        }else if(radioButtonDone.checked)
        {
          doneTodo();
        }
        return;
      } else
      {
        todo.status = '作業中';
        progressButton.innerText = todo.status;
        row.classList.remove('finish');
        if (radioButtonWorking.checked)
        {
          workingTodo();
        }else if(radioButtonDone.checked)
        {
          doneTodo();
        }
      }
    });
  }

  const createRemoveButton = (remove, todo) => {
    const removeButton = document.createElement('button');
    removeButton.innerText = '削除';
    remove.appendChild(removeButton);
    removeButton.addEventListener('click', () => {

      todoItems.splice(todo.id, 1);

      for (let i = 0; i < todoItems.length; i++)
      {
        todoItems[i].id = i;
      }

      if (radioButtonDone.checked)
      {
        doneTodo();
      } else if (radioButtonWorking.checked)
      {
        workingTodo();
      } else
      {
        showTasks();
      }
   });
  }

  const showTasks = () => {
    table.innerText = '';
    todoItems.forEach(todo => {
      const todoId = todo.id;
      const row = table.insertRow(-1);
      row.classList.add('tasks');
      if (todo.status === '完了') {
        row.classList.add('finish');
      }
      const id = row.insertCell(0);
      const content = row.insertCell(1);
      const status = row.insertCell(2);
      const remove = row.insertCell(3);

      id.innerText = todoId;
      content.innerText = todo.task;

      createProgressButton(todo, status, row);
      createRemoveButton(remove, row);
    });
  }
    radioButtonAll.addEventListener('click', () => {
      showTasks();
    })

  const workingTodo = () => {
    const workingTodos = todoItems.filter(todo => todo.status === '作業中')
    table.innerText = '';
    workingTodos.forEach(todo => {
      const row = table.insertRow(-1);
      const id = row.insertCell(0);
      const content = row.insertCell(1);
      const status = row.insertCell(2);
      const remove = row.insertCell(3);

      const todoId = todo.id;
      id.innerText = todoId;
      content.innerText = todo.task;

      createProgressButton(todo, status, row);
      createRemoveButton(remove, todo)
    }
    )
  }

  
  const doneTodo = () => {
    const doneTodos = todoItems.filter(todo => todo.status === '完了');
    table.innerText = '';
    doneTodos.forEach(todo => {
      const row = table.insertRow(-1);
      const id = row.insertCell(0);
      const content = row.insertCell(1);
      const status = row.insertCell(2);
      const remove = row.insertCell(3);

      const todoId = todo.id;
      id.innerText = todoId;
      content.innerText = todo.task;

      createProgressButton(todo, status, row);
      createRemoveButton(remove, todo)
    });
  }

  radioButtonWorking.addEventListener('click', workingTodo);
  radioButtonDone.addEventListener('click', doneTodo);

  addButton.addEventListener('click', () => {
    const todo = { id: todoItems.length, task: todoItem.value, status: '作業中' };
    todoItems.push(todo);

    if (radioButtonAll.checked)
    {
      showTasks();
    } else if (radioButtonWorking.checked)
    {
      workingTodo();
    } else if (radioButtonDone.checked)
    {
      doneTodo();
    } else
    {
      showTasks();
    }
    todoItem.value = '';
  });
}
