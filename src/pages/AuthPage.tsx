import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';
import { YarnButton } from '../components/YarnButton';
import { Link } from 'react-router-dom';

export const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
        confirmPassword: ''
    });

    return (
        <div className="min-h-screen bg-cream flex items-center justify-center px-6 py-12">
            <div className="w-full max-w-md">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-linen rounded-2xl shadow-2xl p-8"
                >
                    <div className="text-center mb-8">
                        <motion.div
                            className="w-20 h-20 bg-gradient-to-br from-sage to-terracotta rounded-full mx-auto mb-4 flex items-center justify-center"
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        >
                            <Lock className="w-10 h-10 text-cream" />
                        </motion.div>
                        <h1 className="font-serif text-3xl text-clay">
                            {isLogin ? 'Welcome Back' : 'Join the Cozy Family'}
                        </h1>
                        <p className="text-sage mt-2">
                            {isLogin ? 'Login to your account' : 'Create an account to track orders'}
                        </p>
                    </div>

                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <AnimatePresence mode='wait'>
                            {!isLogin && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="space-y-4"
                                >
                                    <div>
                                        <label className="block text-clay font-medium mb-2">Full Name</label>
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-sage" />
                                            <input
                                                type="text"
                                                className="w-full pl-12 pr-4 py-3 rounded-xl border border-sage/30 focus:border-terracotta focus:outline-none"
                                                placeholder="Jane Doe"
                                                value={formData.name}
                                                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div>
                            <label className="block text-clay font-medium mb-2">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-sage" />
                                <input
                                    type="email"
                                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-sage/30 focus:border-terracotta focus:outline-none"
                                    placeholder="jane@example.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-clay font-medium mb-2">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-sage" />
                                <input
                                    type="password"
                                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-sage/30 focus:border-terracotta focus:outline-none"
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                                />
                            </div>
                        </div>

                        <AnimatePresence mode='wait'>
                            {!isLogin && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                >
                                    <label className="block text-clay font-medium mb-2">Confirm Password</label>
                                    <div className="relative">
                                        <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-sage" />
                                        <input
                                            type="password"
                                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-sage/30 focus:border-terracotta focus:outline-none"
                                            placeholder="••••••••"
                                            value={formData.confirmPassword}
                                            onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                                        />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <YarnButton type="submit" className="w-full mt-6">
                            {isLogin ? 'Login' : 'Create Account'}
                            <ArrowRight className="ml-2" />
                        </YarnButton>
                    </form>

                    <div className="text-center mt-6 pt-6 border-t border-sage/20">
                        <p className="text-sage">
                            {isLogin ? "Don't have an account? " : "Already have an account? "}
                            <button
                                onClick={() => setIsLogin(!isLogin)}
                                className="text-terracotta hover:underline font-medium"
                            >
                                {isLogin ? 'Sign up' : 'Login'}
                            </button>
                        </p>
                        {isLogin && (
                            <Link to="/forgot-password" className="block text-sage mt-2 hover:text-terracotta">
                                Forgot password?
                            </Link>
                        )}
                    </div>

                    {/* Guest Checkout */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-8 text-center"
                    >
                        <Link to="/checkout" className="text-terracotta hover:underline">
                            Continue as Guest →
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};
