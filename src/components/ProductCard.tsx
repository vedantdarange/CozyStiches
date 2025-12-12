import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import type { Product } from '../context/ShopContext';

export const ProductCard = ({ product, delay = 0 }: { product: Product; delay?: number }) => {
    const navigate = useNavigate();
    const { addToCart } = useShop();

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product);
    };

    const handleViewProduct = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        navigate(`/product/${product.id}`);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
            whileHover={{ y: -8 }}
            className="relative bg-cream rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all group cursor-pointer"
            onClick={handleViewProduct}
        >
            {/* Stock Status Badge */}
            <AnimatePresence>
                {product.stock === 0 ? (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="absolute top-4 left-4 bg-dustyRose text-cream px-3 py-1 rounded-full text-sm font-medium z-10"
                    >
                        Made to Order
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="absolute top-4 left-4 bg-sage text-cream px-3 py-1 rounded-full text-sm font-medium z-10"
                    >
                        Ready to Ship ({product.stock})
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Image */}
            <motion.div
                className="h-64 bg-gradient-to-br from-sage/30 to-terracotta/30 relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
            >
                {/* Desktop hover overlay - shows "View Details" text */}
                <motion.div
                    className="hidden md:flex absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity items-end justify-center pb-6"
                >
                    <span className="text-cream font-medium text-lg flex items-center gap-2">
                        <Eye className="w-5 h-5" />
                        View Details
                    </span>
                </motion.div>
            </motion.div>

            {/* Product Info - Mobile-friendly layout */}
            <div className="p-4">
                <div className="flex justify-between items-start gap-3 mb-2">
                    <div className="flex-1 min-w-0">
                        <h3 className="font-serif text-lg text-clay mb-1 truncate">{product.name}</h3>
                        <p className="text-terracotta font-bold text-xl">₹{product.price}</p>
                        <p className="text-sage text-sm line-clamp-2 mt-1">{product.description}</p>
                    </div>
                    {/* Always visible add-to-cart button - mobile friendly */}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleAddToCart}
                        className="flex-shrink-0 w-11 h-11 bg-terracotta text-cream rounded-full flex items-center justify-center hover:bg-clay transition-colors shadow-md"
                        aria-label={`Add ${product.name} to cart`}
                    >
                        <ShoppingCart className="w-5 h-5" />
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

