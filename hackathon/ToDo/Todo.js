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
          deleteButton.textContent = "X";
          deleteButton.className = "deleteButton";
          deleteButton.addEventListener("click", function() {
              listItem.remove();
          });

          listItem.appendChild(deleteButton);
          todoList.appendChild(listItem);
          todoInput.value = "";
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
  });