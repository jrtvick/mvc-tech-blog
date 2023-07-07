console.log("you have successfully connected");

const form = document.getElementById("new-post");
const submit = async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const title = formData.get("title");
  const body = formData.get("body");
  await fetch("/api/posts/", {
    method: "POST",
    body: JSON.stringify({ title, body }),
    headers: {
      "Content-Type": "application/json",
    },
  });
document.location.replace("/dashboard")
};

form.addEventListener("submit", submit);
