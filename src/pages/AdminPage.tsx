import { useState } from 'react';
import { motion } from 'framer-motion';
import { Package, Clock, CheckCircle, XCircle, TrendingUp, Users } from 'lucide-react';
import { YarnButton } from '../components/YarnButton';

export const AdminPage = () => {
    const [orders] = useState([
        { id: 'ORD001', customer: 'Jane Doe', status: 'pending', items: 2, total: 2598 },
        { id: 'ORD002', customer: 'John Smith', status: 'processing', items: 1, total: 1299 },
        { id: 'ORD003', customer: 'Sarah Johnson', status: 'shipped', items: 3, total: 3897 },
    ]);

    const [inventory] = useState([
        { name: 'Cotton Yarn - Sage', stock: 5, threshold: 2 },
        { name: 'Acrylic Yarn - Terracotta', stock: 1, threshold: 2 },
        { name: 'Wooden Buttons', stock: 20, threshold: 5 },
    ]);

    return (
        <div className="min-h-screen bg-cream pt-24 pb-12 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-serif text-4xl text-clay mb-8"
                >
                    Admin Dashboard
                </motion.h1>

                {/* Stats */}
                <div className="grid md:grid-cols-4 gap-6 mb-12">
                    {[
                        { title: "Total Orders", value: "42", icon: <Package className="w-6 h-6" />, color: "bg-sage" },
                        { title: "Processing", value: "8", icon: <Clock className="w-6 h-6" />, color: "bg-terracotta" },
                        { title: "Completed", value: "34", icon: <CheckCircle className="w-6 h-6" />, color: "bg-dustyRose" },
                        { title: "Revenue", value: "₹54K", icon: <TrendingUp className="w-6 h-6" />, color: "bg-clay" }
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-linen rounded-2xl p-6"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sage text-sm">{stat.title}</p>
                                    <motion.p
                                        className="font-serif text-3xl text-clay font-bold mt-1"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.5 + i * 0.1 }}
                                    >
                                        {stat.value}
                                    </motion.p>
                                </div>
                                <div className={`${stat.color} text-cream w-12 h-12 rounded-full flex items-center justify-center`}>
                                    {stat.icon}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Order Management */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-linen rounded-2xl p-6 mb-8"
                >
                    <h2 className="font-serif text-2xl text-clay mb-6 flex items-center gap-3">
                        <Package className="w-6 h-6 text-terracotta" />
                        Recent Orders
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-sage/20">
                                    <th className="text-left py-3 text-sage">Order ID</th>
                                    <th className="text-left py-3 text-sage">Customer</th>
                                    <th className="text-left py-3 text-sage">Status</th>
                                    <th className="text-left py-3 text-sage">Items</th>
                                    <th className="text-left py-3 text-sage">Total</th>
                                    <th className="text-left py-3 text-sage">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order, i) => (
                                    <motion.tr
                                        key={order.id}
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="border-b border-sage/10"
                                    >
                                        <td className="py-3 text-clay font-mono">{order.id}</td>
                                        <td className="py-3 text-clay">{order.customer}</td>
                                        <td className="py-3">
                                            <span className={`px-3 py-1 rounded-full text-sm ${order.status === 'shipped' ? 'bg-sage/20 text-sage' :
                                                    order.status === 'processing' ? 'bg-terracotta/20 text-terracotta' :
                                                        'bg-dustyRose/20 text-dustyRose'
                                                }`}>
                                                {order.status}
                                            </span>
                                        </td>
                                        <td className="py-3 text-clay">{order.items}</td>
                                        <td className="py-3 text-clay">₹{order.total}</td>
                                        <td className="py-3">
                                            <YarnButton size="sm">Update</YarnButton>
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.section>

                {/* Inventory Alert */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-linen rounded-2xl p-6"
                >
                    <h2 className="font-serif text-2xl text-clay mb-6">Inventory Alerts</h2>
                    <div className="space-y-3">
                        {inventory.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className={`flex justify-between items-center p-4 rounded-xl ${item.stock <= item.threshold ? 'bg-dustyRose/20' : 'bg-sage/10'
                                    }`}
                            >
                                <div>
                                    <p className="text-clay font-medium">{item.name}</p>
                                    <p className="text-sage text-sm">Stock: {item.stock}</p>
                                </div>
                                {item.stock <= item.threshold && (
                                    <motion.div
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <XCircle className="w-6 h-6 text-dustyRose" />
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            </div>
        </div>
    );
};
