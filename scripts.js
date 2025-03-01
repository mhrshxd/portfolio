// Button click effect for animated box
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

// Mouse movement for animated box
if (!window.matchMedia("(max-width: 768px)").matches) {
    window.addEventListener("mousemove", function(e) {
        let box = document.getElementById("box");
        let boxWidth = box.offsetWidth;
        let boxHeight = box.offsetHeight;
        box.style.left = (e.clientX - boxWidth / 2) + "px";
        box.style.top = (e.clientY - boxHeight / 2) + "px";
        box.style.transition = "background-color 0.5s";
        box.style.opacity = "0.651";
        box.style.backgroundColor = "#3498db";
    });
}

// Particle effect
function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.animationDuration = Math.random() * 2 + 2 + 's';
    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), 4000);
}

setInterval(createParticle, 200);
