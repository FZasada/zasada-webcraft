"use client";

import { FC, useState } from "react";
import { motion } from "framer-motion";

const Contact: FC = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
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
            <div className="max-w-3xl mx-auto relative z-10">
                <motion.h2
                    className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Get in{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                        Touch
                    </span>
                </motion.h2>

                {submitted ? (
                    <motion.div
                        className="text-center py-12 px-6 bg-gray-800/70 backdrop-blur-md rounded-xl shadow-xl"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-xl font-semibold text-indigo-400 mb-2">Thank you!</h3>
                        <p className="text-gray-300">Your message has been sent. We&apos;ll reach out shortly.</p>
                    </motion.div>
                ) : (
                    <motion.form
                        onSubmit={handleSubmit}
                        className="grid grid-cols-1 gap-6 bg-gray-800/70 backdrop-blur-md p-8 rounded-2xl shadow-xl"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="w-full px-4 py-3 bg-gray-900/50 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="w-full px-4 py-3 bg-gray-900/50 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                            required
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            className="w-full px-4 py-3 bg-gray-900/50 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none h-32"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full shadow-xl hover:scale-105 transform transition-all duration-300 font-medium"
                        >
                            Send Message
                        </button>
                    </motion.form>
                )}
            </div>
        </section>
    );
};

export default Contact;
