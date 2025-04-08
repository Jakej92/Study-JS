const printPost = (() => {
    const getPosts = async (page = 1, callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );
        const posts = await response.json();

        const rowSize = 10;

        const end = page * rowSize;
        const start = end - rowSize;

        if (callback) {
            callback(posts.slice(start, end));
        }
    };

    return { getPosts: getPosts };
})();
