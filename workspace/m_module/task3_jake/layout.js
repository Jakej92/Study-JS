const usersLayout = (() => {
    const showUsers = (users) => {
        const table = document.querySelector("table.users");
        const websiteTable = document.querySelector("table.websites");

        websiteTable.style.display = "none";

        let text = ``;

        users.forEach(({ name, email, phone, website }) => {
            text += `
                <tr ${website.includes(".org") && "class='on'"}> 
                    <td>${name}</td>
                    <td>${email}</td>
                    <td>${phone}</td>
                </tr>
            `;
        });

        table.innerHTML = `
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                </tr>
            </thead>
            <tbody>
                ${text}
            </tbody>
        `;
        table.style.display = "table";
    };

    return { showUsers: showUsers };
})();

const usersWebsite = (() => {
    const showWebsite = (website) => {
        const websites = document.querySelector("table.websites");
        const userTable = document.querySelector("table.users");

        userTable.style.display = "none";

        let text = ``;

        website.forEach(({ name, email, phone, website }) => {
            text += `
                <tr ${website.includes(".org") && "class='on'"}> 
                    <td>${name}</td>
                    <td>${email}</td>
                    <td>${phone}</td>
                    <td>${website}</td>
                </tr>
            `;
        });

        websites.innerHTML = `
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Website</th>
                </tr>
            </thead>
            <tbody>
                ${text}
            </tbody>
        `;
        websites.style.display = "table";
    };

    return { showWebsite: showWebsite };
})();
