"use client";

import { useState } from "react";
import "./contact.css"; // Importing the CSS file for styling

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    time: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.phone) newErrors.phone = "Phone is required";
    if (!form.email || !form.email.includes("@"))
      newErrors.email = "Valid email is required";
    if (!form.message)
      newErrors.message = "Please describe what brings you here";
    if (!form.time) newErrors.time = "Preferred time is required";
    if (!form.agree) newErrors.agree = "Consent is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted!");
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-12 bg-white text-gray-800"
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-duration="1400"
      data-aos-easing="ease-in-out"
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-gray-900 mb-10 text-center">
          Get in Touch
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Field */}
          {[
            { label: "Name", key: "name", type: "text" },
            { label: "Phone", key: "phone", type: "text" },
            { label: "Email", key: "email", type: "email" },
            { label: "Preferred time to reach you", key: "time", type: "text" },
          ].map(({ label, key, type }) => (
            <div key={key}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {label}
              </label>
              <input
                type={type}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={form[key]}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
              />
              {errors[key] && (
                <p className="text-red-500 text-sm mt-1">{errors[key]}</p>
              )}
            </div>
          ))}

          {/* Textarea */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              What brings you here?
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows="4"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Consent */}
          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              checked={form.agree}
              onChange={(e) => setForm({ ...form, agree: e.target.checked })}
              className="mt-1"
            />
            <label className="text-sm text-gray-700">
              I agree to be contacted
            </label>
          </div>
          {errors.agree && (
            <p className="text-red-500 text-sm mt-1">{errors.agree}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md text-sm font-medium tracking-wide hover:bg-indigo-700 transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
