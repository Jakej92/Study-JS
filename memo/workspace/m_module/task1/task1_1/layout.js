const postLayout = (() => {
    const showPosts = (posts) => {
        const wrap = document.getElementById("post-wrap");
        let text = ``;

        posts.forEach(({ userId, title, body }) => {
            text += `<tr>
                <td>${userId}</td>
                <td>${title}</td>
                <td>${body}</td>
            </tr>`;
        });
        wrap.innerHTML = `
            <thead>
                <tr>
                    <th>userId</th>
                    <th>title</th>
                    <th>body</th>
                </tr>
            </thead>
            <tbody>
                ${text}
            </tbody>
        `;
    };
    return { showPosts: showPosts };
})();
