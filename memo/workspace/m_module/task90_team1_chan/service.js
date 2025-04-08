const commentService = (() => {
    const getComment = async (page = 1, callback) => {
        // 게시자 정보
        let response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const users = await response.json();

        // 게시글 정보
        response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await response.json();

        // 댓글 정보
        response = await fetch("https://jsonplaceholder.typicode.com/comments");
        const comments = await response.json();

        const rowSize = 20;
        const end = page * rowSize;
        const start = end - rowSize;

        // 입력된 게시글 번호와 일치는 댓글 정보만 추출
        const input = document.querySelector("input[type=text]");
        const list = comments.filter(
            (comment) => comment.postId == input.value
        );

        // 입력된 게시글 번호와 일치하는 게시글 정보 추출
        const post = posts.filter((post) => post.id == input.value)[0];
        console.log(post);

        // 위에서 가져온 게시글 정보의 사용자 id와 일치하는 사용자 정보 추출
        const user = users.filter((user) => user.id == post.userId)[0];

        if (callback) {
            callback(user, post, list.slice(start, end)); // 게시자, 게시글, 게시글에 달린 댓글 정보
        }
    };

    return {
        getComment: getComment,
    };
})();
