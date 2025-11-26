import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Terminal, Coffee } from 'lucide-react';

const About = () => {
    return (
        <div className="container mx-auto px-6 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="text-4xl font-bold mb-8 text-slate-900">About Me</h1>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                        <p>
                            Hello! I'm Mohit, a B.Tech CSE AI student and a passionate Frontend Developer and UI Designer based in India.
                            My journey began with a curiosity for how things work on the web, which quickly evolved into a love for crafting beautiful, functional interfaces.
                        </p>
                        <p>
                            With a background in both design and development, I bridge the gap between aesthetics and functionality.
                            I specialize in building responsive web applications using React and Tailwind CSS, ensuring every pixel serves a purpose.
                        </p>
                        <p>
                            When I'm not coding, you can find me playing cricket or watching movies and series as I am a huge cinephile.
                            I also love exploring new design trends and sipping a good cup of coffee while brainstorming my next project.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                            <Code className="text-indigo-600 mb-3" size={32} />
                            <h3 className="font-bold text-slate-800">Frontend</h3>
                            <p className="text-sm text-slate-500">React, HTML, CSS</p>
                        </div>
                        <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                            <Palette className="text-violet-600 mb-3" size={32} />
                            <h3 className="font-bold text-slate-800">Design</h3>
                            <p className="text-sm text-slate-500">UI/UX, Figma, Canva</p>
                        </div>
                        <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                            <Terminal className="text-emerald-600 mb-3" size={32} />
                            <h3 className="font-bold text-slate-800">Backend</h3>
                            <p className="text-sm text-slate-500">Python, Node.js</p>
                        </div>
                        <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                            <Coffee className="text-amber-600 mb-3" size={32} />
                            <h3 className="font-bold text-slate-800">Life</h3>
                            <p className="text-sm text-slate-500">Coffee, Travel</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default About;
