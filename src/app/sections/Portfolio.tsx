"use client";

import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Portfolio: FC = () => {
    const projects = [
        { title: "Corporate Website Redesign", description: "Modern, responsive website for a tech company.", image: "/portfolio1.jpg" },
        { title: "E-Commerce Store", description: "Full-featured online store with payment integration.", image: "/portfolio2.jpg" },
        { title: "Landing Page Campaign", description: "High-converting landing page for marketing campaign.", image: "/portfolio3.jpg" },
        { title: "Portfolio Showcase", description: "Creative portfolio website for a designer.", image: "/portfolio4.jpg" },
    ];

    return (
        <section id="portfolio" className="py-20 bg-gray-900 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.h2
                    className="text-3xl sm:text-4xl font-extrabold text-white mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Our Portfolio
                </motion.h2>
                <motion.p
                    className="text-gray-300 text-lg sm:text-xl mb-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    A selection of our recent projects, showcasing our expertise and creativity.
                </motion.p>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.2 } } }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="relative overflow-hidden rounded-2xl shadow-xl group"
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                            }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={450}
                                height={300}
                                className="object-cover w-full h-64"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 flex flex-col justify-end p-4">
                                <h3 className="text-white text-xl font-semibold">{project.title}</h3>
                                <p className="text-gray-300 text-sm">{project.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;
