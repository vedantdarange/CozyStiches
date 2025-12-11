import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Menu, X, User, Home, Gift, Info, Mail } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { cart } = useShop();
    const navigate = useNavigate();
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 w-full bg-cream/95 backdrop-blur-md shadow-sm z-50 px-6 py-4"
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <motion.div
                        className="w-10 h-10 bg-gradient-to-r from-sage to-terracotta rounded-full flex items-center justify-center"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                        <Gift className="w-6 h-6 text-cream" />
                    </motion.div>
                    <span className="font-handwritten text-2xl text-clay">CozyStitches</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <NavLink to="/" icon={<Home className="w-4 h-4" />} text="Home" />
                    <NavLink to="/shop" icon={<Gift className="w-4 h-4" />} text="Shop" />
                    <NavLink to="/commissions" icon={<Mail className="w-4 h-4" />} text="Custom Orders" />
                    <NavLink to="/about" icon={<Info className="w-4 h-4" />} text="Meet the Maker" />
                </div>

                <div className="flex items-center gap-4">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="p-2 rounded-full hover:bg-sage/10"
                        onClick={() => navigate('/login')}
                    >
                        <User className="w-5 h-5 text-clay" />
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="relative p-2"
                        onClick={() => navigate('/cart')}
                    >
                        <ShoppingCart className="w-5 h-5 text-clay" />
                        <AnimatePresence>
                            {cartCount > 0 && (
                                <motion.span
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    exit={{ scale: 0 }}
                                    className="absolute -top-1 -right-1 bg-dustyRose text-cream text-xs w-5 h-5 rounded-full flex items-center justify-center"
                                >
                                    {cartCount}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.button>

                    <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden overflow-hidden"
                    >
                        <div className="px-6 py-4 bg-cream border-t flex flex-col gap-4">
                            <MobileNavLink to="/" text="Home" onClick={() => setIsOpen(false)} />
                            <MobileNavLink to="/shop" text="Shop" onClick={() => setIsOpen(false)} />
                            <MobileNavLink to="/commissions" text="Custom Orders" onClick={() => setIsOpen(false)} />
                            <MobileNavLink to="/about" text="Meet the Maker" onClick={() => setIsOpen(false)} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

const NavLink = ({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) => (
    <Link to={to} className="flex items-center gap-2 text-clay hover:text-terracotta transition-colors">
        {icon}
        <span className="font-medium">{text}</span>
    </Link>
);

const MobileNavLink = ({ to, text, onClick }: { to: string; text: string; onClick: () => void }) => (
    <Link to={to} onClick={onClick} className="py-2 text-clay hover:text-terracotta transition-colors">
        {text}
    </Link>
);
