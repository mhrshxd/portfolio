const validUsername = "user123";
const validPassword = "pass456";

function submitForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginMessage = document.getElementById("loginMessage");
    const errorMessage = document.getElementById("errorMessage");
    const button = document.querySelector("button");

    loginMessage.style.display = "none";
    errorMessage.style.display = "none";

    if (username && password) {
        if (username === validUsername && password === validPassword) {
            loginMessage.style.display = "block";
            loginMessage.textContent = `Welcome, ${username}!`;
            button.style.transform = "scale(0.95)";
            setTimeout(() => {
                button.style.transform = "scale(1)";
            }, 100);
            setTimeout(() => {
                window.location.href = "intropage.html";
            }, 2000);
        } else {
            errorMessage.style.display = "block";
            setTimeout(() => {
                errorMessage.style.display = "none";
            }, 3000);
        }
    } else {
        errorMessage.textContent = "Please enter both username and password!";
        errorMessage.style.display = "block";
        setTimeout(() => {
            errorMessage.style.display = "none";
        }, 3000);
    }
}

document.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        submitForm();
    }
});

function createParticle() {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    particle.style.left = Math.random() * 100 + "vw";
    particle.style.animationDuration = Math.random() * 3 + 3 + "s";
    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), 5000);
}

setInterval(createParticle, 300);
