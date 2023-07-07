const commentForm = document.getElementById("comment-form")

const submitComment = async (e) => {
    e.preventDefault()
    const formdata = new FormData(commentForm);
    const body = formdata.get("comment");
    const postId = formdata.get("post-id")
    console.log(body)
    console.log(postId)

    await fetch("/api/comments/", {
        method: "POST",
        body: JSON.stringify({body, post_id: postId}),
        headers: { "Content-Type": "application/json" },
    });
    document.location.reload()
}


commentForm.addEventListener("submit", submitComment)