// LOGIN
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let message = document.getElementById("message");

        let savedUser = JSON.parse(localStorage.getItem("user"));

        if (
            savedUser &&
            email === savedUser.email &&
            password === savedUser.password
        ) {
            message.style.color = "green";
            message.textContent = "Login successful!";

            setTimeout(() => {
                window.location.href = "vendors.html";
            }, 1000);

        } else {
            message.style.color = "red";
            message.textContent = "Incorrect email or password.";
        }
    });
}

// REGISTER
const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("regEmail").value;
        let password = document.getElementById("regPassword").value;

        let user = {
            name: name,
            email: email,
            password: password
        };

        localStorage.setItem("user", JSON.stringify(user));

        let registerMessage =
            document.getElementById("registerMessage");

        registerMessage.style.color = "green";
        registerMessage.textContent =
            "Registration successful! Redirecting...";

        setTimeout(() => {
            window.location.href = "index.html";
        }, 1500);
    });
}