const deleteButtonHandler = async (event) => {
    event.preventDefault();
    const postId = event.target.getAttribute("data-id");
    console.log(postId)

    await fetch(`/api/posts/${postId}`, {
        method: "DELETE",
    });
    document.location.replace('/dashboard');
};

document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteButtonHandler);