const button = document.getElementById("get-comment");

button.addEventListener("click", (e) => {
    commentService.getComment(1, commentLayout.commentList);
});
