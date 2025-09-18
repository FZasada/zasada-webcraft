"use client";

import { FC } from "react";
import { Code, Palette, PenTool, Settings } from "lucide-react";
import { motion } from "framer-motion";

const Services: FC = () => {
    const services = [
        { icon: <Code className="w-12 h-12 text-indigo-400" />, title: "Custom Web Development", description: "We build modern, responsive, and scalable websites tailored to your business needs." },
        { icon: <Palette className="w-12 h-12 text-purple-400" />, title: "UI/UX Design", description: "Designing intuitive and visually stunning interfaces that enhance user experience." },
        { icon: <PenTool className="w-12 h-12 text-pink-400" />, title: "Logo & Brand Design", description: "Crafting distinctive logos and brand identities that elevate your business." },
        { icon: <Settings className="w-12 h-12 text-teal-400" />, title: "SEO & Maintenance", description: "Optimizing your website for search engines and keeping it updated and secure." },
    ];

    return (
        <section id="services" className="py-20 bg-gray-900 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.h2
                    className="text-3xl sm:text-4xl font-extrabold text-white mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Our Services
                </motion.h2>
                <motion.p
                    className="text-gray-300 text-lg sm:text-xl mb-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    We offer a wide range of web solutions to help your business succeed online.
                </motion.p>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        show: { transition: { staggerChildren: 0.2 } },
                    }}
                >
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            className="bg-gray-800/80 backdrop-blur-md p-6 rounded-2xl shadow-xl"
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                            }}
                        >
                            <div className="mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                            <p className="text-gray-300">{service.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
