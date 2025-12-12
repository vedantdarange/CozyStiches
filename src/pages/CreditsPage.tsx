import { motion } from 'framer-motion';
import { Mail, Instagram, Linkedin, Facebook, Code, Sparkles, Heart, ExternalLink } from 'lucide-react';
import { BackgroundBeams } from '@/components/aceternity/background-beams';

export const CreditsPage = () => {
    const socialLinks = [
        {
            name: 'Instagram',
            icon: Instagram,
            url: 'https://instagram.com/vedantdarang',
            color: 'from-pink-500 to-purple-500',
            hoverColor: 'hover:from-pink-600 hover:to-purple-600'
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            url: 'https://linkedin.com/in/vedantdarang',
            color: 'from-blue-500 to-blue-600',
            hoverColor: 'hover:from-blue-600 hover:to-blue-700'
        },
        {
            name: 'Facebook',
            icon: Facebook,
            url: 'https://facebook.com/vedantdarang',
            color: 'from-blue-600 to-indigo-600',
            hoverColor: 'hover:from-blue-700 hover:to-indigo-700'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-cream to-linen relative overflow-hidden">
            {/* Background Beams */}
            <BackgroundBeams className="opacity-30" />

            <div className="relative z-10 pt-24 pb-12 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <motion.div
                            className="inline-block mb-4"
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                        >
                            <Sparkles className="w-12 h-12 text-terracotta mx-auto" />
                        </motion.div>
                        <h1 className="font-serif text-5xl md:text-6xl text-clay mb-4">
                            Crafted With Love
                        </h1>
                        <p className="text-sage text-xl">
                            Meet the creator behind this experience
                        </p>
                    </motion.div>

                    {/* Main Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="bg-linen/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-sage/20 mb-8"
                    >
                        {/* Creator Info */}
                        <div className="text-center mb-8">
                            <motion.div
                                className="w-32 h-32 bg-gradient-to-br from-terracotta to-dustyRose rounded-full mx-auto mb-6 flex items-center justify-center"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Code className="w-16 h-16 text-cream" />
                            </motion.div>
                            <motion.h2
                                className="font-serif text-4xl text-clay mb-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                Vedant Darange
                            </motion.h2>
                            <motion.p
                                className="text-sage text-lg mb-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                            >
                                Full-Stack Developer & UI/UX Enthusiast
                            </motion.p>
                        </div>

                        {/* Description */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="bg-cream/50 rounded-2xl p-6 mb-8"
                        >
                            <p className="text-clay text-center leading-relaxed mb-4">
                                I designed and developed this beautiful e-commerce platform with premium animations,
                                stunning UI components, and a cozy aesthetic that brings handcrafted products to life.
                            </p>
                            <motion.div
                                className="flex items-center justify-center gap-2 text-terracotta"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <Heart className="w-5 h-5 fill-current" />
                                <span className="font-medium">Made with passion & creativity</span>
                            </motion.div>
                        </motion.div>

                        {/* CTA Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="text-center mb-8"
                        >
                            <h3 className="font-serif text-2xl text-clay mb-4">
                                Want a Website Like This?
                            </h3>
                            <p className="text-sage mb-6">
                                I create stunning, high-performance websites with premium animations and modern design.
                                Let's bring your vision to life!
                            </p>
                        </motion.div>

                        {/* Email Contact */}
                        <motion.a
                            href="mailto:vedmodzyt@gmail.com"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className="block bg-gradient-to-r from-terracotta to-dustyRose text-cream rounded-2xl p-6 mb-8 shadow-lg hover:shadow-2xl transition-all"
                        >
                            <div className="flex items-center justify-center gap-3">
                                <Mail className="w-6 h-6" />
                                <span className="text-lg font-medium">vedmodzyt@gmail.com</span>
                                <ExternalLink className="w-5 h-5" />
                            </div>
                        </motion.a>

                        {/* Social Links */}
                        <div className="grid md:grid-cols-3 gap-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1 + index * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`bg-gradient-to-r ${social.color} ${social.hoverColor} text-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all`}
                                >
                                    <div className="flex items-center justify-center gap-3">
                                        <social.icon className="w-5 h-5" />
                                        <span className="font-medium">{social.name}</span>
                                        <ExternalLink className="w-4 h-4" />
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Tech Stack */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.3 }}
                        className="bg-linen/60 backdrop-blur-sm rounded-2xl p-6 text-center"
                    >
                        <h3 className="font-serif text-xl text-clay mb-4">Built With</h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Aceternity UI', 'Vite'].map((tech, index) => (
                                <motion.span
                                    key={tech}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.4 + index * 0.1 }}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="bg-sage/20 text-clay px-4 py-2 rounded-full text-sm font-medium border border-sage/30"
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Floating Elements */}
                    <motion.div
                        className="absolute top-20 left-10 w-20 h-20 bg-sage/20 rounded-full blur-xl"
                        animate={{
                            y: [0, -20, 0],
                            x: [0, 10, 0],
                        }}
                        transition={{ duration: 5, repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute bottom-20 right-10 w-32 h-32 bg-terracotta/20 rounded-full blur-xl"
                        animate={{
                            y: [0, 20, 0],
                            x: [0, -10, 0],
                        }}
                        transition={{ duration: 6, repeat: Infinity }}
                    />
                </div>
            </div>
        </div>
    );
};
