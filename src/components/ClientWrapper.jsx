// src/components/ClientWrapper.jsx
"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ClientWrapper({ children }) {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return <>{children}</>;
}
