import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, CreditCard, Truck, User, Phone } from 'lucide-react';
import { YarnButton } from '../components/YarnButton';
import { useShop } from '../context/ShopContext';
import { ProgressBar } from '@/components/custom/ProgressBar';
import { Confetti } from '@/components/custom/Confetti';

export const CheckoutPage = () => {
    const { cart } = useShop();
    const [step, setStep] = useState(1);
    const [showConfetti, setShowConfetti] = useState(false);
    const [shippingInfo, setShippingInfo] = useState({
        name: '',
        phone: '',
        address: '',
        city: '',
        pincode: '',
        state: ''
    });
    const [paymentMethod, setPaymentMethod] = useState('cod');

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 2000 ? 0 : 150;
    const total = subtotal + shipping;

    return (
        <div className="min-h-screen bg-cream pt-24 pb-12 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-serif text-4xl text-clay mb-8 text-center"
                >
                    Checkout
                </motion.h1>

                {/* Progress Steps */}
                <div className="flex justify-center mb-12">
                    <div className="flex items-center gap-4">
                        {[1, 2, 3].map(s => (
                            <motion.div
                                key={s}
                                className="flex items-center gap-4"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${step >= s ? 'bg-terracotta text-cream' : 'bg-sage/20 text-sage'
                                        }`}
                                >
                                    {s}
                                </motion.div>
                                {s < 3 && <div className={`w-16 h-1 ${step > s ? 'bg-terracotta' : 'bg-sage/20'}`} />}
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Left: Form */}
                    <div className="md:col-span-2 space-y-6">
                        <AnimatePresence mode='wait'>
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 50 }}
                                    className="bg-linen rounded-2xl p-6"
                                >
                                    <h2 className="font-serif text-2xl text-clay mb-6 flex items-center gap-3">
                                        <User className="w-6 h-6 text-terracotta" />
                                        Shipping Information
                                    </h2>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-clay font-medium mb-2">Full Name</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-3 rounded-xl border border-sage/30 focus:border-terracotta focus:outline-none bg-cream"
                                                placeholder="Jane Doe"
                                                value={shippingInfo.name}
                                                onChange={(e) => setShippingInfo(prev => ({ ...prev, name: e.target.value }))}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-clay font-medium mb-2">Phone</label>
                                            <div className="relative">
                                                <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-sage" />
                                                <input
                                                    type="tel"
                                                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-sage/30 focus:border-terracotta focus:outline-none bg-cream"
                                                    placeholder="9876543210"
                                                    value={shippingInfo.phone}
                                                    onChange={(e) => setShippingInfo(prev => ({ ...prev, phone: e.target.value }))}
                                                />
                                            </div>
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="block text-clay font-medium mb-2">Address</label>
                                            <textarea
                                                className="w-full px-4 py-3 rounded-xl border border-sage/30 focus:border-terracotta focus:outline-none bg-cream h-24"
                                                placeholder="House no., Street, Landmark"
                                                value={shippingInfo.address}
                                                onChange={(e) => setShippingInfo(prev => ({ ...prev, address: e.target.value }))}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-clay font-medium mb-2">City</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-3 rounded-xl border border-sage/30 focus:border-terracotta focus:outline-none bg-cream"
                                                value={shippingInfo.city}
                                                onChange={(e) => setShippingInfo(prev => ({ ...prev, city: e.target.value }))}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-clay font-medium mb-2">Pincode</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-3 rounded-xl border border-sage/30 focus:border-terracotta focus:outline-none bg-cream"
                                                value={shippingInfo.pincode}
                                                onChange={(e) => setShippingInfo(prev => ({ ...prev, pincode: e.target.value }))}
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 50 }}
                                    className="bg-linen rounded-2xl p-6"
                                >
                                    <h2 className="font-serif text-2xl text-clay mb-6 flex items-center gap-3">
                                        <Truck className="w-6 h-6 text-terracotta" />
                                        Calculate Shipping
                                    </h2>
                                    <div className="space-y-4">
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-xl border border-sage/30 focus:border-terracotta focus:outline-none bg-cream"
                                            placeholder="Enter pincode to calculate"
                                        />
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="bg-sage/10 rounded-xl p-4"
                                        >
                                            <p className="text-clay">Estimated delivery: <span className="font-bold">5-7 business days</span></p>
                                            <p className="text-sage text-sm">Shipping charges: ₹{shipping === 0 ? 'Free!' : shipping}</p>
                                        </motion.div>
                                        <YarnButton>Update Shipping</YarnButton>
                                    </div>
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 50 }}
                                    className="bg-linen rounded-2xl p-6"
                                >
                                    <h2 className="font-serif text-2xl text-clay mb-6 flex items-center gap-3">
                                        <CreditCard className="w-6 h-6 text-terracotta" />
                                        Payment Method
                                    </h2>
                                    <div className="space-y-4">
                                        {['cod', 'upi', 'card'].map(method => (
                                            <motion.label
                                                key={method}
                                                whileHover={{ scale: 1.02 }}
                                                className="flex items-center gap-4 p-4 bg-cream rounded-xl cursor-pointer border-2 transition-colors"
                                                style={{ borderColor: paymentMethod === method ? '#D4A574' : 'transparent' }}
                                            >
                                                <input
                                                    type="radio"
                                                    name="payment"
                                                    value={method}
                                                    checked={paymentMethod === method}
                                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                                    className="w-5 h-5 text-terracotta"
                                                />
                                                <span className="text-clay capitalize">
                                                    {method === 'cod' ? 'Cash on Delivery' : method === 'upi' ? 'UPI Payment' : 'Credit/Debit Card'}
                                                </span>
                                            </motion.label>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Navigation */}
                        <div className="flex justify-between">
                            <YarnButton
                                variant="outline"
                                onClick={() => setStep(Math.max(1, step - 1))}
                                disabled={step === 1}
                            >
                                Back
                            </YarnButton>
                            {step < 3 && (
                                <YarnButton onClick={() => setStep(step + 1)}>
                                    Next Step
                                </YarnButton>
                            )}
                        </div>
                    </div>

                    {/* Right: Summary */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-linen rounded-2xl p-6 h-fit sticky top-32"
                    >
                        <h2 className="font-serif text-2xl text-clay mb-6">Order Summary</h2>
                        <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                            {cart.map(item => (
                                <div key={item.id} className="flex justify-between text-clay">
                                    <span>{item.name} x{item.quantity}</span>
                                    <span>₹{item.price * item.quantity}</span>
                                </div>
                            ))}
                        </div>
                        <div className="border-t border-sage/30 pt-3 space-y-2 mb-6">
                            <div className="flex justify-between text-clay">
                                <span>Subtotal</span>
                                <span>₹{subtotal}</span>
                            </div>
                            <div className="flex justify-between text-clay">
                                <span>Shipping</span>
                                <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
                            </div>
                            <motion.div
                                className="flex justify-between font-bold text-clay text-lg"
                                animate={{ scale: [1, 1.02, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <span>Total</span>
                                <span>₹{total}</span>
                            </motion.div>
                        </div>

                        {step === 3 && (
                            <YarnButton className="w-full" size="lg">
                                Place Order
                            </YarnButton>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
