import { useEffect, useState } from "react";

const NAV_LINKS = [
    { label: "Home", href: "#home" },
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 24);
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleLinkClick = () => setIsMenuOpen(false);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${isScrolled
                    ? "border-b border-ink-line/60 bg-ink/80 backdrop-blur-md"
                    : "border-b border-transparent bg-transparent"
                }`}
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
                {/* Logo */}
                <a
                    href="#home"
                    data-cursor="hover"
                    className="flex items-center gap-2 font-display text-sm font-semibold tracking-wide text-paper"
                >
                    <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
                    RKA Studio
                </a>

                {/* Desktop links */}
                <ul className="hidden items-center gap-9 md:flex">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                data-cursor="hover"
                                className="text-sm text-paper-dim transition-colors duration-200 hover:text-paper"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <a
                    href="#contact"
                    data-cursor="hover"
                    className="hidden items-center gap-1.5 rounded-full bg-signal px-5 py-2.5 text-sm font-medium text-ink transition-transform duration-200 hover:-translate-y-0.5 md:inline-flex"
                >
                    Start Project
                    <span aria-hidden="true">↗</span>
                </a>

                {/* Mobile toggle */}
                <button
                    type="button"
                    data-cursor="hover"
                    onClick={() => setIsMenuOpen((open) => !open)}
                    className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    <span
                        className={`block h-px w-5 bg-paper transition-transform duration-200 ${isMenuOpen ? "translate-y-[3.5px] rotate-45" : ""
                            }`}
                    />
                    <span
                        className={`block h-px w-5 bg-paper transition-transform duration-200 ${isMenuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
                            }`}
                    />
                </button>
            </nav>

            {/* Mobile menu panel */}
            <div
                className={`overflow-hidden border-b border-ink-line/60 bg-ink transition-[max-height] duration-300 md:hidden ${isMenuOpen ? "max-h-80" : "max-h-0"
                    }`}
            >
                <ul className="flex flex-col gap-1 px-6 pb-6">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                onClick={handleLinkClick}
                                className="block py-2.5 text-sm text-paper-dim transition-colors duration-200 hover:text-paper"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li className="pt-2">
                        <a
                            href="#contact"
                            onClick={handleLinkClick}
                            className="inline-flex items-center gap-1.5 rounded-full bg-signal px-5 py-2.5 text-sm font-medium text-ink"
                        >
                            Start Project
                            <span aria-hidden="true">↗</span>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
}