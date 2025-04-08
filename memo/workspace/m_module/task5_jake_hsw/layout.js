const usersLayout = (() => {
    const showUsers = (users) => {
        const table = document.querySelector("table.users");
        let text = ``;

        users.forEach(({ name, email }) => {
            text += `
            <tr ${email.includes("biz") && "class ='on'"}>
                <td>${name}</td>
                <td>${email}</td>
            </tr>
            `;
        });
        table.innerHTML = `
        <thead>
            <tr>
                <th>Name</th>
                <th>E-mail</th>
            </tr>
        </thead>
        <tbody>
            ${text}
        </tbody>
        `;
    };
    return { showUsers: showUsers };
})();
