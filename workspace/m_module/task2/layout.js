const toDoLayout = (() => {
    const showTodos = (todos) => {
        const table = document.querySelector("table.todos");
        let text = ``;

        todos.forEach(({ userId, title, completed }) => {
            text += `
                <tr ${completed && "class='on'"}>
                    <td>${userId}</td>
                    <td>${title}</td>
                    <td>${completed}</td>
                </tr>
            `;
        });

        table.innerHTML = text;
    };

    return { showTodos: showTodos };
})();
