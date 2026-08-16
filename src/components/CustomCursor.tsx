import { useEffect, useRef } from "react";

// Any element with this attribute makes the cursor grow + turn orange.
// Add it to buttons, links, and cards — see Navbar/Hero/Work for examples.
const HOVER_SELECTOR = '[data-cursor="hover"]';

// Lower = more trailing lag, higher = snappier. 0.15 gives a soft, visible trail.
const EASE = 0.15;

export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const supportsFinePointer = window.matchMedia(
            "(hover: hover) and (pointer: fine)"
        ).matches;
        const dot = dotRef.current;
        if (!supportsFinePointer || !dot) return;

        // Plain mutable objects, not state — this loop runs every frame
        // and must never trigger a React re-render.
        const current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        const target = { ...current };
        let rafId = 0;
        let isHovering = false;

        const handleMouseMove = (e: MouseEvent) => {
            target.x = e.clientX;
            target.y = e.clientY;
        };

        const handlePointerOver = (e: PointerEvent) => {
            if (!(e.target instanceof Element)) return;
            if (e.target.closest(HOVER_SELECTOR) && !isHovering) {
                isHovering = true;
                dot.classList.add("cursor-dot--hover");
            }
        };

        const handlePointerOut = (e: PointerEvent) => {
            if (!(e.target instanceof Element)) return;
            const leavingHoverTarget = e.target.closest(HOVER_SELECTOR);
            const enteringElement = e.relatedTarget instanceof Element ? e.relatedTarget : null;
            const stillInsideHoverTarget = enteringElement?.closest(HOVER_SELECTOR);
            if (leavingHoverTarget && !stillInsideHoverTarget) {
                isHovering = false;
                dot.classList.remove("cursor-dot--hover");
            }
        };

        const tick = () => {
            current.x += (target.x - current.x) * EASE;
            current.y += (target.y - current.y) * EASE;
            dot.style.transform = `translate(${current.x}px, ${current.y}px) translate(-50%, -50%)`;
            rafId = requestAnimationFrame(tick);
        };

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("pointerover", handlePointerOver);
        document.addEventListener("pointerout", handlePointerOut);
        rafId = requestAnimationFrame(tick);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("pointerover", handlePointerOver);
            document.removeEventListener("pointerout", handlePointerOut);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return <div ref={dotRef} className="cursor-dot" aria-hidden="true" />;
}