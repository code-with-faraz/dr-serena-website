// src/app/layout.js
import "@/app/globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Dr. Serena Blake | Clinical Psychologist",
  description: "Compassionate therapy for healing, growth, and connection.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
