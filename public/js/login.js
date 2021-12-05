const loginFormHandler = async (event) => {
  event.preventDefault();
  console.log("how about this");

  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in.");
    }
  }
};

const form = document.querySelector(".login-form");
form.addEventListener("submit", loginFormHandler);
