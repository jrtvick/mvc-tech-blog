const updateButtonHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector("#title").value.trim();
    const body = document.querySelector("#body").value.trim();
    const postId = event.target.getAttribute("data-id");
    console.log(postId)

    await fetch(`/api/post/${postId}`, {
        method: "PUT",
        body: JSON.stringify({title, body}),
        headers: { "Content-Type": "application/json" },
    });
    document.location.replace('/dashboard');
};

document
  .querySelector('#update-btn')
  .addEventListener('click', updateButtonHandler);