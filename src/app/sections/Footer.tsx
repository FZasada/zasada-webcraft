"use client";

import { FC } from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { COMPANY_NAME, NAV_LINKS } from "@/config/constants";

const Footer: FC = () => {
    return (
        <footer className="relative bg-gray-900 text-gray-300 py-16 overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-teal-500 via-indigo-500 to-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-3000"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start gap-12">

                {/* Company Info */}
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-2xl font-bold text-white mb-2">{COMPANY_NAME}</h2>
                    <p className="text-gray-400 max-w-sm">
                        Crafting modern, responsive web solutions to help your business grow online.
                    </p>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                    <div className="flex flex-col space-y-2">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="hover:text-indigo-400 transition-colors duration-300"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Contact & Social */}
                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-white font-semibold mb-4">Contact</h3>
                    <p className="text-gray-300">Email: info@zasadaweb.com</p>
                    <p className="text-gray-300">Phone: +1 234 567 890</p>

                    {/* Social Icons */}
                    <div className="flex justify-center md:justify-start mt-4 space-x-4">
                        <a href="#" className="hover:text-indigo-400 transition-colors">
                            <Facebook size={24} />
                        </a>
                        <a href="#" className="hover:text-blue-400 transition-colors">
                            <Twitter size={24} />
                        </a>
                        <a href="#" className="hover:text-indigo-600 transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="#" className="hover:text-pink-400 transition-colors">
                            <Instagram size={24} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
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
        </footer>
    );
};

export default Footer;
