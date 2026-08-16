import { useEffect, useRef, useState } from "react";
import profileImg from "../assets/profile.jpg";

const STATS = [
    { value: "60+", label: "Brands Launched" },
    { value: "12", label: "Countries" },
    { value: "5", label: "Years Building" },
];

const AWARDS = [
    { name: "Awwwards", category: "SOTD Nominee", year: "2025" },
    { name: "FWA", category: "Featured", year: "2024" },
    { name: "CSSDA", category: "Site of the Day", year: "2024" },
    { name: "The Brand Identity", category: "Showcase", year: "2024" },
    { name: "Brand New", category: "Noted", year: "2023" },
];

const CLIENTS = [
    "Kuro",
    "Aurum",
    "Ciel & Cie",
    "Maison Noir",
    "North Atelier",
    "Verano",
    "Monolith",
    "Obsidian",
];

/** Fades + slides an element in the first time it enters the viewport. */
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

export default function About() {
    const { ref: introRef, isVisible: introVisible } = useReveal<HTMLDivElement>();

    return (
        <section id="about" className="bg-ink py-28 lg:py-36">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                {/* Founder photo + bio + stats */}
                <div
                    ref={introRef}
                    className={`grid grid-cols-1 gap-12 transition-all duration-700 ease-out lg:grid-cols-2 lg:gap-16 ${introVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                        }`}
                >
                    {/* Photo */}
                    <div className="relative aspect-5/5 overflow-hidden bg-ink-soft">
                        <img
                            src={profileImg}
                            alt="Rahul Kushwaha, founder of RKA Studio"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
                        />
                        <div className="absolute bottom-6 left-6">
                            <p className="text-[11px] tracking-[0.2em] text-paper-dim">FOUNDER</p>
                            <p className="mt-1 font-display text-lg font-semibold text-paper">
                                Rahul Kushwaha
                            </p>
                        </div>
                        <span
                            aria-hidden="true"
                            className="absolute bottom-6 right-6 h-2 w-2 rounded-full bg-signal"
                        />
                    </div>

                    {/* Copy */}
                    <div className="flex flex-col justify-center">
                        <div className="mb-6 flex items-center gap-3">
                            <span className="h-px w-8 bg-signal" aria-hidden="true" />
                            <span className="text-xs font-semibold tracking-[0.2em] text-signal">
                                ABOUT THE STUDIO
                            </span>
                        </div>
                        <h2 className="font-display text-4xl font-extrabold leading-[1.1] text-paper sm:text-5xl">
                            We build brands the way filmmakers build{" "}
                            <span className="font-accent italic text-signal">stories.</span>
                        </h2>

                        <p className="mt-8 max-w-lg text-base leading-relaxed text-paper-dim">
                            RKA Studio is an independent creative agency founded by Rahul
                            Kushwaha. We partner with founders and cultural brands to
                            develop identities, packaging, cinematic film, and digital
                            experiences with editorial precision and cinematic ambition.
                        </p>
                        <p className="mt-4 max-w-lg text-base leading-relaxed text-paper-dim">
                            Small by design. Senior by default. Every project is led by
                            the founder himself.
                        </p>

                        {/* Stats */}
                        <div className="mt-10 grid grid-cols-3 gap-8 border-t border-ink-line pt-8">
                            {STATS.map((stat) => (
                                <div key={stat.label}>
                                    <p className="font-display text-4xl font-extrabold text-paper sm:text-5xl">
                                        {stat.value}
                                    </p>
                                    <p className="mt-1 text-xs text-paper-dim">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Testimonial */}
                <div className="mt-28 max-w-2xl lg:mt-36">
                    <p className="font-accent text-3xl italic leading-snug text-paper sm:text-4xl">
                        <span className="text-signal">&ldquo;</span>
                        The most considered creative work we&apos;ve received in a
                        decade. Editorial, precise, and quietly powerful.
                        <span className="text-signal">&rdquo;</span>
                    </p>
                    <div className="mt-6 flex items-center gap-3">
                        <span className="h-px w-8 bg-signal" aria-hidden="true" />
                        <div>
                            <p className="font-display text-sm font-semibold text-paper">
                                Selene Marchetti
                            </p>
                            <p className="text-xs text-paper-dim">
                                Creative Director, North Atelier
                            </p>
                        </div>
                    </div>
                </div>

                {/* Recognition */}
                <div className="mt-24 lg:mt-32">
                    <div className="mb-6 flex items-center gap-3">
                        <span className="h-px w-8 bg-signal" aria-hidden="true" />
                        <span className="text-xs font-semibold tracking-[0.2em] text-signal">
                            RECOGNITION
                        </span>
                    </div>

                    <ul className="border-t border-ink-line">
                        {AWARDS.map((award) => (
                            <li
                                key={award.name}
                                className="flex items-center justify-between gap-6 border-b border-ink-line py-5"
                            >
                                <div className="flex items-baseline gap-4">
                                    <span className="font-display text-2xl font-extrabold text-paper sm:text-3xl">
                                        {award.name}
                                    </span>
                                    <span className="hidden text-sm text-paper-dim sm:inline">
                                        {award.category}
                                    </span>
                                </div>
                                <span className="text-sm text-paper-dim">{award.year}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Client-name ticker */}
            <div
                aria-hidden="true"
                className="mt-14 overflow-hidden border-y border-ink-line py-6"
            >
                <div className="marquee-track marquee-track--fast">
                    {[0, 1].map((copy) => (
                        <div key={copy} className="flex items-center whitespace-nowrap">
                            {CLIENTS.map((client) => (
                                <span key={client} className="flex items-center">
                                    <span className="px-6 text-xs font-medium uppercase tracking-[0.15em] text-paper-dim">
                                        {client}
                                    </span>
                                    <span className="h-1 w-1 rounded-full bg-signal" aria-hidden="true" />
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}