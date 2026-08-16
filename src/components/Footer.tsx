export default function Footer() {
    return (
        <div className="border-t border-ink-line bg-ink py-6">
            <p className="text-center text-xs text-paper-dim">
                Developed by{" "}
                <a
                    href="https://squareupdigital.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="font-medium text-[#4ade80] transition-colors hover:text-[#86efac]"
                >
                    SquareUp Studio
                </a>
            </p>
        </div>
    );
}