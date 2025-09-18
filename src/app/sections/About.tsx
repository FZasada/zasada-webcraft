"use client";

import { FC } from "react";
import Image from "next/image";
import { COMPANY_NAME } from "@/config/constants";

const About: FC = () => {
    return (
        <section
            id="about"
            className="relative bg-gray-900 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        >
            {/* Floating Blobs */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-teal-500 via-indigo-500 to-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-3000"></div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                {/* Text Content */}
                <div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
                        Meet <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">{COMPANY_NAME}</span>
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        We’re Florian and Wiktoria, a husband-and-wife duo combining technical expertise and creative design to craft unique digital experiences.
                    </p>
                    <p className="text-gray-400 mb-6">
                        Florian is a <span className="text-indigo-400 font-semibold">Full-Stack Engineer</span> with over 6 years of experience building scalable web solutions for different companies.
                        His focus is on clean architecture, performance, and long-term maintainability.
                    </p>
                    <p className="text-gray-400 mb-6">
                        Wiktoria is a <span className="text-pink-400 font-semibold">Multimedia Designer</span> with a strong background in <span className="text-purple-400">UI/UX design</span>.
                        She specializes in creating visually stunning, user-friendly interfaces that bring ideas to life.
                    </p>
                    <p className="text-gray-300 mb-6">
                        Together, we form {COMPANY_NAME} — a small but mighty studio where design meets development to deliver websites that not only look amazing but also perform flawlessly.
                    </p>
                    <a
                        href="#services"
                        className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full shadow-xl hover:scale-105 transform transition-all duration-300 font-medium"
                    >
                        Discover Our Services
                    </a>
                </div>

                {/* Illustration / Image */}
                <div className="flex justify-center md:justify-end">
                    <Image
                        src="/about-us.png"
                        width={450}
                        height={450}
                        alt="About us illustration"
                        className="rounded-2xl shadow-2xl w-80 sm:w-96 md:w-[450px] animate-fade-in"
                    />
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

                @keyframes fade-in {
                    0% { opacity: 0; transform: translateY(20px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in { animation: fade-in 1.2s ease-out forwards; }
            `}</style>
        </section>
    );
};

export default About;
