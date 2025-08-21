"use client";
import React, { useState } from "react";
import { contactInfo, socialLinksLarge } from "@/data/contact";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        toast.success("Message sent successfully! 🚀");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative box-border mt-24 mb-12 md:my-16">
      {/* Toast container */}
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="absolute items-center box-border hidden flex-col -right-8 top-24 md:flex">
        <span className="text-xl bg-indigo-950 box-border inline leading-7 w-fit px-5 py-2 rounded-md md:rotate-90">
          CONTACT
        </span>
        <span className="bg-indigo-950 box-border inline h-36 w-0.5"></span>
      </div>

      <div className="items-center box-border gap-x-8 grid grid-cols-1 gap-y-8 md:gap-x-16 md:grid-cols-2 md:gap-y-16">
        <div className="box-border">
          <p className="text-teal-400 text-xl font-medium uppercase mb-5">
            Contact with me
          </p>
          <div className="box-border max-w-screen-md border border-slate-600 p-3 rounded-lg md:p-5">
            <p className="text-slate-300 text-sm leading-5">
              If you have any questions or concerns, please don't hesitate to
              contact me. I am open to any work opportunities that align with my
              skills and interests.
            </p>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-y-4 mt-6"
            >
              <div className="flex flex-col gap-y-2">
                <label>Your Name: </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="Enter your name"
                  onChange={handleInputChange}
                  required
                  className="bg-slate-900 border border-gray-700 px-3 py-2 rounded-md"
                />
              </div>

              <div className="flex flex-col gap-y-2">
                <label>Your Email: </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Enter your email"
                  onChange={handleInputChange}
                  required
                  className="bg-slate-900 border border-gray-700 px-3 py-2 rounded-md"
                />
              </div>

              <div className="flex flex-col gap-y-2">
                <label>Your Message: </label>
                <textarea
                  name="message"
                  value={formData.message}
                  placeholder="Enter your message"
                  onChange={handleInputChange}
                  required
                  className="bg-slate-900 border border-gray-700 px-3 py-2 rounded-md resize-y"
                ></textarea>
              </div>

              {/* Submit button */}
              <div className="flex flex-col items-center gap-y-3">
                <button
                  type="submit"
                  disabled={loading}
                  className={`text-xs font-medium flex items-center justify-center gap-x-2 uppercase px-5 py-2.5 rounded-full md:text-sm md:font-semibold md:px-12 md:py-3 transition cursor-pointer ${
                    loading
                      ? "bg-gray-500 cursor-not-allowed"
                      : "bg-gradient-to-r from-pink-500 to-purple-600"
                  }`}
                >
                  {loading ? "Sending..." : "Send Message"}
                  {!loading && (
                    <img
                      src="https://c.animaapp.com/mek409lvoDLlSz/assets/icon-14.svg"
                      alt="Icon"
                      className="h-5 w-5"
                    />
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Contact Info + Social */}
        <div className="w-auto md:w-9/12">
          <div className="flex flex-col gap-y-5 md:gap-y-9">
            {contactInfo.map((info) => (
              <p
                key={info.id}
                className="flex items-center gap-x-3 text-sm md:text-xl"
              >
                <img
                  src={info.iconSrc}
                  alt="Icon"
                  className="h-9 w-9 p-2 rounded-full bg-gray-400"
                />
                <span className="text-sm md:text-xl">{info.text}</span>
              </p>
            ))}
          </div>

          <div className="flex gap-x-5 mt-8 md:gap-x-10 md:mt-16">
            {socialLinksLarge.map((link) => (
              <a key={link.id} href={link.href}>
                <img
                  src={link.iconSrc}
                  alt={link.alt || "Icon"}
                  className="h-12 w-12 p-3 rounded-full bg-gray-400"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
