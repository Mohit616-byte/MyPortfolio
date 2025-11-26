import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { FaWhatsapp, FaGithub, FaLinkedin, FaEnvelope, FaPinterest } from 'react-icons/fa';
import Background from './Background';

const Layout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const closeMenu = () => setIsMenuOpen(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Skills', path: '/skills' },
        { name: 'Projects', path: '/projects' },
        { name: 'Designs', path: '/designs' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-700 transition-colors duration-300">
            <Background />
            <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/50 shadow-sm transition-all duration-300">
                <div className="container mx-auto px-6 py-3">
                    <div className="flex justify-center items-center">
                        {/* Desktop Menu - Centered */}
                        <div className="hidden md:flex items-center">
                            <div className="flex items-center space-x-1">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${location.pathname === link.path
                                                ? 'text-indigo-600 bg-indigo-50'
                                                : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}

                                {/* WhatsApp Icon - Next to Contact */}
                                <a
                                    href="https://wa.me/918851521908?text=Hi%20Mohit,%20I%20like%20your%20project%20and%20I%20would%20like%20to%20work%20with%20you."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="WhatsApp"
                                    className="ml-2 p-2 text-slate-600 hover:text-green-600 transition-colors duration-200 hover:scale-110 transform"
                                >
                                    <FaWhatsapp size={28} />
                                </a>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 text-slate-600 hover:text-indigo-600 hover:bg-slate-100 rounded-lg transition-all focus:outline-none"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Menu Overlay */}
                    {isMenuOpen && (
                        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg border-b border-slate-200 shadow-lg py-4 px-6 animate-in slide-in-from-top-5 duration-200">
                            <div className="flex flex-col space-y-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        className={`px-4 py-3 text-base font-medium rounded-lg transition-all ${location.pathname === link.path
                                                ? 'text-indigo-600 bg-indigo-50'
                                                : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
                                            }`}
                                        onClick={closeMenu}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            <main className="flex-grow">
                <Outlet />
            </main>

            <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-400 py-12">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        {/* Footer Brand */}
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent mb-2">
                                Mohit Panchal
                            </h3>
                            <p className="text-sm text-slate-400">Building digital experiences that matter.</p>
                            <p className="text-xs text-slate-500 mt-1">Gurugram, Haryana, India</p>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            <a
                                href="https://github.com/Mohit616-byte"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-gray-900 hover:bg-gray-800 rounded-lg transition-all hover:scale-110 text-white"
                                aria-label="GitHub"
                            >
                                <FaGithub size={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/mohit-panchal-1ab0a6314"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-blue-700 hover:bg-blue-600 rounded-lg transition-all hover:scale-110 text-white"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin size={20} />
                            </a>
                            <a
                                href="mailto:mohit616gigabyte@gmail.com"
                                className="p-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-all hover:scale-110 text-white"
                                aria-label="Email"
                            >
                                <FaEnvelope size={20} />
                            </a>
                            <a
                                href="https://pin.it/3Wf6hrdoC"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-red-600 hover:bg-red-500 rounded-lg transition-all hover:scale-110 text-white"
                                aria-label="Pinterest"
                            >
                                <FaPinterest size={20} />
                            </a>
                            <a
                                href="https://wa.me/918851521908?text=Hi%20Mohit,%20I%20like%20your%20project%20and%20I%20would%20like%20to%20work%20with%20you."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-green-600 hover:bg-green-500 rounded-lg transition-all hover:scale-110 text-white"
                                aria-label="WhatsApp"
                            >
                                <FaWhatsapp size={20} />
                            </a>
                        </div>

                        {/* Copyright */}
                        <p className="text-sm text-slate-500">
                            &copy; {new Date().getFullYear()} Mohit Panchal. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
