const commentsLayout = (() => {
    const showComments = (comments) => {
        const table = document.querySelector("table.comments");
        let text = ``;

        comments.forEach(({ name, email, body, postId }) => {
            text += `
                <tr ${postId === 2 && "class='on'"}>
                    <td>${name}</td>
                    <td>${email}</td>
                </tr>
                <tr ${postId === 2 && "class='on'"}>
                    <td colspan="2" >${body}</td>
                </tr>
            `;
        });
        table.innerHTML = `${text}`;
    };
    return { showComments: showComments };
})();
