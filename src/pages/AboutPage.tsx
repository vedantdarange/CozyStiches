import { motion } from 'framer-motion';
import { Heart, Award, Package } from 'lucide-react';
import { YarnButton } from '../components/YarnButton';

export const AboutPage = () => {
    return (
        <div className="min-h-screen bg-cream pt-24 pb-12 px-6">
            <div className="max-w-5xl mx-auto">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="font-serif text-6xl text-clay mb-4">Meet the Maker</h1>
                    <p className="text-sage text-lg">One stitch at a time, creating cozy moments</p>
                </motion.div>

                {/* Maker Profile */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="w-full h-96 bg-gradient-to-br from-sage to-terracotta rounded-2xl shadow-2xl" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-4"
                    >
                        <h2 className="font-serif text-3xl text-clay">Hi, I'm [Name]! 👋</h2>
                        <p className="text-sage text-lg leading-relaxed">
                            I started crocheting during the pandemic, looking for a way to stay creative and calm.
                            What began as a hobby quickly turned into a passion, and now I get to share that passion with you!
                        </p>
                        <p className="text-sage leading-relaxed">
                            Every piece I make is crafted with intention - from selecting sustainable yarns to ensuring
                            each stitch is perfectly placed. I believe in slow fashion and creating items that last a lifetime.
                        </p>
                        <div className="flex items-center gap-4 pt-4">
                            <YarnButton>Follow My Journey</YarnButton>
                        </div>
                    </motion.div>
                </div>

                {/* Stats & Values */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-linen rounded-2xl p-8 mb-16"
                >
                    <h2 className="font-serif text-3xl text-clay text-center mb-8">My Values</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: <Heart className="w-12 h-12" />, title: "Handmade with Love", desc: "Every item is made by hand, not machines" },
                            { icon: <Award className="w-12 h-12" />, title: "Quality First", desc: "Using premium, sustainable materials" },
                            { icon: <Package className="w-12 h-12" />, title: "Eco-Friendly", desc: "Plastic-free packaging always" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="text-center space-y-3"
                            >
                                <div className="w-20 h-20 bg-terracotta/20 rounded-full flex items-center justify-center mx-auto text-terracotta">
                                    {item.icon}
                                </div>
                                <h3 className="font-serif text-xl text-clay">{item.title}</h3>
                                <p className="text-sage">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Process Video */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <h2 className="font-serif text-3xl text-clay text-center mb-8">Watch Me Work</h2>
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-gradient-to-r from-sage to-terracotta h-96 rounded-2xl flex items-center justify-center text-cream text-2xl font-serif shadow-xl"
                    >
                        [Time-lapse video placeholder]
                    </motion.div>
                </motion.section>
            </div>
        </div>
    );
};
