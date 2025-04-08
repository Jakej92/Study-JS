const button = document.getElementById("get-users");

button.addEventListener("click", (e) => {
    userService.getUsers(usersLayout.showUsers);
});
