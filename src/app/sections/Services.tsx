"use client";

import { FC } from "react";
import { Code, Palette, PenTool, Settings } from "lucide-react";

const Services: FC = () => {
    const services = [
        {
            icon: <Code className="w-12 h-12 text-indigo-400" />,
            title: "Custom Web Development",
            description:
                "We build modern, responsive, and scalable websites tailored to your business needs.",
        },
        {
            icon: <Palette className="w-12 h-12 text-purple-400" />,
            title: "UI/UX Design",
            description:
                "Designing intuitive and visually stunning interfaces that enhance user experience.",
        },
        {
            icon: <PenTool className="w-12 h-12 text-pink-400" />,
            title: "Logo & Brand Design",
            description:
                "Crafting distinctive logos and comprehensive brand identities that elevate your business and leave a lasting impression.",
        },
        {
            icon: <Settings className="w-12 h-12 text-teal-400" />,
            title: "SEO & Maintenance",
            description:
                "Optimizing your website for search engines and keeping it updated and secure.",
        },
    ];

    return (
        <section className="py-20 bg-gray-900 relative overflow-hidden">
            {/* Floating Blobs */}
            <div className="absolute top-0 left-10 w-72 h-72 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-0 right-10 w-80 h-80 bg-gradient-to-r from-teal-500 via-indigo-500 to-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-3000"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                    Our Services
                </h2>
                <p className="text-gray-300 text-lg sm:text-xl mb-12">
                    We offer a wide range of web solutions to help your business succeed online.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-gray-800/80 backdrop-blur-md p-6 rounded-2xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl"
                        >
                            <div className="mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                            <p className="text-gray-300">{service.description}</p>
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

export default Services;
