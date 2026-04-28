import { useEffect, useRef } from 'react';
import './Cursor.css';

const DOT = 8;
const RING_DEFAULT = 38;
const RING_HOVER = 60;

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const s = useRef({
    mx: -200, my: -200,
    rx: -200, ry: -200,
    size: RING_DEFAULT,
    alpha: 0,
    vis: 1,
    hovering: false,
    isProject: false,
  });
  const rafId = useRef(null);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const lerpPos   = reduced ? 1 : 0.18;
    const lerpSize  = reduced ? 1 : 0.15;
    const lerpAlpha = reduced ? 1 : 0.15;
    const lerpVis   = reduced ? 1 : 0.2;

    document.documentElement.classList.add('custom-cursor');

    const isHoverTarget = (el) => {
      while (el && el !== document.body) {
        const tag = el.tagName;
        if (tag === 'A' || tag === 'BUTTON') return true;
        if (el.dataset && el.dataset.cursor === 'hover') return true;
        el = el.parentElement;
      }
      return false;
    };

    const isProjectItem = (el) => {
      while (el && el !== document.body) {
        if (el.classList && el.classList.contains('project-item')) return true;
        el = el.parentElement;
      }
      return false;
    };

    const onMove = (e) => { s.current.mx = e.clientX; s.current.my = e.clientY; };
    const onOver = (e) => {
      s.current.hovering  = isHoverTarget(e.target);
      s.current.isProject = isProjectItem(e.target);
    };

    const tick = () => {
      const c = s.current;
      const dot  = dotRef.current;
      const ring = ringRef.current;

      if (dot && ring) {
        c.rx += (c.mx - c.rx) * lerpPos;
        c.ry += (c.my - c.ry) * lerpPos;

        const targetSize  = c.hovering ? RING_HOVER : RING_DEFAULT;
        c.size += (targetSize - c.size) * lerpSize;

        const targetAlpha = c.hovering ? 0.1 : 0;
        c.alpha += (targetAlpha - c.alpha) * lerpAlpha;

        // Fade out custom cursor over project items so the native SVG cursor shows
        const targetVis = c.isProject ? 0 : 1;
        c.vis += (targetVis - c.vis) * lerpVis;

        dot.style.transform  = `translate3d(${c.mx - DOT / 2}px,${c.my - DOT / 2}px,0)`;
        dot.style.opacity    = c.vis.toFixed(3);

        ring.style.transform = `translate3d(${c.rx - c.size / 2}px,${c.ry - c.size / 2}px,0)`;
        ring.style.width     = `${c.size}px`;
        ring.style.height    = `${c.size}px`;
        ring.style.opacity   = c.vis.toFixed(3);
        ring.style.backgroundColor = `rgba(17,17,17,${c.alpha.toFixed(3)})`;
      }

      rafId.current = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver, { passive: true });
    rafId.current = requestAnimationFrame(tick);

    return () => {
      document.documentElement.classList.remove('custom-cursor');
      cancelAnimationFrame(rafId.current);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
