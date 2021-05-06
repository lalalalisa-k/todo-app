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
          WorkingTodo();
        }else if(radioButtonDone.checked)
        {
          DoneTodo();
        }
        return;
      } else
      {
        todo.status = '作業中';
        progressButton.innerText = todo.status;
        row.classList.remove('finish');
        if (radioButtonWorking.checked)
        {
          WorkingTodo();
        }else if(radioButtonDone.checked)
        {
          DoneTodo();
        }
      }
    });
  }

  const createRemoveButton = (remove, row, id) => {
    const removeButton = document.createElement('button');
    removeButton.innerText = '削除';
    remove.appendChild(removeButton);
    removeButton.addEventListener('click', () => {

      const todoIndex = todoItems.findIndex(todo => {
        return todo.id === id;
      });

      const index = row.rowIndex - 1;
      todoItems.splice(index, 1);
      todoItems.forEach((value, index) => {
        todoItems[index].id = index;
      });

      if (radioButtonDone.checked)
    {
      DoneTodo();
    } else{
      showTasks();
    }
    });
  }

  const showTasks = () => {
    table.innerText = '';
    todoItems.forEach(todo => {
      //const todoId = table.rows.length;
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

  const WorkingTodo = () => {
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
      createRemoveButton(remove, row);
    }
    )
  }

  const DoneTodo = () => {
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
      createRemoveButton(remove, row);
    });
  }

  radioButtonWorking.addEventListener('click', WorkingTodo);
  radioButtonDone.addEventListener('click', DoneTodo);

  addButton.addEventListener('click', () => {
    const todo = { id: todoItems.length, task: todoItem.value, status: '作業中' };
    todoItems.push(todo);

    if (radioButtonAll.checked)
    {
      showTasks();
    } else if (radioButtonWorking.checked)
    {
      WorkingTodo();
    } else if (radioButtonDone.checked)
    {
      DoneTodo();
    } else
    {
      showTasks();
    }
    todoItem.value = '';
  });
}
