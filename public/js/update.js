const newFormHandler = async (event) => {
  event.preventDefault();

  const blogName = document.querySelector("#blog-name").value.trim();
  const blogDescription = document.querySelector("#blog-desc").value.trim();
  blog_id = window.location.href.substr(29);
  console.log(blog_id);

  if (blogName && blogDescription) {
    const updateBlog = await fetch(`/api/blog/${blog_id}`, {
      method: "PUT",
      body: JSON.stringify({ blogName, blogDescription }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (updateBlog.ok) {
      document.location.replace("/blogs");
    } else {
      alert("Failed to update blog");
    }
  }
};

document
  .querySelector(".new-blog-form")
  .addEventListener("submit", newFormHandler);
