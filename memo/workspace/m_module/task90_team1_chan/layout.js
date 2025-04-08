const commentLayout = (() => {
    const commentList = (user, post, comments) => {
        // 사용자 정보와 게시글 정보를 먼저 보여줌
        const div = document.querySelector("#userAndPost");
        let text = `<span>게시글 작성자 :: ${user.name}</span>&nbsp;&nbsp;&nbsp;<span>e-mail :: ${user.email}</span>`;

        text += `<p>게시글 번호 :: ${post.id}</p><p class="postText">게시글 제목 :: ${post.title}</p><p class="postText">게시글 내용 :: ${post.body}</p>`;
        div.innerHTML = text;

        const table = document.getElementById("comment");

        // 게시글에 달린 댓글 정보를 테이블로 보여줌
        text = `<tr><th class = "id">댓글 ID</th><th class = "name">작성자</th><th class = "body">내용</th></tr>`;
        comments.forEach(({ id, name, body }) => {
            text += `<tr><td class = "id">${id}</td><td class = "name">${name}</td><td class = "body">${body}</td></tr>`;
        });

        table.innerHTML = text;
    };

    return {
        commentList: commentList,
    };
})();
