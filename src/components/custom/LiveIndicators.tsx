"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, ShoppingBag } from "lucide-react";

export const LiveIndicators = () => {
    const [viewerCount, setViewerCount] = useState(12);
    const [recentPurchase, setRecentPurchase] = useState<{
        name: string;
        location: string;
        item: string;
    } | null>(null);

    const purchases = [
        { name: "Priya", location: "Mumbai", item: "Crochet Tote Bag" },
        { name: "Rahul", location: "Delhi", item: "Baby Blanket" },
        { name: "Ananya", location: "Bangalore", item: "Coaster Set" },
        { name: "Vikram", location: "Pune", item: "Laptop Sleeve" },
        { name: "Meera", location: "Hyderabad", item: "Keychain" },
    ];

    useEffect(() => {
        // Simulate viewer count changes
        const viewerInterval = setInterval(() => {
            setViewerCount(prev => Math.max(8, Math.min(25, prev + Math.floor(Math.random() * 5) - 2)));
        }, 8000);

        // Show recent purchases
        const purchaseInterval = setInterval(() => {
            const randomPurchase = purchases[Math.floor(Math.random() * purchases.length)];
            setRecentPurchase(randomPurchase);
            setTimeout(() => setRecentPurchase(null), 5000);
        }, 15000);

        return () => {
            clearInterval(viewerInterval);
            clearInterval(purchaseInterval);
        };
    }, []);

    return (
        <>
            {/* Viewer Count */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="fixed top-24 right-6 z-40 bg-linen/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-sage/20"
            >
                <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-sage" />
                    <motion.span
                        key={viewerCount}
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        className="text-clay font-medium text-sm"
                    >
                        {viewerCount} people viewing
                    </motion.span>
                </div>
            </motion.div>

            {/* Recent Purchase Notification */}
            <AnimatePresence>
                {recentPurchase && (
                    <motion.div
                        initial={{ opacity: 0, x: 300 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 300 }}
                        transition={{ type: "spring", damping: 20 }}
                        className="fixed bottom-6 right-6 z-40 bg-sage text-cream rounded-2xl px-6 py-4 shadow-2xl max-w-sm"
                    >
                        <div className="flex items-start gap-3">
                            <div className="bg-cream/20 rounded-full p-2">
                                <ShoppingBag className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                                <p className="font-medium mb-1">
                                    {recentPurchase.name} from {recentPurchase.location}
                                </p>
                                <p className="text-sm text-cream/80">
                                    just purchased "{recentPurchase.item}"
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
