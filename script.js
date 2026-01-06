// MUSIC TOGGLE
function toggleMusic() {
    const audio = document.getElementById("birthdaySong");
    const btn = document.getElementById("musicBtn");

    if (audio.paused) {
        audio.play();
        btn.textContent = "⏸ Pause Music";
    } else {
        audio.pause();
        btn.textContent = "🎵 Play Music";
    }
}

// CONFETTI ANIMATION
const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let pieces = [];
const confettiCount = 120;

for (let i = 0; i < confettiCount; i++) {
    pieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 15 + 5,
        d: Math.random() * confettiCount,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
        tilt: Math.random() * 10 - 10,
        tiltAngle: 0,
        tiltAngleIncremental: Math.random() * 0.07 + 0.05
    });
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pieces.forEach(p => {
        ctx.beginPath();
        ctx.lineWidth = p.r / 2;
        ctx.strokeStyle = p.color;
        ctx.moveTo(p.x + p.tilt, p.y);
        ctx.lineTo(p.x + p.tilt + p.r, p.y + p.r);
        ctx.stroke();
    });

    updateConfetti();
}

function updateConfetti() {
    pieces.forEach(p => {
        p.tiltAngle += p.tiltAngleIncremental;
        p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
        p.tilt = Math.sin(p.tiltAngle) * 15;

        if (p.y > canvas.height) {
            p.x = Math.random() * canvas.width;
            p.y = -20;
        }
    });
}

function animateConfetti() {
    requestAnimationFrame(animateConfetti);
    drawConfetti();
}

animateConfetti();

// RESIZE FIX
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
