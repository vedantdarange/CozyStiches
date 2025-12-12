import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, X } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { YarnButton } from '../components/YarnButton';
import { Tabs } from '@/components/aceternity/animated-tabs';

export const ShopPage = () => {
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [showFilters, setShowFilters] = useState(false);

    const categories = [
        { title: 'All', value: 'all', content: null },
        { title: 'Bags', value: 'bags', content: null },
        { title: 'Apparel', value: 'apparel', content: null },
        { title: 'Home Decor', value: 'home', content: null },
        { title: 'Accessories', value: 'accessories', content: null },
    ];

    return (
        <div className="min-h-screen bg-cream pt-24 pb-12 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <h1 className="font-serif text-5xl text-clay mb-4">Shop Handmade</h1>
                    <p className="text-sage text-lg">Discover our collection of cozy crochet treasures</p>
                </motion.div>

                {/* Search & Filters */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col md:flex-row gap-4 mb-8"
                >
                    <div className="flex-1 relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-sage" />
                        <input
                            type="text"
                            placeholder="Search for bags, keychains..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 rounded-full border border-sage/30 focus:border-terracotta focus:outline-none bg-linen"
                        />
                    </div>
                    <YarnButton onClick={() => setShowFilters(!showFilters)}>
                        <Filter className="inline w-5 h-5 mr-2" />
                        Filters
                    </YarnButton>
                </motion.div>

                {/* Animated Category Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-8"
                >
                    <Tabs
                        tabs={categories}
                        containerClassName="mb-8"
                        activeTabClassName="bg-terracotta"
                        tabClassName="text-sm md:text-base"
                        onChange={(value) => setSelectedCategory(value)}
                    />
                </motion.div>

                {/* Filter Panel */}
                <AnimatePresence>
                    {showFilters && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="bg-linen rounded-2xl p-6 mb-8 overflow-hidden"
                        >
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-serif text-xl text-clay">Categories</h3>
                                <button onClick={() => setShowFilters(false)}>
                                    <X className="w-5 h-5 text-sage" />
                                </button>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {['all', 'bags', 'keychains', 'tops', 'decor'].map(cat => (
                                    <motion.button
                                        key={cat}
                                        whileHover={{ scale: 1.05 }}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`px-4 py-2 rounded-full capitalize ${selectedCategory === cat
                                            ? 'bg-terracotta text-cream'
                                            : 'bg-cream text-clay border border-sage/30'
                                            }`}
                                    >
                                        {cat}
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Product Grid */}
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {[...Array(12)].map((_, i) => (
                        <ProductCard
                            key={i}
                            product={{
                                id: i.toString(),
                                name: "Boho Market Bag",
                                price: 899,
                                images: [`/api/placeholder/300/300`],
                                category: "bags",
                                stock: i % 3 === 0 ? 0 : Math.floor(Math.random() * 5) + 1,
                                isMadeToOrder: i % 3 === 0,
                                description: "Perfect for farmers market trips"
                            }}
                            delay={i * 0.05}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
