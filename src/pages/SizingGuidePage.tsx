import { motion } from 'framer-motion';
import { Ruler, Shirt } from 'lucide-react';

export const SizingGuidePage = () => {
    return (
        <div className="min-h-screen bg-cream pt-24 pb-12 px-6">
            <div className="max-w-5xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-serif text-5xl text-clay text-center mb-8"
                >
                    Sizing Guide
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-linen rounded-2xl p-8"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <Ruler className="w-10 h-10 text-terracotta" />
                        <div>
                            <h2 className="font-serif text-2xl text-clay">How to Measure</h2>
                            <p className="text-sage">Use a flexible measuring tape for accurate measurements</p>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b-2 border-sage/30">
                                    <th className="py-3 text-clay font-serif text-lg">Size</th>
                                    <th className="py-3 text-clay font-serif text-lg">Bust (inches)</th>
                                    <th className="py-3 text-clay font-serif text-lg">Length (inches)</th>
                                    <th className="py-3 text-clay font-serif text-lg">Fits</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { size: 'S', bust: '32-34', length: '22', fits: '0-2' },
                                    { size: 'M', bust: '36-38', length: '23', fits: '4-6' },
                                    { size: 'L', bust: '40-42', length: '24', fits: '8-10' },
                                ].map((row, i) => (
                                    <motion.tr
                                        key={row.size}
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + i * 0.1 }}
                                        className="border-b border-sage/10"
                                    >
                                        <td className="py-4 text-clay font-medium">{row.size}</td>
                                        <td className="py-4 text-sage">{row.bust}</td>
                                        <td className="py-4 text-sage">{row.length}</td>
                                        <td className="py-4 text-sage">US {row.fits}</td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
