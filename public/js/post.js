const postBuilder = async (event) => {
  event.preventDefault();
  console.log("is this called");

  const postText = document.querySelector("#postText").value.trim();
  const user = document.querySelector("#username").value.trim();
  if (postText && user) {
    console.log("working");
    const response = await fetch("/api/posts/post", {
      method: "POST",
      body: JSON.stringify({ postText, user }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to post.");
    }
  }
};

// document.querySelector("#postText").addEventListener("click", postbuilder);

document.querySelector(".form-post").addEventListener("submit", postBuilder);
