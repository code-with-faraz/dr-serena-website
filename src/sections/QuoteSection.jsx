"use client";

export default function QuoteSection() {
    return (
        <section
            className="relative flex items-center justify-center py-40 px-6 text-center text-white"
            style={{
                backgroundImage: `url('/assets/therapy-bg.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "60vh",
            }}
        >
            <div className="absolute inset-0 bg-black/40 z-0" />
            <div className="relative z-10 max-w-4xl mx-auto px-4 flex items-center justify-center h-full">
                <blockquote className="text-2xl sm:text-4xl font-sans font-light italic tracking-wide leading-relaxed">
                    “Give yourself the same care and attention you give to others and watch yourself bloom.”
                </blockquote>
            </div>
        </section>
    );
}
