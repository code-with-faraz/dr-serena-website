// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 px-6 md:px-12 text-sm text-gray-600">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4">
        <div>
          <p>&copy; {new Date().getFullYear()} Dr. Serena Blake, PsyD</p>
          <p>1287 Maplewood Drive, Los Angeles, CA 90026</p>
        </div>
        <div className="space-y-1">
          <p>Email: <a href="mailto:serena@blakepsychology.com" className="text-indigo-600">serena@blakepsychology.com</a></p>
          <p>Phone: <a href="tel:+13235550192" className="text-indigo-600">(323) 555-0192</a></p>
        </div>
      </div>
    </footer>
  );
}
