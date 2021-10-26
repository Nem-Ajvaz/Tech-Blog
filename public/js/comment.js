const createCommentBtn = document.getElementById("create-comment");
const commentBlog = document.getElementById("singular-blog");
const commentText = document.getElementById("comment-desc");

const createButtonHandler = async (event) => {
  let comment_content = commentText.value.trim();
  let blog_id = window.location.href.substr(27);
  console.log(blog_id);

  const createComment = await fetch("/api/comments/", {
    method: "POST",
    body: JSON.stringify({ comment_content, blog_id }),
    headers: { "Content-Type": "application/json" },
  });

  location.reload();
  return false;
};

createCommentBtn.addEventListener("click", createButtonHandler);
