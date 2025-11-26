import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div className="relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-violet-100 rounded-full blur-3xl opacity-50"></div>
            </div>

            <div className="container mx-auto px-6 py-20 md:py-32 flex flex-col-reverse md:flex-row items-center justify-between gap-12">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex-1 text-center md:text-left"
                >
                    <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-full">
                        Available for work
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Mohit Panchal</span>
                    </h1>
                    <h2 className="text-xl md:text-2xl text-slate-600 mb-6 font-medium">
                        Frontend Developer & UI Designer
                    </h2>
                    <p className="text-lg text-slate-500 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        I craft responsive, high-performance websites with modern aesthetics.
                        Passionate about bridging the gap between design and engineering.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                        <Link
                            to="/projects"
                            className="px-8 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center gap-2 group"
                        >
                            View Work
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to="/contact"
                            className="px-8 py-3 bg-white text-slate-700 border border-slate-200 rounded-full font-medium hover:border-indigo-200 hover:bg-indigo-50 transition-all flex items-center gap-2"
                        >
                            Contact Me
                        </Link>
                    </div>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex-1 flex justify-center md:justify-end relative"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">

                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-violet-600 rounded-full opacity-10 blur-2xl animate-pulse"></div>

                        {/* Circular Image Wrapper */}
                        <div className="relative w-full h-full rounded-full border-4 border-white shadow-2xl overflow-hidden bg-slate-100">
                            {/* Your Image */}
                            <img
                                src="/image/Myphoto.webp"
                                alt="Mohit Panchal"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Floating badges */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            className="absolute top-10 -left-4 md:-left-10 bg-white p-3 rounded-2xl shadow-xl flex items-center gap-3"
                        >
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">R</div>
                            <div>
                                <p className="text-xs text-slate-500">Expert in</p>
                                <p className="text-sm font-bold text-slate-800">React</p>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-10 -right-4 md:-right-10 bg-white p-3 rounded-2xl shadow-xl flex items-center gap-3"
                        >
                            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">UI</div>
                            <div>
                                <p className="text-xs text-slate-500">Passion for</p>
                                <p className="text-sm font-bold text-slate-800">Design</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
