const todoLayout = (() => {
    const showTodo = (todo) => {
        const table = document.querySelector(".todo");
        let text = ``;
        todo.forEach(({ userId, title, completed }) => {
            text += `
                <tr>
                    <td>${userId}</td>
                    <td${completed && "class='on'"}>${title}</td>
                </tr>
            `;
        });
        table.innerHTML = `
            <thead>
                    <tr>
                        <th>user Id</th>
                        <th>Title</th>
                    </tr>
            </thead>
            <tbody>
                ${text}
            </tbody>
        `;
    };
    return { showTodo: showTodo };
})();
