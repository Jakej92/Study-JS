const button = document.getElementById("get-posts");

button.addEventListener("click", () => {
    printPost.getPosts(1, postLayout.showPosts);
});
