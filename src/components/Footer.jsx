export default function Footer() {
  return (
    <footer className="bg-[#fdfaf5] text-gray-700 text-center px-6 py-12 font-serif text-sm">
      <div className="space-y-4 max-w-2xl mx-auto">
        <p className="text-xl sm:text-2xl font-medium">
          © {new Date().getFullYear()} Dr. Serena Blake, PsyD
        </p>

        <p className="text-base">
          1287 Maplewood Drive, Los Angeles, CA 90026
        </p>

        <div className="space-y-1 text-base">
          <p>
            Email:{" "}
            <a href="mailto:serena@blakepsychology.com" className="underline">
              serena@blakepsychology.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+13235550192" className="underline">
              (323) 555-0192
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
