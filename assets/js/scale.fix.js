// ===== scale.fix.js =====

// Fireworks / Confetti Simulation
(function() {
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    canvas.style.position = 'fixed';
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = 9999;

    let particles = [];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    function random(min, max) {
        return Math.random() * (max - min) + min;
    }

    function createParticle(x, y) {
        return {
            x: x,
            y: y,
            vx: random(-3, 3),
            vy: random(-5, -1),
            alpha: 1,
            size: random(3, 6),
            color: `hsl(${random(0, 360)}, 100%, 50%)`
        };
    }

    function launchFireworks() {
        const x = random(100, canvas.width - 100);
        const y = random(100, canvas.height / 2);
        for (let i = 0; i < 50; i++) {
            particles.push(createParticle(x, y));
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((p, i) => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.05; // gravity
            p.alpha -= 0.01;

            ctx.globalAlpha = p.alpha;
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();

            if (p.alpha <= 0) {
                particles.splice(i, 1);
            }
        });

        requestAnimationFrame(animate);
    }

    animate();

    // Launch fireworks on button click
    window.fireworks = launchFireworks;

})();
