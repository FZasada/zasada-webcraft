"use client";

import { FC, useState } from "react";

const Contact: FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section id="contact" className="relative bg-gray-900 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-teal-500 via-indigo-500 to-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

            <div className="max-w-3xl mx-auto relative z-10">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-6">
                    Get in <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Touch</span>
                </h2>
                <p className="text-gray-700">
                    Have a project in mind or want to collaborate? Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>

                {submitted ? (
                    <div className="text-center py-12 px-6 bg-gray-800/70 backdrop-blur-md rounded-xl shadow-xl">
                        <h3 className="text-xl font-semibold text-indigo-400 mb-2">Thank you!</h3>
                        <p className="text-gray-300">Your message has been sent. We&apos;ll reach out to you shortly.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 bg-gray-800/70 backdrop-blur-md p-8 rounded-2xl shadow-xl">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="w-full px-4 py-3 bg-gray-900/50 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="w-full px-4 py-3 bg-gray-900/50 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
                            required
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            className="w-full px-4 py-3 bg-gray-900/50 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition resize-none h-32"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full shadow-xl hover:scale-105 transform transition-all duration-300 font-medium"
                        >
                            Send Message
                        </button>
                    </form>
                )}
            </div>

            {/* Blob Animation Styles */}
            <style jsx>{`
                @keyframes blob {
                    0%, 100% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(20px, -15px) scale(1.05); }
                    66% { transform: translate(-15px, 20px) scale(0.95); }
                }
                .animate-blob { animation: blob 10s infinite; }
                .animation-delay-2000 { animation-delay: 2s; }
            `}</style>
        </section>
    );
};

export default Contact;
