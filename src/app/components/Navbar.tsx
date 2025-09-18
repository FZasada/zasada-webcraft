"use client";

import { useState, FC } from "react";
import { Menu, X } from "lucide-react";
import { COMPANY_NAME, NAV_LINKS } from "@/config/constants";

const Navbar: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-md shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">

                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                            {COMPANY_NAME}
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-gray-200 hover:text-indigo-400 font-medium transition duration-300 relative group"
                            >
                                {link.label}
                                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-400 transition-all group-hover:w-full"></span>
                            </a>
                        ))}

                        {/* CTA Button */}
                        <a
                            href="#contact"
                            className="ml-4 px-5 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full shadow-xl hover:scale-105 transform transition-all duration-300 font-medium"
                        >
                            Get a Quote
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-200 hover:text-indigo-400 focus:outline-none transition"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gray-800/95 backdrop-blur-md shadow-lg">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="block px-6 py-3 text-gray-200 hover:text-indigo-400 transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}

                    {/* Mobile CTA */}
                    <a
                        href="#contact"
                        className="block mx-4 my-3 px-4 py-2 text-white bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-center shadow-xl hover:scale-105 transform transition-all duration-300"
                    >
                        Get a Quote
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
