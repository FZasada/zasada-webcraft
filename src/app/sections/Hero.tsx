"use client";

import { FC } from "react";
import { COMPANY_NAME } from "@/config/constants";
import Image from "next/image";

const Hero: FC = () => {
    return (
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 min-h-screen flex items-center overflow-hidden">

            {/* Floating Blobs / Shapes */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full mix-blend-overlay filter blur-3xl opacity-40 animate-blob"></div>
            <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-20 w-80 h-80 bg-gradient-to-r from-pink-700 via-red-700 to-orange-600 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-between relative z-10">

                {/* Text Content */}
                <div className="text-center md:text-left space-y-6 md:space-y-8 max-w-lg">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
                        Crafting <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">stunning websites</span> for your business
                    </h1>
                    <p className="text-gray-300 text-lg sm:text-xl">
                        At {COMPANY_NAME}, we deliver modern, responsive, and tailor-made web solutions that elevate your brand and captivate your audience.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
                        <a
                            href="#contact"
                            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full shadow-xl hover:scale-105 transform transition-all duration-300 font-medium text-center"
                        >
                            Get a Quote
                        </a>
                        <a
                            href="#portfolio"
                            className="px-6 py-3 border-2 border-indigo-400 text-indigo-400 rounded-full hover:bg-indigo-500 hover:text-white transition-all duration-300 font-medium text-center"
                        >
                            View Portfolio
                        </a>
                    </div>
                </div>

                {/* Hero Image / Illustration */}
                <div className="mb-8 md:mb-0 md:ml-12 flex justify-center">
                    <Image
                        src="/hero-illustration-dark.png"
                        width={450}
                        height={450}
                        alt="Web design illustration"
                        className="w-80 sm:w-96 md:w-[450px] animate-fade-in"
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
                .animation-delay-2000 { animation-delay: 2s; }
                .animation-delay-4000 { animation-delay: 4s; }

                @keyframes fade-in {
                    0% { opacity: 0; transform: translateY(20px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in { animation: fade-in 1.2s ease-out forwards; }
            `}</style>
        </section>
    );
};

export default Hero;
