"use client";
import React, { useState } from "react";
import { contactInfo, socialLinksLarge } from "@/data/contact";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="relative box-border mt-24 mb-12 md:my-16">
      <div className="absolute items-center box-border hidden flex-col -right-8 top-24 md:flex">
        <span className="text-xl bg-indigo-950 box-border inline leading-7 min-h-0 min-w-0 transform-none w-fit px-5 py-2 rounded-md md:block md:min-h-[auto] md:min-w-[auto] md:rotate-90">
          CONTACT
        </span>
        <span className="bg-indigo-950 box-border inline h-36 min-h-0 min-w-0 w-0.5 md:block md:min-h-[auto] md:min-w-[auto]"></span>
      </div>
      <div className="items-center box-border gap-x-8 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-8 md:gap-x-16 md:grid-cols-[repeat(2,minmax(0px,1fr))] md:gap-y-16">
        <div className="box-border">
          <p className="text-teal-400 text-xl font-medium box-border leading-7 uppercase mb-5">
            Contact with me
          </p>
          <div className="box-border max-w-screen-md border border-slate-600 p-3 rounded-lg border-solid md:p-5">
            <p className="text-slate-300 text-sm box-border leading-5">
              If you have any questions or concerns, please don't hesitate to
              contact me. I am open to any work opportunities that align with my
              skills and interests.
            </p>
            <form
              onSubmit={handleSubmit}
              className="box-border gap-x-4 flex flex-col gap-y-4 mt-6"
            >
              <div className="box-border gap-x-2 flex flex-col gap-y-2">
                <label className="box-border block">Your Name: </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="Enter your name"
                  onChange={handleInputChange}
                  className="bg-slate-900 shadow-[rgb(255,255,255)_0px_0px_0px_0px,rgba(59,130,246,0.5)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px] box-border block w-full border border-gray-700 px-3 py-2 rounded-md border-solid"
                />
              </div>
              <div className="box-border gap-x-2 flex flex-col gap-y-2">
                <label className="box-border block">Your Email: </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="bg-slate-900 shadow-[rgb(255,255,255)_0px_0px_0px_0px,rgba(59,130,246,0.5)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px] box-border block w-full border border-gray-700 px-3 py-2 rounded-md border-solid"
                />
              </div>
              <div className="box-border gap-x-2 flex flex-col gap-y-2">
                <label className="box-border block">Your Message: </label>
                <textarea
                  name="message"
                  value={formData.message}
                  placeholder="Enter your message"
                  onChange={handleInputChange}
                  className="bg-slate-900 shadow-[rgb(255,255,255)_0px_0px_0px_0px,rgba(59,130,246,0.5)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px] box-border block resize-y w-full border-gray-700 px-3 py-2 rounded-md"
                ></textarea>
              </div>
              <div className="items-center box-border gap-x-3 flex flex-col gap-y-3">
                <button
                  type="submit"
                  className="text-xs font-medium items-center bg-transparent bg-[linear-gradient(to_right,rgb(236,72,153),rgb(124,58,237))] gap-x-1 flex tracking-[0.6px] leading-4 gap-y-1 text-center uppercase px-5 py-2.5 rounded-full md:text-sm md:font-semibold md:tracking-[0.7px] md:leading-5 md:px-12 md:py-3 cursor-pointer"
                >
                  <span className="text-xs font-medium items-center box-border gap-x-1 flex tracking-[0.6px] leading-4 gap-y-1 md:text-sm md:font-semibold md:tracking-[0.7px] md:leading-5">
                    Send Message
                    <img
                      src="https://c.animaapp.com/mek409lvoDLlSz/assets/icon-14.svg"
                      alt="Icon"
                      className="text-xs font-medium box-border h-5 tracking-[0.6px] leading-4 w-5 md:text-sm md:font-semibold md:tracking-[0.7px] md:leading-5"
                    />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="box-border w-auto md:w-9/12">
          <div className="box-border gap-x-5 flex flex-col gap-y-5 md:gap-x-9 md:gap-y-9">
            {contactInfo.map((info) => (
              <p
                key={info.id}
                className="text-sm items-center box-border gap-x-3 flex leading-5 gap-y-3 md:text-xl md:leading-7"
              >
                <img
                  src={info.iconSrc}
                  alt="Icon"
                  className="text-gray-800 text-sm bg-gray-400 box-border h-9 leading-5 w-9 p-2 rounded-full md:text-xl md:leading-7"
                />
                <span className="text-sm box-border block leading-5  bg-gray-400 md:text-xl md:leading-7">
                  {info.text}
                </span>
              </p>
            ))}
          </div>
          <div className="items-center box-border gap-x-5 flex gap-y-5 mt-8 md:gap-x-10 md:gap-y-10 md:mt-16">
            {socialLinksLarge.map((link) => (
              <a key={link.id} href={link.href} className="box-border block">
                <img
                  src={link.iconSrc}
                  alt={link.alt || "Icon"}
                  className="text-gray-800 bg-gray-400 box-border h-12 w-12 p-3 rounded-full"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
