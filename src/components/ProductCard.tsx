import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { YarnButton } from './YarnButton';
import { useShop } from '../context/ShopContext';

export const ProductCard = ({ product, delay = 0 }: { product: any; delay?: number }) => {
    const navigate = useNavigate();
    const { addToCart } = useShop();

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
            whileHover={{ y: -8 }}
            className="relative bg-cream rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all group"
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
                <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                >
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4">
                        <YarnButton
                            size="sm"
                            onClick={() => navigate(`/product/${product.id}`)}
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <Eye className="w-4 h-4 mr-1" />
                            View
                        </YarnButton>
                        <YarnButton
                            size="sm"
                            onClick={() => addToCart(product)}
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <ShoppingCart className="w-4 h-4 mr-1" />
                            Add
                        </YarnButton>
                    </div>
                </motion.div>
            </motion.div>

            {/* Info */}
            <div className="p-4">
                <h3 className="font-serif text-lg text-clay mb-1">{product.name}</h3>
                <p className="text-terracotta font-bold text-xl">₹{product.price}</p>
                <p className="text-sage text-sm">{product.description}</p>
            </div>
        </motion.div>
    );
};
