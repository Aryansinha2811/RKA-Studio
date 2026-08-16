import { useEffect, useRef, useState } from "react";

// Drop your real photos into src/assets/services/ using these exact
// names (or edit the paths below to match whatever you named them).
import brandIdentityImg from "../assets/services/brand-identity.webp";
import packagingDesignImg from "../assets/services/packaging-design.webp";
import graphicDesignImg from "../assets/services/graphic-design.webp";
import socialMediaDesignImg from "../assets/services/social-media-design.webp";
import productPhotographyImg from "../assets/services/product-photography.jpg";
import cinematicReelsImg from "../assets/services/cinematic-reels.jpg";
import videoEditingImg from "../assets/services/video-editing.jpg";
import motionGraphicsImg from "../assets/services/motion-graphics.webp";
import websiteDesignImg from "../assets/services/website-design.webp";

type Service = {
    name: string;
    description: string;
    image: string;
};

const SERVICES: Service[] = [
    {
        name: "Brand Identity",
        description: "Logos, systems, guidelines, verbal identity.",
        image: brandIdentityImg,
    },
    {
        name: "Packaging Design",
        description: "Sculptural packaging that lives on shelves and in hands.",
        image: packagingDesignImg,
    },
    {
        name: "Graphic Design",
        description: "Editorial layouts, print, campaign systems.",
        image: graphicDesignImg,
    },
    {
        name: "Social Media Design",
        description: "Feed systems, launch kits, story architectures.",
        image: socialMediaDesignImg,
    },
    {
        name: "Product Photography",
        description: "Studio and lifestyle imagery for premium brands.",
        image: productPhotographyImg,
    },
    {
        name: "Cinematic Reels",
        description: "Short-form films with mood, story, and grade.",
        image: cinematicReelsImg,
    },
    {
        name: "Video Editing",
        description: "Narrative cuts, sound design, colour finishing.",
        image: videoEditingImg,
    },
    {
        name: "Motion Graphics",
        description: "Type in motion, brand animation, UI motion.",
        image: motionGraphicsImg,
    },
    {
        name: "Website Design",
        description: "Editorial, interactive, art-directed websites.",
        image: websiteDesignImg,
    },
];

// Small offset so the image's top-left corner sits near the pointer
// instead of being centered directly under it (matches the reference).
const OFFSET_X = 24;
const OFFSET_Y = 24;
const EASE = 0.18;

export default function Services() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const listRef = useRef<HTMLUListElement>(null);
    const panelRef = useRef<HTMLDivElement>(null);
    const target = useRef({ x: 0, y: 0 });
    const current = useRef({ x: 0, y: 0 });
    const rafId = useRef(0);

    // Smoothly chase the pointer while any row is active.
    useEffect(() => {
        const supportsFinePointer = window.matchMedia(
            "(hover: hover) and (pointer: fine)"
        ).matches;
        if (!supportsFinePointer) return;

        const tick = () => {
            current.current.x += (target.current.x - current.current.x) * EASE;
            current.current.y += (target.current.y - current.current.y) * EASE;
            const panel = panelRef.current;
            if (panel) {
                panel.style.transform = `translate(${current.current.x}px, ${current.current.y}px)`;
            }
            rafId.current = requestAnimationFrame(tick);
        };

        rafId.current = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(rafId.current);
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        target.current = { x: e.clientX + OFFSET_X, y: e.clientY + OFFSET_Y };
    };

    return (
        <section id="services" className="bg-ink py-28 lg:py-36">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                {/* Section heading */}
                <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
                    <div>
                        <div className="mb-6 flex items-center gap-3">
                            <span className="h-px w-8 bg-signal" aria-hidden="true" />
                            <span className="text-xs font-semibold tracking-[0.2em] text-signal">
                                WHAT WE DO
                            </span>
                        </div>
                        <h2 className="font-display text-5xl font-extrabold leading-[1.05] text-paper sm:text-6xl">
                            Nine crafts.
                            <br />
                            <span className="font-accent italic text-signal">One studio.</span>
                        </h2>
                    </div>
                    <p className="max-w-sm text-sm leading-relaxed text-paper-dim">
                        We are a small, senior team building identities from the ground
                        up — strategy, design, photography and motion, all under one
                        roof.
                    </p>
                </div>

                {/* Service list */}
                <ul
                    ref={listRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => setActiveIndex(null)}
                    className="mt-16 border-t border-ink-line"
                >
                    {SERVICES.map((service, index) => (
                        <li
                            key={service.name}
                            onMouseEnter={() => setActiveIndex(index)}
                            className="flex items-center justify-between gap-6 border-b border-ink-line py-6"
                        >
                            <div className="flex items-baseline gap-6">
                                <span className="w-6 shrink-0 text-xs tabular-nums text-paper-dim">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <span
                                    className={`font-display text-3xl font-extrabold transition-colors duration-300 sm:text-4xl ${activeIndex === null
                                            ? "text-paper"
                                            : activeIndex === index
                                                ? "text-signal"
                                                : "text-paper-dim/60"
                                        }`}
                                >
                                    {service.name}
                                </span>
                            </div>
                            <span className="hidden max-w-[220px] text-right text-sm text-paper-dim md:block">
                                {service.description}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Cursor-following image preview */}
            <div
                ref={panelRef}
                aria-hidden="true"
                className={`pointer-events-none fixed left-0 top-0 z-40 hidden h-60 w-65 rounded-xl overflow-hidden bg-ink-soft transition-opacity duration-300 lg:block ${activeIndex !== null ? "opacity-100" : "opacity-0"
                    }`}
            >
                {activeIndex !== null && (
                    <img
                        key={activeIndex}
                        src={SERVICES[activeIndex].image}
                        alt=""
                        className="service-preview-image h-full w-full object-cover"
                    />
                )}
            </div>
        </section>
    );
}