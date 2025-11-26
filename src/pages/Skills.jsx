import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        { name: 'HTML5', level: 95, color: 'bg-orange-500' },
        { name: 'CSS3 / Tailwind', level: 90, color: 'bg-blue-500' },
        { name: 'React.js', level: 85, color: 'bg-cyan-500' },
        { name: 'Python', level: 80, color: 'bg-yellow-500' },
        { name: 'UI/UX Design', level: 85, color: 'bg-purple-500' },
        { name: 'Canva', level: 80, color: 'bg-pink-500' },
        { name: 'Git / GitHub', level: 75, color: 'bg-slate-700' },
    ];

    return (
        <div className="container mx-auto px-6 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="text-4xl font-bold mb-4 text-slate-900">My Skills</h1>
                <p className="text-lg text-slate-600 mb-12">
                    A showcase of my technical expertise and proficiency levels.
                </p>

                <div className="grid gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
                        >
                            <div className="flex justify-between mb-2">
                                <span className="font-bold text-slate-800">{skill.name}</span>
                                <span className="text-slate-500">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className={`h-full rounded-full ${skill.color}`}
                                ></motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Skills;
