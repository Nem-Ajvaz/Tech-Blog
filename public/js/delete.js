document
  .querySelector(".current-blogs")
  .addEventListener("click", async function (event) {
    if (event.target.matches("button.delete-btn")) {
      if (event.target.hasAttribute("data-id")) {
        const id = event.target.getAttribute("data-id");
        console.log(id);
        const response = await fetch(`/api/blog/${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          document.location.replace("/blogs");
        } else {
          alert("Failed to delete blog");
        }
      }
    }
  });
