import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

const BUDGET_OPTIONS = ["< $5K", "$5K — $15K", "$15K — $40K", "$40K+"];

const SERVICE_OPTIONS = [
    "Brand Identity",
    "Packaging",
    "Graphic Design",
    "Social",
    "Photography",
    "Cinematic Reels",
    "Motion",
    "Website",
];

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [budget, setBudget] = useState<string | null>(null);
    const [services, setServices] = useState<string[]>([]);
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<Status>("idle");

    const toggleService = (service: string) => {
        setServices((current) =>
            current.includes(service)
                ? current.filter((item) => item !== service)
                : [...current, service]
        );
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!name || !email || !message) {
            setStatus("error");
            return;
        }

        setStatus("sending");
        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: name,
                    from_email: email,
                    company: company || "—",
                    budget: budget ?? "Not specified",
                    services: services.length ? services.join(", ") : "Not specified",
                    message,
                },
                { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
            );
            setStatus("success");
            setName("");
            setEmail("");
            setCompany("");
            setBudget(null);
            setServices([]);
            setMessage("");
        } catch (err) {
            console.error("EmailJS send failed:", err);
            setStatus("error");
        }
    };

    return (
        <>
            <section id="contact" className="bg-ink py-28 lg:py-36">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12">
                        {/* Left — heading + direct contact info */}
                        <div>
                            <div className="mb-6 flex items-center gap-3">
                                <span className="h-px w-8 bg-signal" aria-hidden="true" />
                                <span className="text-xs font-semibold tracking-[0.2em] text-signal">
                                    START A PROJECT
                                </span>
                            </div>
                            <h2 className="font-display text-4xl font-extrabold leading-[1.05] text-paper sm:text-5xl">
                                Let&apos;s build
                                <br />
                                something{" "}
                                <span className="font-accent italic text-signal">worth</span>
                                <br />
                                <span className="font-accent italic text-signal">
                                    remembering.
                                </span>
                            </h2>
                            <p className="mt-6 max-w-sm text-sm leading-relaxed text-paper-dim">
                                Tell us about your brand. We reply to every serious enquiry
                                within 48 hours.
                            </p>

                            <dl className="mt-14 space-y-8">
                                <div>
                                    <dt className="text-[11px] tracking-[0.2em] text-paper-dim">
                                        EMAIL
                                    </dt>
                                    <dd className="mt-1">
                                        <a
                                            href="mailto:hello@rkastudio.co"
                                            data-cursor="hover"
                                            className="font-display text-lg font-semibold text-paper transition-colors hover:text-signal"
                                        >
                                            hello@rkastudio.co
                                        </a>
                                    </dd>
                                </div>
                                <div>
                                    <dt className="text-[11px] tracking-[0.2em] text-paper-dim">
                                        STUDIO
                                    </dt>
                                    <dd className="mt-1 font-display text-lg font-semibold text-paper">
                                        Delhi · India
                                    </dd>
                                </div>
                                <div>
                                    <dt className="text-[11px] tracking-[0.2em] text-paper-dim">
                                        INSTAGRAM
                                    </dt>
                                    <dd className="mt-1">
                                        <a
                                            href="https://instagram.com/rka.studio"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            data-cursor="hover"
                                            className="font-display text-lg font-semibold text-paper transition-colors hover:text-signal"
                                        >
                                            @rka.studio
                                        </a>
                                    </dd>
                                </div>
                            </dl>
                        </div>

                        {/* Right — form */}
                        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="text-[11px] tracking-[0.2em] text-paper-dim"
                                    >
                                        YOUR NAME
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        className="mt-3 w-full border-b border-ink-line bg-transparent pb-3 text-paper outline-none transition-colors focus:border-signal"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="text-[11px] tracking-[0.2em] text-paper-dim"
                                    >
                                        EMAIL
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="mt-3 w-full border-b border-ink-line bg-transparent pb-3 text-paper outline-none transition-colors focus:border-signal"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="company"
                                    className="text-[11px] tracking-[0.2em] text-paper-dim"
                                >
                                    COMPANY / BRAND
                                </label>
                                <input
                                    id="company"
                                    type="text"
                                    value={company}
                                    onChange={(e) => setCompany(e.target.value)}
                                    className="mt-3 w-full border-b border-ink-line bg-transparent pb-3 text-paper outline-none transition-colors focus:border-signal"
                                />
                            </div>

                            <div>
                                <p className="text-[11px] tracking-[0.2em] text-paper-dim">
                                    BUDGET
                                </p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {BUDGET_OPTIONS.map((option) => (
                                        <button
                                            key={option}
                                            type="button"
                                            data-cursor="hover"
                                            onClick={() => setBudget(option)}
                                            className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${budget === option
                                                    ? "border-signal bg-signal text-ink"
                                                    : "border-ink-line text-paper-dim hover:border-paper-dim hover:text-paper"
                                                }`}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <p className="text-[11px] tracking-[0.2em] text-paper-dim">
                                    SERVICES YOU NEED
                                </p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {SERVICE_OPTIONS.map((service) => {
                                        const isSelected = services.includes(service);
                                        return (
                                            <button
                                                key={service}
                                                type="button"
                                                data-cursor="hover"
                                                onClick={() => toggleService(service)}
                                                aria-pressed={isSelected}
                                                className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${isSelected
                                                        ? "border-signal bg-signal text-ink"
                                                        : "border-ink-line text-paper-dim hover:border-paper-dim hover:text-paper"
                                                    }`}
                                            >
                                                {service}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="text-[11px] tracking-[0.2em] text-paper-dim"
                                >
                                    PROJECT DETAILS
                                </label>
                                <textarea
                                    id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                    rows={3}
                                    placeholder="Tell us what you're building, timeline, references..."
                                    className="mt-3 w-full resize-none border-b border-ink-line bg-transparent pb-3 text-paper placeholder:text-paper-dim/60 outline-none transition-colors focus:border-signal"
                                />
                            </div>

                            <div className="flex flex-wrap items-center gap-4 border-t border-ink-line pt-8">
                                <button
                                    type="submit"
                                    data-cursor="hover"
                                    disabled={status === "sending"}
                                    className="inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3.5 text-sm font-medium text-ink transition-transform duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {status === "sending" ? "Sending…" : "Send Enquiry"}
                                    <span aria-hidden="true">↗</span>
                                </button>
                                <span className="text-xs text-paper-dim">
                                    {status === "success"
                                        ? "Sent — we'll reply within 48 hours."
                                        : status === "error"
                                            ? "Something went wrong — please try again, or email us directly."
                                            : "Replies within 48 hours."}
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Closing CTA band */}
            <section className="bg-ink pb-20 lg:pb-28">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="mb-6 flex items-center gap-3">
                        <span className="h-px w-8 bg-signal" aria-hidden="true" />
                        <span className="text-xs font-semibold tracking-[0.2em] text-signal">
                            READY WHEN YOU ARE
                        </span>
                    </div>
                    <h2 className="font-display text-4xl font-extrabold leading-[1.05] text-paper sm:text-5xl">
                        Let&apos;s craft something that lasts
                        <br />
                        <span className="font-accent italic text-signal">a decade.</span>
                    </h2>
                    <a
                        href="#contact"
                        data-cursor="hover"
                        className="mt-8 inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3.5 text-sm font-medium text-ink transition-transform duration-200 hover:-translate-y-0.5"
                    >
                        Start a Project
                        <span aria-hidden="true">↗</span>
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-ink-line bg-ink">
                <div className="mx-auto max-w-7xl px-6 pb-10 pt-16 lg:px-10">
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                        <div>
                            <p className="text-[11px] tracking-[0.2em] text-paper-dim">
                                STUDIO
                            </p>
                            <ul className="mt-4 space-y-3">
                                {[
                                    { label: "Work", href: "#work" },
                                    { label: "Services", href: "#services" },
                                    { label: "About", href: "#about" },
                                    { label: "Contact", href: "#contact" },
                                ].map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            data-cursor="hover"
                                            className="text-sm text-paper transition-colors hover:text-signal"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <p className="text-[11px] tracking-[0.2em] text-paper-dim">
                                SOCIAL
                            </p>
                            <ul className="mt-4 space-y-3">
                                {[
                                    { label: "Instagram", href: "https://instagram.com/rka.studio" },
                                    { label: "Vimeo", href: "https://vimeo.com" },
                                    { label: "Behance", href: "https://behance.net" },
                                    { label: "LinkedIn", href: "https://linkedin.com" },
                                ].map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            data-cursor="hover"
                                            className="text-sm text-paper transition-colors hover:text-signal"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <p className="text-[11px] tracking-[0.2em] text-paper-dim">
                                SAY HELLO
                            </p>
                            <div className="mt-4 space-y-1">
                                <a
                                    href="mailto:hello@rkastudio.co"
                                    data-cursor="hover"
                                    className="block text-sm text-paper transition-colors hover:text-signal"
                                >
                                    hello@rkastudio.co
                                </a>
                                <p className="text-sm text-paper-dim">Delhi · Worldwide</p>
                            </div>
                        </div>
                    </div>

                    {/* Giant wordmark */}
                    <div
                        aria-hidden="true"
                        className="mt-16 flex items-center gap-4 overflow-hidden sm:gap-6"
                    >
                        <span className="font-display text-[15vw] font-extrabold leading-none tracking-tight text-paper sm:text-[11vw]">
                            RKA
                        </span>
                        <span className="h-[8vw] w-[8vw] shrink-0 bg-signal sm:h-[6vw] sm:w-[6vw]" />
                        <span className="font-display text-[15vw] font-extrabold leading-none tracking-tight text-paper sm:text-[11vw]">
                            STUDIO
                        </span>
                    </div>

                    {/* Bottom row */}
                    <div className="mt-10 flex flex-col gap-4 border-t border-ink-line pt-6 text-xs text-paper-dim sm:flex-row sm:items-center sm:justify-between">
                        <p>
                            © {new Date().getFullYear()} RKA Studio. Founded by Rahul
                            Kushwaha.
                        </p>
                        <div className="flex gap-6">
                            <a href="#" data-cursor="hover" className="transition-colors hover:text-paper">
                                Privacy
                            </a>
                            <a href="#" data-cursor="hover" className="transition-colors hover:text-paper">
                                Terms
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}