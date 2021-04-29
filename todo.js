'use strict';
{
  const todoItems = [];
  const todoItem = document.getElementById('input-todo-box');
  const addButton = document.getElementById('add-button');
  const table = document.getElementById('table');

  

  //yoshida修正 createProgressButton
  const createProgressButton = (todo, status, row) => {
    const progressButton = document.createElement('button');
    progressButton.innerText = todo.status;
    status.appendChild(progressButton);
    progressButton.addEventListener('click', () => {
      if (progressButton.innerText === '作業中') {
        todo.status = '完了';
        progressButton.innerText = todo.status;
        row.classList.add('finish');
        return;
      }
      todo.status = '作業中';
      progressButton.innerText = todo.status;
      row.classList.remove('finish');
    });
  }

  const createRemoveButton = (remove, row) => {
    const removeButton = document.createElement('button');
    removeButton.innerText = '削除';
    remove.appendChild(removeButton);
    removeButton.addEventListener('click', () => {
      //削除ボタンを押したとき、押した要素を配列todosから削除する。showTasksで現在のtodosの状態で一覧を作り直す。
      const index = row.rowIndex - 1;
      todoItems.splice(index, 1);
      showTasks();
    });
  }

  //yoshida showTask修正
  const showTasks = () => {
    //forEachを回すので、前回残っている表はループ前に削除する
    table.innerText = '';
    todoItems.forEach(todo => {
      //ループにこのように記述することで、forEachが走るたびにlengthが連番になります。
      const todoId = table.rows.length;
      //最後の行に新しい行を追加
      const row = table.insertRow(-1);
      row.classList.add('tasks');
      if (todo.status === '完了') {
        row.classList.add('finish');
      }

      //各項目の追加
      //id content status removeの順番でtdが来るように指定
      const id = row.insertCell(0);
      const content = row.insertCell(1);
      const status = row.insertCell(2);
      const remove = row.insertCell(3);

      id.innerText = todoId;
      content.innerText = todo.task;
      //createProgressButtonにtodo→ボタン切り替えに必要。→適切な位置に配置するために使用 row→classをつけるのに使用
      createProgressButton(todo, status, row);
      createRemoveButton(remove, row);
    });
  }

  const radioFilter = () => {
    //table.innerText = '';
    const radioForm = document.getElementById("radio-form");
    const radioButtonAll = document.getElementById("radio-all");
    const radioButtonWorking = document.getElementById("radio-working");
    const radioButtonDone = document.getElementById("radio-done");

    if (radioButtonAll.checked){
      return showTasks();
    }
    else if (radioButtonWorking.checked){
        const doingTodos = todoItems.filter((todo => todo.status) === '作業中')
      showTasks(doingTodos);
      console.log("checked");
    }
    else if (radioButtonDone.checked){
      const doneTodos = todoItems.filter((todo => todo.status) === '完了')
      showTasks(doneTodos);
      console.log("checked");
    } else
    {
      showTasks();
    }

  }

  //yoshida追加
  addButton.addEventListener('click', () => {
    const todo = { task: todoItem.value, status: '作業中' };
    todoItems.push(todo);
    //showTasks();
    radioFilter();
    todoItem.value = '';
  });
}
