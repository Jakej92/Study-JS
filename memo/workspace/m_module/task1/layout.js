const postLayout = (() => {
    const showPosts = (posts) => {
        const table = document.querySelector(".posts");
        let text = ``;
        posts.forEach(({ userId, title, body }) => {
            text += `
                <tr>
                    <td>${userId}</td>
                    <td>${title}</td>
                    <td>${body}</td>
                </tr>
            `;
        });

        table.innerHTML = text;
    };

    return { showPosts: showPosts };
})();
