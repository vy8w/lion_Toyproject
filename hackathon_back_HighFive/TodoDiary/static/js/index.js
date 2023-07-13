document.addEventListener("DOMContentLoaded", function() {
  var addButton = document.getElementById("addButton");
  var todoInput = document.getElementById("todoInput");
  var todoList = document.getElementById("todoList");

  addButton.addEventListener("click", function() {
    var todoText = todoInput.value;
    if (todoText !== "") {
      var listItem = document.createElement("li");
      listItem.textContent = todoText;

      var deleteButton = document.createElement("button");
      deleteButton.className = "deleteButton";
      deleteButton.addEventListener("click", function() {
        listItem.remove();
        saveDiary();
      });

      listItem.appendChild(deleteButton);
      todoList.appendChild(listItem);
      todoInput.value = "";

      saveDiary();
    }
  });

  const button = document.querySelector('#emojiBtn');
  const picker = new EmojiButton({
    position: 'bottom-start'
  });

  button.addEventListener('click', () => {
    picker.togglePicker(button);
  });

  picker.on('emoji', emoji => {
    const text_box = document.querySelector('#todoInput');
    text_box.value += emoji;
  });

  window.onload = function() {
    loadDiary();
  }

  function saveDiary() {
    var todoItems = todoList.querySelectorAll("li");
    var todoData = Array.from(todoItems).map(function(item) {
      var todoText = item.textContent;
      var todoDate = new Date(); // 현재 날짜와 시간 정보를 가져옴
      return { text: todoText, date: todoDate };
    });
    localStorage.setItem('todoList', JSON.stringify(todoData));
  }

  function loadDiary() {
    var savedItems = localStorage.getItem('todoList');
    if (savedItems) {
      var todoData = JSON.parse(savedItems);
      for (var i = 0; i < todoData.length; i++) {
        var text = todoData[i].text;
        var date = new Date(todoData[i].date);

        var listItem = document.createElement("li");
        var textNode = document.createTextNode(text);

        var deleteButton = document.createElement("button");
        deleteButton.className = "deleteButton";
        deleteButton.addEventListener("click", function() {
          listItem.remove();
          saveDiary();
        });

        listItem.appendChild(textNode);
        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);
      }
    }
  }

  window.addEventListener('beforeunload', function() {
    saveDiary();
  });
});
