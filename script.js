document.addEventListener("DOMContentLoaded", () => {

    const canvas = document.getElementById("sparkleCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Sparkles
    const particles = [];
    class Particle {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2;
            this.alpha = Math.random();
        }
        update() {
            this.alpha += (Math.random() - 0.5) * 0.05;
            if (this.alpha <= 0) this.reset();
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255,255,255,${this.alpha})`;
            ctx.fill();
        }
    }

    for (let i = 0; i < 150; i++) particles.push(new Particle());

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => { p.update(); p.draw(); });
        requestAnimationFrame(animate);
    }
    animate();

    // Countdown
    function updateCountdown() {
    const now = new Date();

    if (now >= new Date("February 14, 2026 00:00:00"))
        return clearInterval(countdownInterval);

    const target = new Date("February 13, 2026 00:00:00");
    const diff = target - now;

    days.textContent = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours.textContent = Math.floor((diff / (1000 * 60 * 60)) % 24);
    minutes.textContent = Math.floor((diff / (1000 * 60)) % 60);
    seconds.textContent = Math.floor((diff / 1000) % 60);
}

const countdownInterval = setInterval(updateCountdown, 1000);

    setInterval(updateCountdown, 1000);
    updateCountdown();

    const drawer = document.getElementById("valentineDrawer");
    const lovePanel = document.getElementById("lovePanel");
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const bgMusic = document.getElementById("bgMusic");

    setTimeout(() => drawer.classList.add("show"), 1500);

    // YES
    yesBtn.addEventListener("click", () => {
        lovePanel.classList.add("show");
        fadeInMusic();
    });

    // NO playful movement
    function moveNoButton() {
        const x = Math.random() * (window.innerWidth - 120);
        const y = Math.random() * (window.innerHeight - 60);
        noBtn.style.position = "fixed";
        noBtn.style.left = x + "px";
        noBtn.style.top = y + "px";
    }

    noBtn.addEventListener("mouseenter", moveNoButton);
    noBtn.addEventListener("click", moveNoButton);

function startMusicAutomatically() {
    bgMusic.volume = 0;
    bgMusic.muted = false;

    bgMusic.play().then(() => {
        let volume = 0;
        const fade = setInterval(() => {
            if (volume < 0.5) {
                volume += 0.02;
                bgMusic.volume = volume;
            } else {
                clearInterval(fade);
            }
        }, 200);
    }).catch(err => {
        console.log("Browser blocked autoplay:", err);
    });
}

startMusicAutomatically();
});