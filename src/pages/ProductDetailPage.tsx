import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus, ShoppingCart, Heart, ZoomIn } from 'lucide-react';
import { YarnButton } from '../components/YarnButton';
import { useShop } from '../context/ShopContext';
import { useParams } from 'react-router-dom';

export const ProductDetailPage = () => {
    const { id } = useParams();
    const { addToCart } = useShop();
    const [quantity, setQuantity] = useState(1);
    const [selectedVariant, setSelectedVariant] = useState({ size: 'M', color: 'Sage', material: 'Cotton' });
    const [zoom, setZoom] = useState(false);

    const product = {
        id: '1',
        name: 'Boho Crochet Tote',
        price: 1299,
        images: ['/api/placeholder/600/600', '/api/placeholder/600/600', '/api/placeholder/600/600'],
        stock: 2,
        isMadeToOrder: false,
        category: 'bags',
        variants: {
            size: ['S', 'M', 'L'],
            color: ['Sage', 'Terracotta', 'Cream', 'Dusty Rose'],
            material: ['Cotton', 'Wool', 'Acrylic']
        },
        description: 'A spacious tote perfect for market trips. Features sturdy handles and a magnetic closure.',
        careInstructions: 'Hand wash cold, lay flat to dry. Do not bleach or iron.'
    };

    return (
        <div className="min-h-screen bg-cream pt-24 pb-12 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                {/* Image Gallery */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="relative"
                >
                    <motion.div
                        className="bg-linen rounded-2xl overflow-hidden cursor-zoom-in"
                        onClick={() => setZoom(!zoom)}
                    >
                        <motion.div
                            className="h-96 bg-gradient-to-br from-sage/30 to-terracotta/30"
                            animate={{ scale: zoom ? 1.5 : 1 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                    <ZoomIn className="absolute top-4 right-4 text-sage" />

                    <div className="flex gap-4 mt-4">
                        {product.images.map((_, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className="w-20 h-20 bg-gradient-to-br from-sage/20 to-terracotta/20 rounded-lg cursor-pointer"
                            />
                        ))}
                    </div>
                </motion.div>

                {/* Product Info */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                >
                    <div>
                        <h1 className="font-serif text-4xl text-clay mb-2">{product.name}</h1>
                        <p className="text-terracotta text-3xl font-bold">₹{product.price}</p>
                        <AnimatePresence>
                            {product.stock > 0 ? (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-sage mt-2"
                                >
                                    ✨ Only {product.stock} left - order soon!
                                </motion.p>
                            ) : (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-dustyRose mt-2"
                                >
                                    🧶 Made to Order (2-3 weeks)
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Variants */}
                    <div className="space-y-4">
                        {Object.entries(product.variants).map(([key, options]) => (
                            <div key={key}>
                                <label className="block text-clay font-medium mb-2 capitalize">{key}</label>
                                <div className="flex gap-2 flex-wrap">
                                    {options.map(opt => (
                                        <motion.button
                                            key={opt}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setSelectedVariant(prev => ({ ...prev, [key]: opt }))}
                                            className={`px-4 py-2 rounded-full border-2 transition-all ${selectedVariant[key as keyof typeof selectedVariant] === opt
                                                    ? 'border-terracotta bg-terracotta text-cream'
                                                    : 'border-sage text-clay hover:border-terracotta'
                                                }`}
                                        >
                                            {opt}
                                        </motion.button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Quantity */}
                    <div>
                        <label className="block text-clay font-medium mb-2">Quantity</label>
                        <div className="flex items-center gap-4">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="w-10 h-10 rounded-full bg-linen flex items-center justify-center text-clay"
                            >
                                <Minus className="w-4 h-4" />
                            </motion.button>
                            <span className="text-xl font-medium text-clay w-12 text-center">{quantity}</span>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setQuantity(Math.min(product.stock || 5, quantity + 1))}
                                className="w-10 h-10 rounded-full bg-linen flex items-center justify-center text-clay"
                            >
                                <Plus className="w-4 h-4" />
                            </motion.button>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <YarnButton
                            size="lg"
                            className="flex-1"
                            onClick={() => addToCart(product, selectedVariant)}
                            disabled={product.stock === 0}
                        >
                            <ShoppingCart className="mr-2" />
                            Add to Cart
                        </YarnButton>
                        <YarnButton variant="outline" size="lg">
                            <Heart className="mr-2" />
                            Save
                        </YarnButton>
                    </div>

                    {/* Care Instructions */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="bg-linen rounded-2xl p-6"
                    >
                        <h3 className="font-serif text-xl text-clay mb-3">Care Instructions</h3>
                        <p className="text-sage">{product.careInstructions}</p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};
