import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { YarnButton } from '../components/YarnButton';
import { ArrowRight, Heart, Clock, Package } from 'lucide-react';
import { BackgroundBeams } from '@/components/aceternity/background-beams';

export const LandingPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-cream to-linen">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
                {/* Background Beams Effect */}
                <BackgroundBeams className="opacity-40" />

                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-sage/10 via-transparent to-terracotta/10 pointer-events-none"
                    animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
                    transition={{ duration: 20, repeat: Infinity }}
                />

                <div className="max-w-4xl mx-auto text-center z-10 relative">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="font-serif text-6xl md:text-8xl text-clay mb-6"
                    >
                        Handcrafted
                        <motion.span
                            className="block text-terracotta font-handwritten"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            With Love
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-lg text-sage mb-8 max-w-2xl mx-auto"
                    >
                        Every stitch tells a story. Discover unique crochet pieces made with sustainable yarns and cozy intentions.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link to="/shop">
                            <YarnButton size="lg">
                                Shop Collection <ArrowRight className="inline ml-2" />
                            </YarnButton>
                        </Link>
                        <Link to="/commissions">
                            <YarnButton variant="outline" size="lg">
                                Get Custom Made
                            </YarnButton>
                        </Link>
                    </motion.div>
                </div>

                {/* Floating Yarn Balls */}
                <FloatingYarnBall className="top-20 left-10" delay={0} />
                <FloatingYarnBall className="top-40 right-20" delay={0.5} />
                <FloatingYarnBall className="bottom-40 left-32" delay={1} />
            </section>

            {/* Features */}
            <section className="py-20 px-6 bg-cream">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                    {[
                        { icon: <Heart className="w-8 h-8" />, title: "100% Handmade", desc: "Each piece is carefully crocheted by skilled hands" },
                        { icon: <Clock className="w-8 h-8" />, title: "Made to Order", desc: "Customize colors, sizes, and designs just for you" },
                        { icon: <Package className="w-8 h-8" />, title: "Sustainable", desc: "Eco-friendly yarns and plastic-free packaging" }
                    ].map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="text-center p-8 rounded-2xl bg-linen hover:shadow-xl transition-shadow"
                        >
                            <div className="w-20 h-20 bg-terracotta/20 rounded-full flex items-center justify-center mx-auto mb-4 text-terracotta">
                                {feature.icon}
                            </div>
                            <h3 className="font-serif text-xl text-clay mb-2">{feature.title}</h3>
                            <p className="text-sage">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Featured Products Preview */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        className="font-serif text-4xl text-center text-clay mb-12"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        Featured Creations
                    </motion.h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[1, 2, 3].map(i => (
                            <ProductCard key={i} delay={i * 0.1} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

const FloatingYarnBall = ({ className, delay }: { className: string; delay: number }) => (
    <motion.div
        className={`absolute w-24 h-24 bg-gradient-to-br from-sage via-terracotta to-dustyRose rounded-full opacity-20 blur-sm ${className}`}
        animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, delay }}
    />
);

const ProductCard = ({ delay }: { delay: number }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay, duration: 0.5 }}
        whileHover={{ y: -10 }}
        className="bg-cream rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
    >
        <div className="h-64 bg-gradient-to-br from-sage to-terracotta opacity-80" />
        <div className="p-6">
            <h3 className="font-serif text-lg text-clay mb-2">Cozy Tote Bag</h3>
            <p className="text-terracotta font-bold">₹1,299</p>
        </div>
    </motion.div>
);
