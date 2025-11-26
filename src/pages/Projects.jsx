import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'A full-featured online shopping platform with cart functionality, payment integration, and admin dashboard.',
            tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            github: '#',
            live: '#',
            color: 'bg-blue-50'
        },
        {
            title: 'Task Management App',
            description: 'Collaborative task manager with real-time updates, drag-and-drop interface, and team collaboration features.',
            tech: ['React', 'Firebase', 'Tailwind CSS'],
            github: '#',
            live: '#',
            color: 'bg-purple-50'
        },
        {
            title: 'Weather Dashboard',
            description: 'Beautiful weather application with location-based forecasts, interactive maps, and detailed weather metrics.',
            tech: ['React', 'OpenWeather API', 'Chart.js'],
            github: '#',
            live: '#',
            color: 'bg-emerald-50'
        },
    ];

    return (
        <div className="container mx-auto px-6 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl font-bold mb-4 text-slate-900">Featured Projects</h1>
                <p className="text-lg text-slate-600 mb-12 max-w-2xl">
                    Here are some of the projects I've worked on. Each one was an opportunity to learn something new and solve interesting problems.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`group relative p-8 rounded-3xl border border-slate-100 hover:border-indigo-100 hover:shadow-xl transition-all duration-300 ${project.color}`}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="px-3 py-1 text-xs font-medium bg-white/60 text-slate-600 rounded-full border border-slate-200/50">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <p className="text-slate-600 mb-8 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex gap-4">
                                <a href={project.github} className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors">
                                    <Github size={18} /> Code
                                </a>
                                <a href={project.live} className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors">
                                    <ExternalLink size={18} /> Live Demo
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Projects;
