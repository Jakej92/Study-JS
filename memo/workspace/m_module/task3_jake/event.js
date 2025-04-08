const button = document.getElementById("get-users");

button.addEventListener("click", (e) => {
    userService.getUsers(usersLayout.showUsers);
});

const buttonWeb = document.getElementById("get-website");

buttonWeb.addEventListener("click", (e) => {
    userService.getUsers(usersWebsite.showWebsite);
});
