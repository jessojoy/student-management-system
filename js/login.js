const validUsername = "admin";
const validPassword = "admin123";

function handleLogin(event) {
    event.preventDefault();

    const username = document
        .getElementById("username")
        .value
        .trim();

    const password =
        document.getElementById("password").value;

    if (
        username === validUsername &&
        password === validPassword
    ) {
        localStorage.setItem(
            "loggedInUser",
            username
        );

        window.location.href = "dashboard.html";

        return;
    }

    document.getElementById(
        "loginMessage"
    ).textContent =
        "Invalid username or password.";
}

document
    .getElementById("loginForm")
    .addEventListener(
        "submit",
        handleLogin
    );