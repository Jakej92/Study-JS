const button = document.getElementById("get-todo");

button.addEventListener("click", (e) => {
    todoService.getTodo(todoLayout.showTodo);
});
