// src/components/Button.jsx
export default function Button({ children, href = "#", className = "" }) {
  return (
    <a
      href={href}
      className={`inline-block px-6 py-3 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 transition ${className}`}
    >
      {children}
    </a>
  );
}
