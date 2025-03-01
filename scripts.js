document.getElementById("coolButton").addEventListener("click", function() {
    let box = document.getElementById("box");
    box.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    box.style.opacity = "1";
    box.style.transform = "rotate(360deg)";
    box.style.transition = "transform 1s, background-color 0.5s";
    setTimeout(() => {
        box.style.transform = "none";
    }, 1000);
});

function createParticle() {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    particle.style.left = Math.random() * 100 + "vw";
    particle.style.animationDuration = Math.random() * 2 + 2 + "s";
    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), 4000);
}

setInterval(createParticle, 200);
