import { motion } from 'framer-motion';
import { Instagram, Facebook, Mail, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-linen mt-16 pt-12 pb-6 px-6"
        >
            <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
                <div>
                    <h3 className="font-serif text-xl text-clay mb-4">CozyStitches</h3>
                    <p className="text-sage">Handmade crochet items crafted with love and sustainable materials.</p>
                </div>
                <div>
                    <h4 className="font-serif text-lg text-clay mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sage">
                        <li><Link to="/shop" className="hover:text-terracotta transition-colors">Shop</Link></li>
                        <li><Link to="/commissions" className="hover:text-terracotta transition-colors">Custom Orders</Link></li>
                        <li><Link to="/about" className="hover:text-terracotta transition-colors">About</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-serif text-lg text-clay mb-4">Help</h4>
                    <ul className="space-y-2 text-sage">
                        <li><Link to="/care-instructions" className="hover:text-terracotta transition-colors">Care Instructions</Link></li>
                        <li><Link to="/sizing-guide" className="hover:text-terracotta transition-colors">Sizing Guide</Link></li>
                        <li><Link to="/shipping-info" className="hover:text-terracotta transition-colors">Shipping</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-serif text-lg text-clay mb-4">Connect</h4>
                    <div className="flex gap-3 mb-4">
                        <motion.a whileHover={{ scale: 1.1 }} className="w-10 h-10 bg-sage/20 rounded-full flex items-center justify-center text-sage">
                            <Instagram className="w-5 h-5" />
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.1 }} className="w-10 h-10 bg-sage/20 rounded-full flex items-center justify-center text-sage">
                            <Facebook className="w-5 h-5" />
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.1 }} className="w-10 h-10 bg-sage/20 rounded-full flex items-center justify-center text-sage">
                            <Mail className="w-5 h-5" />
                        </motion.a>
                    </div>
                    <p className="text-sage">cozystitches@craft.com</p>
                </div>
            </div>
            <div className="border-t border-sage/20 pt-6 text-center text-sage">
                <p className="flex items-center justify-center gap-1">
                    © 2025 Made with <Heart className="w-4 h-4 text-dustyRose fill-dustyRose" /> by{' '}
                    <Link
                        to="/credits"
                        className="text-terracotta font-medium hover:text-clay transition-colors underline decoration-dotted underline-offset-4"
                    >
                        Vedant Darange
                    </Link>
                </p>
            </div>
        </motion.footer>
    );
};
