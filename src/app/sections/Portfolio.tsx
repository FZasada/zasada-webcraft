"use client";

import { FC } from "react";
import Image from "next/image";

const Portfolio: FC = () => {
    const projects = [
        {
            title: "Corporate Website Redesign",
            description: "Modern, responsive website for a tech company.",
            image: "/portfolio1.jpg",
        },
        {
            title: "E-Commerce Store",
            description: "Full-featured online store with payment integration.",
            image: "/portfolio2.jpg",
        },
        {
            title: "Landing Page Campaign",
            description: "High-converting landing page for marketing campaign.",
            image: "/portfolio3.jpg",
        },
        {
            title: "Portfolio Showcase",
            description: "Creative portfolio website for a designer.",
            image: "/portfolio4.jpg",
        },
    ];

    return (
        <section className="py-20 bg-gray-900 relative overflow-hidden">
            {/* Floating Blobs */}
            <div className="absolute top-0 left-10 w-72 h-72 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-0 right-10 w-80 h-80 bg-gradient-to-r from-teal-500 via-indigo-500 to-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-3000"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                    Our Portfolio
                </h2>
                <p className="text-gray-300 text-lg sm:text-xl mb-12">
                    A selection of our recent projects, showcasing our expertise and creativity.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden rounded-2xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl group"
                        >
                            <Image
                                src="/hero-illustration-dark.png"
                                alt="Web design illustration"
                                width={450}
                                height={450}
                                className="w-80 sm:w-96 md:w-[450px] animate-fade-in"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 flex flex-col justify-end p-4">
                                <h3 className="text-white text-xl font-semibold">{project.title}</h3>
                                <p className="text-gray-300 text-sm">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Blob Animation Styles */}
            <style jsx>{`
                @keyframes blob {
                    0%, 100% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(20px, -15px) scale(1.05); }
                    66% { transform: translate(-15px, 20px) scale(0.95); }
                }
                .animate-blob { animation: blob 10s infinite; }
                .animation-delay-3000 { animation-delay: 3s; }
            `}</style>
        </section>
    );
};

export default Portfolio;
