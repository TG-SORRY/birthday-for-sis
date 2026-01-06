// 🎵 MUSIC CONTROL
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

// 🎁 SURPRISE POPUP
setTimeout(() => {
    const popup = document.createElement("div");
    popup.className = "popup";
    popup.innerHTML = `
        💖 Surprise! 💖<br><br>
        You are not just my sister,<br>
        you are my best friend 🌸<br><br>
        🎂 Happy Birthday!
        <br><br>
        <button onclick="this.parentElement.remove()">Close</button>
    `;
    document.body.appendChild(popup);
}, 4000);

// ⏳ COUNTDOWN (change date)
const birthdayDate = new Date("2026-01-10").getTime();
setInterval(() => {
    const now = new Date().getTime();
    const diff = birthdayDate - now;

    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        document.getElementById("countdown").innerText =
            `🎉 ${days} days to go!`;
    } else {
        document.getElementById("countdown").innerText =
            "🎂 Today is the special day!";
    }
}, 1000);

// 💖 FLOATING HEARTS
setInterval(() => {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = "24px";
    heart.style.animation = "floatUp 4s linear";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
}, 900);

// 🖼 SLIDESHOW
const images = [
    "assets/photos/photo1.jpeg",
    "assets/photos/photo2.jpeg",
    "assets/photos/photo3.jpeg"
];
let current = 0;

setInterval(() => {
    current = (current + 1) % images.length;
    document.getElementById("slideImage").src = images[current];
}, 3000);

// 🔗 SHARE
function sharePage() {
    if (navigator.share) {
        navigator.share({
            title: "Happy Birthday 🎉",
            text: "A special birthday surprise 🎂💖",
            url: window.location.href
        });
    } else {
        alert("Copy the link and share it 💌");
    }
}

// 🎊 CONFETTI
const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let pieces = [];
for (let i = 0; i < 120; i++) {
    pieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 15 + 5,
        d: Math.random() * 120,
        color: `hsl(${Math.random() * 360},100%,50%)`,
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

        p.tiltAngle += p.tiltAngleIncremental;
        p.y += (Math.cos(p.d) + 3) / 2;
        p.tilt = Math.sin(p.tiltAngle) * 15;

        if (p.y > canvas.height) {
            p.y = -20;
            p.x = Math.random() * canvas.width;
        }
    });

    requestAnimationFrame(drawConfetti);
}
drawConfetti();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
