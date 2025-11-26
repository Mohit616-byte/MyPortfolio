import React from 'react';
import { motion } from 'framer-motion';

const UIDesigns = () => {
    // Placeholder data for designs
    const designs = [
        { title: 'Mobile Banking App', color: 'bg-indigo-500' },
        { title: 'Travel Dashboard', color: 'bg-rose-500' },
        { title: 'Smart Home Control', color: 'bg-emerald-500' },
        { title: 'Fashion E-commerce', color: 'bg-amber-500' },
        { title: 'Fitness Tracker', color: 'bg-cyan-500' },
        { title: 'Music Player', color: 'bg-violet-500' },
    ];

    return (
        <div className="container mx-auto px-6 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl font-bold mb-4 text-slate-900">UI Designs</h1>
                <p className="text-lg text-slate-600 mb-12">
                    A collection of my user interface designs and explorations.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {designs.map((design, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className={`w-full h-full ${design.color} flex items-center justify-center text-white/20`}>
                                {/* Placeholder for actual image */}
                                <span className="text-6xl font-bold">UI</span>
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <h3 className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{design.title}</h3>
                                <p className="text-white/80 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">View Details</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default UIDesigns;
