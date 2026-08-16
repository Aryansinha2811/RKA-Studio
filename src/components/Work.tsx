import { useEffect, useRef, useState } from "react";


import northAtelierImg from "../assets/Webp/One.webp";
import veranoParfumImg from "../assets/Webp/Two.webp";
import monolithCoffeeImg from "../assets/Webp/Five.webp";
import obsidianStudioImg from "../assets/Webp/Four.webp";
import kuroMotionImg from "../assets/Webp/Three.webp";

type Project = {
    name: string;
    category: string;
    year: string;
    size: "full" | "half";
    image: string;
    // Where the arrow badge sends people — swap these for the real
    // live site / case study link per project.
    url: string;
};

const PROJECTS: Project[] = [
    {
        name: "North Atelier",
        category: "Brand Identity",
        year: "2025",
        size: "full",
        image: northAtelierImg,
        url: "https://example.com/work/north-atelier",
    },
    {
        name: "Verano Parfum",
        category: "Packaging Design",
        year: "2025",
        size: "half",
        image: veranoParfumImg,
        url: "https://example.com/work/verano-parfum",
    },
    {
        name: "Monolith Coffee",
        category: "Brand + Packaging",
        year: "2024",
        size: "half",
        image: monolithCoffeeImg,
        url: "https://example.com/work/monolith-coffee",
    },
    {
        name: "Obsidian Studio",
        category: "Website Design",
        year: "2024",
        size: "half",
        image: obsidianStudioImg,
        url: "https://example.com/work/obsidian-studio",
    },
    {
        name: "Kuro Motion",
        category: "Cinematic Reels",
        year: "2023",
        size: "half",
        image: kuroMotionImg,
        url: "https://example.com/work/kuro-motion",
    },
];

/** Fades + slides a section in the first time it enters the viewport. */
function useReveal<T extends HTMLElement>() {
    const ref = useRef<T>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return { ref, isVisible };
}

function ProjectCard({ project }: { project: Project }) {
    return (
        <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="hover"
            className={`group relative block overflow-hidden bg-ink-soft ${project.size === "full" ? "aspect-[21/9]" : "aspect-[4/3]"
                }`}
        >
            {/* Photo */}
            <img
                src={project.image}
                alt={`${project.name} — ${project.category}`}
                loading="lazy"
                className="absolute inset-0 h-full w-full scale-100 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Scrim so the caption stays legible over any photo */}
            <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"
            />

            {/* Year tag */}
            <span className="absolute left-5 top-5 inline-flex items-center gap-2 text-xs text-paper-dim">
                <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
                {project.year}
            </span>

            {/* Arrow badge — hidden until the card is hovered, pops in top-right */}
            <span
                aria-hidden="true"
                className="absolute right-5 top-5 flex h-10 w-10 -translate-y-1 scale-75 items-center justify-center rounded-full bg-signal text-ink opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100"
            >
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-4 w-4"
                    aria-hidden="true"
                >
                    <path
                        d="M7 17L17 7M17 7H9M17 7V15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </span>

            {/* Caption row */}
            <div className="absolute inset-x-5 bottom-4 flex items-end justify-between">
                <span className="font-display text-lg font-semibold text-paper">
                    {project.name}
                </span>
                <span className="text-xs text-paper-dim">{project.category}</span>
            </div>
        </a>
    );
}

export default function Work() {
    const { ref: headingRef, isVisible } = useReveal<HTMLDivElement>();

    return (
        <section
            id="work"
            className="relative overflow-hidden bg-ink py-28 lg:py-36"
        >
            {/* Oversized ghost heading — scrolls right to left like a news ticker */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-2 left-0 hidden w-full select-none overflow-hidden lg:block"
            >
                <div className="marquee-track">
                    {[0, 1].map((copy) => (
                        <span
                            key={copy}
                            className="ghost-text whitespace-nowrap pr-8 font-display text-[9vw] font-extrabold leading-none text-transparent"
                        >
                            Creative Excellence — Strategic Design — Impactful Brands —
                            Editorial Craft — Cinematic Vision —
                        </span>
                    ))}
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                {/* Section heading */}
                <div
                    ref={headingRef}
                    className={`relative flex flex-col justify-between gap-8 pt-16 transition-all duration-700 ease-out lg:flex-row lg:items-end ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                        }`}
                >
                    <div>
                        <div className="mb-6 flex items-center gap-3">
                            <span className="h-px w-8 bg-signal" aria-hidden="true" />
                            <span className="text-xs font-semibold tracking-[0.2em] text-signal">
                                SELECTED WORK · 2023 — 2025
                            </span>
                        </div>
                        <h2 className="font-display text-5xl font-extrabold leading-[1.05] text-paper sm:text-6xl">
                            A portfolio of
                            <br />
                            quiet <span className="font-accent italic text-signal">confidence.</span>
                        </h2>
                    </div>
                    <p className="max-w-xs text-sm leading-relaxed text-paper-dim">
                        A curated selection of identities, films, and digital experiences
                        crafted for founders who take craft seriously.
                    </p>
                </div>

                {/* Project grid */}
                <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden bg-ink-line md:grid-cols-2">
                    {PROJECTS.map((project) => (
                        <div
                            key={project.name}
                            className={project.size === "full" ? "md:col-span-2" : ""}
                        >
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-14 flex justify-center">
                    <a
                        href="#contact"
                        data-cursor="hover"
                        className="inline-flex items-center gap-2 rounded-full border border-ink-line px-6 py-3.5 text-sm font-medium text-paper transition-colors duration-200 hover:border-paper-dim"
                    >
                        Commission a Project
                        <span aria-hidden="true">↗</span>
                    </a>
                </div>
            </div>
        </section>
    );
}