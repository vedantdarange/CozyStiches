import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Calendar, CheckCircle, XCircle } from 'lucide-react';
import { YarnButton } from '../components/YarnButton';
import { useShop } from '../context/ShopContext';
import { CountdownTimer } from '@/components/custom/CountdownTimer';
import { ParallaxScroll } from '@/components/aceternity/parallax-scroll';

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

    // Set target date to 7 days from now for commission slot deadline
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    // Gallery images for past custom creations (placeholder gradients)
    const galleryImages = [
        "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop", // Crochet bag
        "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=400&fit=crop", // Yarn
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop", // Crochet items
        "https://images.unsplash.com/photo-1611095564515-2f0a6e5e6e9e?w=400&h=400&fit=crop", // Handmade
        "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?w=400&h=400&fit=crop", // Crochet
        "https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?w=400&h=400&fit=crop", // Crafts
        "https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?w=400&h=400&fit=crop", // Yarn balls
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop", // Crochet work
        "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop", // Bags
    ];

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

                    {/* Countdown Timer */}
                    {commissionSlots > 0 && commissionSlots < 3 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="mt-6 pt-6 border-t border-sage/20"
                        >
                            <p className="text-clay font-medium mb-4">⏰ Limited Time Offer Ends In:</p>
                            <CountdownTimer targetDate={targetDate} className="scale-90" />
                        </motion.div>
                    )}
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

                        {/* Image Preview Thumbnails */}
                        <AnimatePresence>
                            {uploadedFiles.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="flex gap-4 mt-4 flex-wrap"
                                >
                                    {uploadedFiles.map((file, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            className="relative w-20 h-20 group"
                                        >
                                            <img
                                                src={URL.createObjectURL(file)}
                                                alt={`Preview ${i + 1}`}
                                                className="w-full h-full object-cover rounded-lg border-2 border-sage/30"
                                            />
                                            <motion.button
                                                type="button"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                onClick={() => setUploadedFiles(files => files.filter((_, index) => index !== i))}
                                                className="absolute -top-2 -right-2 bg-dustyRose text-cream rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
                                                aria-label={`Remove image ${i + 1}`}
                                            >
                                                <XCircle className="w-4 h-4" />
                                            </motion.button>
                                        </motion.div>
                                    ))}
                                </motion.div>
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

                {/* Past Custom Gallery with Parallax Scroll */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-16"
                >
                    <h2 className="font-serif text-3xl text-clay text-center mb-4">Past Custom Creations</h2>
                    <p className="text-center text-sage mb-8 max-w-2xl mx-auto">
                        Scroll through our gallery of beautiful custom pieces we've created for happy customers ✨
                    </p>
                    <ParallaxScroll images={galleryImages} className="w-full" />
                </motion.section>
            </div>
        </div>
    );
};
