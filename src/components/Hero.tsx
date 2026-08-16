export default function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-ink px-6 pt-28 lg:px-10"
        >
            {/* Ambient background — swap for a real photo later via
          background-image on this div if the client wants the
          textured facade look from the reference. */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse 80% 60% at 80% 20%, var(--color-signal-soft), transparent 60%), linear-gradient(180deg, #0a0a0b 0%, #0d0d0f 100%)",
                }}
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(90deg, var(--color-paper) 0px, var(--color-paper) 1px, transparent 1px, transparent 96px)",
                }}
            />

            {/* Based in — top right */}
            <div
                className="animate-fade-up absolute right-6 top-28 text-right opacity-0 lg:right-10"
                style={{ animationDelay: "0.5s" }}
            >
                <p className="font-body text-[11px] tracking-[0.2em] text-paper-dim">BASED IN</p>
                <p className="mt-1 text-sm text-paper">Mumbai · Worldwide</p>
            </div>

            <div className="relative mx-auto w-full max-w-7xl">
                {/* Eyebrow */}
                <div
                    className="animate-fade-up mb-8 flex items-center gap-3 opacity-0"
                    style={{ animationDelay: "0s" }}
                >
                    <span className="h-px w-8 bg-signal" aria-hidden="true" />
                    <span className="font-body text-xs font-semibold tracking-[0.2em] text-signal">
                        RKA STUDIO — EST. 2020
                    </span>
                </div>

                {/* Headline */}
                <h1 className="font-display text-[13vw] font-extrabold leading-[0.95] tracking-tight text-paper sm:text-[9vw] lg:text-[7.5vw]">
                    <span
                        className="animate-fade-up block opacity-0"
                        style={{ animationDelay: "0.12s" }}
                    >
                        Crafting Brands That
                    </span>
                    <span
                        className="animate-fade-up block opacity-0"
                        style={{ animationDelay: "0.24s" }}
                    >
                        Leave{" "}
                        <span className="font-accent italic text-signal">Impact.</span>
                    </span>
                </h1>

                {/* Sub copy */}
                <p
                    className="animate-fade-up mt-8 max-w-md text-base leading-relaxed text-paper-dim opacity-0"
                    style={{ animationDelay: "0.36s" }}
                >
                    RKA Studio is a creative branding agency founded by Rahul Kushwaha,
                    building considered identities, cinematic film, and editorial
                    digital experiences for ambitious brands worldwide.
                </p>

                {/* CTAs */}
                <div
                    className="animate-fade-up mt-10 flex flex-wrap items-center gap-4 opacity-0"
                    style={{ animationDelay: "0.48s" }}
                >
                    <a
                        href="#contact"
                        data-cursor="hover"
                        className="inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3.5 text-sm font-medium text-ink transition-transform duration-200 hover:-translate-y-0.5"
                    >
                        Start a Project
                        <span aria-hidden="true">↗</span>
                    </a>
                    <a
                        href="#work"
                        data-cursor="hover"
                        className="inline-flex items-center gap-2 rounded-full border border-ink-line px-6 py-3.5 text-sm font-medium text-paper transition-colors duration-200 hover:border-paper-dim"
                    >
                        See the Work
                    </a>
                </div>
            </div>

            {/* Scroll indicator */}
            <div
                className="animate-fade-up absolute inset-x-0 bottom-10 flex flex-col items-center gap-2 opacity-0"
                style={{ animationDelay: "0.7s" }}
            >
                <span className="font-body text-[10px] tracking-[0.25em] text-paper-dim">
                    SCROLL
                </span>
                <span className="h-4 w-px animate-bounce bg-paper-dim" aria-hidden="true" />
            </div>
        </section>
    );
}

