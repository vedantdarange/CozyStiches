import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Calendar, CheckCircle, XCircle } from 'lucide-react';
import { YarnButton } from '../components/YarnButton';
import { useShop } from '../context/ShopContext';

export const CommissionsPage = () => {
    const { commissionSlots, totalSlots, submitCommission } = useShop();
    const [formData, setFormData] = useState({
        customerName: '',
        customerEmail: '',
        itemType: '',
        colorPrefs: '',
        measurements: '',
        budget: ''
    });
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        submitCommission({ ...formData, referenceImages: uploadedFiles });
        // Reset form
        setFormData({
            customerName: '',
            customerEmail: '',
            itemType: '',
            colorPrefs: '',
            measurements: '',
            budget: ''
        });
        setUploadedFiles([]);
    };

    return (
        <div className="min-h-screen bg-cream pt-24 pb-12 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-serif text-5xl text-clay text-center mb-4"
                >
                    Custom Crochet Commissions
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-center text-sage text-lg mb-8"
                >
                    Let's create something unique together! Share your vision and I'll bring it to life.
                </motion.p>

                {/* Commission Slots */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-linen rounded-2xl p-6 mb-8 text-center"
                >
                    <h2 className="font-serif text-2xl text-clay mb-4">Commission Slots</h2>
                    <div className="flex justify-center items-center gap-4 mb-4">
                        {[...Array(totalSlots)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.5 + i * 0.1 }}
                            >
                                {i < commissionSlots ? (
                                    <CheckCircle className="w-8 h-8 text-sage" />
                                ) : (
                                    <XCircle className="w-8 h-8 text-dustyRose" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                    <p className="text-clay font-medium">
                        {commissionSlots} / {totalSlots} slots available
                    </p>
                    <motion.p
                        className="text-sage"
                        animate={{ opacity: commissionSlots < 2 ? [1, 0.5, 1] : 1 }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        {commissionSlots === 0
                            ? 'Currently full - check back soon!'
                            : commissionSlots < 3
                                ? 'Hurry! Limited slots left!'
                                : 'Slots available - grab yours!'}
                    </motion.p>
                </motion.div>

                {/* Form */}
                <motion.form
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    onSubmit={handleSubmit}
                    className="bg-cream rounded-2xl p-8 shadow-xl space-y-6"
                >
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-clay font-medium mb-2">Your Name</label>
                            <input
                                type="text"
                                required
                                value={formData.customerName}
                                onChange={(e) => setFormData(prev => ({ ...prev, customerName: e.target.value }))}
                                className="w-full px-4 py-3 rounded-xl border border-sage/30 focus:border-terracotta focus:outline-none bg-linen"
                                placeholder="Jane Doe"
                            />
                        </div>
                        <div>
                            <label className="block text-clay font-medium mb-2">Email</label>
                            <input
                                type="email"
                                required
                                value={formData.customerEmail}
                                onChange={(e) => setFormData(prev => ({ ...prev, customerEmail: e.target.value }))}
                                className="w-full px-4 py-3 rounded-xl border border-sage/30 focus:border-terracotta focus:outline-none bg-linen"
                                placeholder="jane@example.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-clay font-medium mb-2">What would you like? (Bag, Top, Keychain, etc.)</label>
                        <input
                            type="text"
                            required
                            value={formData.itemType}
                            onChange={(e) => setFormData(prev => ({ ...prev, itemType: e.target.value }))}
                            className="w-full px-4 py-3 rounded-xl border border-sage/30 focus:border-terracotta focus:outline-none bg-linen"
                            placeholder="e.g., Summer market bag with long straps"
                        />
                    </div>

                    <div>
                        <label className="block text-clay font-medium mb-2">Color Preferences</label>
                        <textarea
                            required
                            value={formData.colorPrefs}
                            onChange={(e) => setFormData(prev => ({ ...prev, colorPrefs: e.target.value }))}
                            className="w-full px-4 py-3 rounded-xl border border-sage/30 focus:border-terracotta focus:outline-none bg-linen h-24"
                            placeholder="Describe your preferred colors or send reference images below"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-clay font-medium mb-2">Measurements/Size</label>
                            <input
                                type="text"
                                value={formData.measurements}
                                onChange={(e) => setFormData(prev => ({ ...prev, measurements: e.target.value }))}
                                className="w-full px-4 py-3 rounded-xl border border-sage/30 focus:border-terracotta focus:outline-none bg-linen"
                                placeholder="e.g., 12x10 inches, or 'fits 13-inch laptop'"
                            />
                        </div>
                        <div>
                            <label className="block text-clay font-medium mb-2">Budget Range (₹)</label>
                            <select
                                value={formData.budget}
                                onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                                className="w-full px-4 py-3 rounded-xl border border-sage/30 focus:border-terracotta focus:outline-none bg-linen"
                            >
                                <option value="">Select range</option>
                                <option value="500-1000">₹500 - ₹1,000</option>
                                <option value="1000-2000">₹1,000 - ₹2,000</option>
                                <option value="2000-3000">₹2,000 - ₹3,000</option>
                                <option value="3000+">₹3,000+</option>
                            </select>
                        </div>
                    </div>

                    {/* File Upload */}
                    <div>
                        <label className="block text-clay font-medium mb-2">Reference Images (Optional)</label>
                        <motion.label
                            whileHover={{ scale: 1.02 }}
                            className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-sage rounded-xl cursor-pointer bg-linen hover:bg-sage/10"
                        >
                            <Upload className="w-8 h-8 text-sage mb-2" />
                            <span className="text-sage">Click to upload inspiration photos</span>
                            <input
                                type="file"
                                multiple
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => setUploadedFiles(Array.from(e.target.files || []))}
                            />
                        </motion.label>
                        <AnimatePresence>
                            {uploadedFiles.length > 0 && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-sage mt-2"
                                >
                                    {uploadedFiles.length} file(s) selected
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="text-center"
                    >
                        <YarnButton type="submit" size="lg" className="w-full md:w-auto">
                            <Calendar className="mr-2" />
                            Submit Commission Request
                        </YarnButton>
                    </motion.div>
                </motion.form>

                {/* Past Custom Gallery */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-16"
                >
                    <h2 className="font-serif text-3xl text-clay text-center mb-8">Past Custom Creations</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05, y: -10 }}
                                className="bg-linen rounded-2xl overflow-hidden shadow-lg"
                            >
                                <div className="h-48 bg-gradient-to-br from-terracotta/30 to-dustyRose/30" />
                                <div className="p-4">
                                    <h3 className="font-serif text-clay">Custom {i % 2 === 0 ? 'Baby Blanket' : 'Laptop Sleeve'}</h3>
                                    <p className="text-sage text-sm">Made for @customer{i}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            </div>
        </div>
    );
};
