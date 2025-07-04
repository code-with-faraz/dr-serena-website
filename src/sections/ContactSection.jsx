"use client";

import { useState } from "react";
import "./contact.css";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    reason: "",
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
    if (!form.reason) newErrors.reason = "This field is required";
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
      className="py-24 px-6 bg-gray-50 text-gray-900"
      data-aos="fade-up"
      data-aos-delay="150"
      data-aos-duration="900"
      data-aos-easing="ease-in-out"
    >
      <div className="max-w-3xl mx-auto border border-green-900 rounded-lg p-8 shadow-md bg-white">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-center text-green-900 mb-4">
          Get In Touch
        </h2>
        <p className="text-center text-gray-800 mb-8">
          Simply fill out the brief fields below and Dr. Serena will be in touch with you soon.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-green-900 mb-1 font-serif">
              Name
            </label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full border border-green-900 rounded-md px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-800"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-green-900 mb-1 font-serif">
              Phone
            </label>
            <input
              type="text"
              placeholder="(555) 123-4567"
              className="w-full border border-green-900 rounded-md px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-800"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-green-900 mb-1 font-serif">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-green-900 rounded-md px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-800"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* What brings you here? */}
          <div>
            <label className="block text-sm font-medium text-green-900 mb-1 font-serif">
              What brings you here?
            </label>
            <textarea
              placeholder="Briefly share what's on your mind..."
              rows="4"
              className="w-full border border-green-900 rounded-md px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-800"
              value={form.reason}
              onChange={(e) => setForm({ ...form, reason: e.target.value })}
            />
            {errors.reason && (
              <p className="text-red-500 text-sm mt-1">{errors.reason}</p>
            )}
          </div>

          {/* Preferred Time */}
          <div>
            <label className="block text-sm font-medium text-green-900 mb-1 font-serif">
              Preferred time to reach you
            </label>
            <input
              type="text"
              placeholder="e.g. Mornings, Weekends, 5–7 PM..."
              className="w-full border border-green-900 rounded-md px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-800"
              value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })}
            />
            {errors.time && (
              <p className="text-red-500 text-sm mt-1">{errors.time}</p>
            )}
          </div>

          {/* Consent Checkbox */}
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
            className="w-full bg-green-900 text-white py-3 px-6 rounded-md text-sm font-medium tracking-wide hover:bg-green-800 transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
