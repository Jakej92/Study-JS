const todoService = (() => {
    const getTodo = async (callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos"
        );
        const todo = await response.json();

        if (callback) {
            callback(todo.slice(0, 20));
        }
    };
    return {
        getTodo: getTodo,
    };
})();
