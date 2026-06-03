import { useEffect, useRef } from 'react';

// A cyan "comet" trail that follows the mouse. Particles are only emitted while
// the cursor is actually moving, then they shrink + fade out like a comet tail.
type Particle = { x: number; y: number; life: number };

const MAX_LIFE = 34;     // frames a particle lives (higher = longer, more lingering trail)
const HEAD_RADIUS = 16;  // px radius of the brightest head particle

const CometCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // skip on touch / coarse pointers — no real cursor to follow
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const particles: Particle[] = [];
    let mouseX = 0, mouseY = 0, lastX = 0, lastY = 0, moved = false;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      moved = true;
    };
    window.addEventListener('mousemove', onMove);

    let raf = 0;
    const tick = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // emit particles along the path travelled since last frame (denser tail)
      if (moved) {
        const dx = mouseX - lastX;
        const dy = mouseY - lastY;
        const dist = Math.hypot(dx, dy);
        const steps = Math.max(1, Math.min(8, Math.floor(dist / 4)));
        for (let s = 0; s < steps; s++) {
          const t = s / steps;
          particles.push({ x: lastX + dx * t, y: lastY + dy * t, life: MAX_LIFE });
        }
        lastX = mouseX;
        lastY = mouseY;
        moved = false;
      }

      // additive blend + a wide, soft gradient falloff makes the trail bloom and
      // bleed into the black (no canvas blur filter — that tanks the framerate
      // and makes the trail visibly lag behind the cursor)
      ctx.globalCompositeOperation = 'lighter';
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life -= 1;
        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }
        const k = p.life / MAX_LIFE;        // 1 = fresh, 0 = dying
        const r = HEAD_RADIUS * k;
        const reach = r * 3.4;              // wide, soft falloff for depth
        const alpha = k * 0.5;
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, reach);
        grad.addColorStop(0, `rgba(165, 243, 252, ${alpha})`);        // cyan-200 bright core
        grad.addColorStop(0.35, `rgba(34, 211, 238, ${alpha * 0.55})`); // cyan-400 mid
        grad.addColorStop(0.7, `rgba(8, 145, 178, ${alpha * 0.25})`);   // cyan-600 deep
        grad.addColorStop(1, 'rgba(8, 145, 178, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, reach, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = 'source-over';

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-40"
      aria-hidden="true"
    />
  );
};

export default CometCursor;
