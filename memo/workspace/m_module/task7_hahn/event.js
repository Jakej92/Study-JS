const button = document.getElementById("get-table");
const table = document.getElementById("user-table");
userService.getUsers(userLayout.showUsers);

let allUsers = [];
let filtered = false;

userService.getUsers((users) => {
    allUsers = users;
    userLayout.showUsers(allUsers); 
});

button.addEventListener("click", (e)=>{
    if (filtered) {
        userLayout.showUsers(allUsers);
    } else {
        const filteredUsers = allUsers.filter(user => user.company.name === "Romaguera-Crona");
        userLayout.showUsers(filteredUsers);
    }
    filtered = !filtered;
});