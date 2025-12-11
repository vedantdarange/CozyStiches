import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { YarnButton } from '../components/YarnButton';
import { useShop } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

export const CartPage = () => {
    const { cart, removeFromCart, updateQuantity } = useShop();
    const navigate = useNavigate();
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 2000 ? 0 : 150;
    const total = subtotal + shipping;

    return (
        <div className="min-h-screen bg-cream pt-24 pb-12 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-serif text-4xl text-clay mb-8"
                >
                    Your Cart ({cart.length})
                </motion.h1>

                <AnimatePresence>
                    {cart.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-20"
                        >
                            <ShoppingBag className="w-24 h-24 text-sage mx-auto mb-6 opacity-50" />
                            <h2 className="font-serif text-2xl text-clay mb-4">Your cart is empty</h2>
                            <p className="text-sage mb-6">Add some cozy items to get started!</p>
                            <YarnButton onClick={() => navigate('/shop')}>
                                Continue Shopping
                            </YarnButton>
                        </motion.div>
                    ) : (
                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Cart Items */}
                            <div className="lg:col-span-2 space-y-4">
                                <AnimatePresence>
                                    {cart.map((item, i) => (
                                        <motion.div
                                            key={item.id}
                                            initial={{ opacity: 0, x: -50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 50 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="bg-linen rounded-2xl p-6 flex flex-col md:flex-row gap-6"
                                        >
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                className="w-full md:w-32 h-32 bg-gradient-to-br from-sage/30 to-terracotta/30 rounded-xl"
                                            />
                                            <div className="flex-1">
                                                <h3 className="font-serif text-xl text-clay mb-2">{item.name}</h3>
                                                <p className="text-sage mb-2">
                                                    {item.selectedVariant.size && `Size: ${item.selectedVariant.size}`}
                                                    {item.selectedVariant.color && ` • Color: ${item.selectedVariant.color}`}
                                                </p>
                                                <p className="text-terracotta font-bold text-lg">₹{item.price}</p>
                                            </div>
                                            <div className="flex flex-col items-center justify-between gap-4">
                                                <div className="flex items-center gap-3">
                                                    <motion.button
                                                        whileHover={{ scale: 1.1 }}
                                                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                                        className="w-8 h-8 rounded-full bg-cream flex items-center justify-center"
                                                    >
                                                        <Minus className="w-4 h-4" />
                                                    </motion.button>
                                                    <span className="font-medium text-clay w-8 text-center">{item.quantity}</span>
                                                    <motion.button
                                                        whileHover={{ scale: 1.1 }}
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="w-8 h-8 rounded-full bg-cream flex items-center justify-center"
                                                    >
                                                        <Plus className="w-4 h-4" />
                                                    </motion.button>
                                                </div>
                                                <motion.button
                                                    whileHover={{ scale: 1.1 }}
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-dustyRose hover:text-red-500 transition-colors"
                                                >
                                                    <Trash2 className="w-5 h-5" />
                                                </motion.button>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>

                            {/* Order Summary */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-linen rounded-2xl p-6 h-fit sticky top-32"
                            >
                                <h2 className="font-serif text-2xl text-clay mb-6">Order Summary</h2>
                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between text-clay">
                                        <span>Subtotal</span>
                                        <span>₹{subtotal}</span>
                                    </div>
                                    <div className="flex justify-between text-clay">
                                        <span>Shipping</span>
                                        <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
                                    </div>
                                    <motion.div
                                        className="border-t border-sage/30 pt-3 flex justify-between font-bold text-clay text-lg"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <span>Total</span>
                                        <span>₹{total}</span>
                                    </motion.div>
                                </div>
                                <YarnButton
                                    className="w-full"
                                    onClick={() => navigate('/checkout')}
                                >
                                    Proceed to Checkout
                                </YarnButton>
                                <motion.p
                                    className="text-center text-sage mt-4"
                                    animate={{ opacity: [1, 0.7, 1] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                >
                                    🚚 Free shipping on orders above ₹2,000
                                </motion.p>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};
