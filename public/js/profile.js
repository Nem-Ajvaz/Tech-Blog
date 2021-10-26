const newFormHandler = async (event) => {
  event.preventDefault();

  const blogName = document.querySelector("#blog-name").value.trim();
  const blogDescription = document.querySelector("#blog-desc").value.trim();

  if (blogName && blogDescription) {
    console.log("test");
    const createNewBlog = await fetch(`/api/blog`, {
      method: "POST",
      body: JSON.stringify({ blogName, blogDescription }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const newBlog = await createNewBlog.json();
    if (newBlog) {
      document.location.replace("/blogs");
    } else {
      alert("Failed to create new blog");
    }
  }
};

document
  .querySelector(".new-blog-form")
  .addEventListener("submit", newFormHandler);
