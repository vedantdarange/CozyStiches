import { createContext, useState, useContext, ReactNode } from 'react';

interface Product {
    id: string;
    name: string;
    price: number;
    images: string[];
    category: string;
    stock: number;
    isMadeToOrder: boolean;
    variants?: {
        size?: string[];
        color?: string[];
        material?: string[];
    };
    description: string;
    careInstructions?: string;
}

interface CartItem extends Product {
    quantity: number;
    selectedVariant: {
        size?: string;
        color?: string;
        material?: string;
    };
}

interface CommissionRequest {
    id: string;
    customerName: string;
    customerEmail: string;
    itemType: string;
    colorPrefs: string;
    measurements: string;
    budget: string;
    referenceImages: File[];
    status: 'pending' | 'approved' | 'in-progress' | 'completed';
    date: string;
}

interface ShopContextType {
    cart: CartItem[];
    addToCart: (product: Product, variant?: CartItem['selectedVariant']) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    commissionSlots: number;
    totalSlots: number;
    commissionRequests: CommissionRequest[];
    submitCommission: (request: Omit<CommissionRequest, 'id' | 'status' | 'date'>) => void;
}

const ShopContext = createContext<ShopContextType | null>(null);

export const ShopProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [commissionRequests, setCommissionRequests] = useState<CommissionRequest[]>([]);
    const commissionSlots = 3; // Dynamic in real app
    const totalSlots = 5;

    const addToCart = (product: Product, variant: CartItem['selectedVariant'] = {}) => {
        setCart(prev => [...prev, { ...product, quantity: 1, selectedVariant: variant }]);
    };

    const removeFromCart = (id: string) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    const updateQuantity = (id: string, quantity: number) => {
        setCart(prev => prev.map(item => item.id === id ? { ...item, quantity } : item));
    };

    const submitCommission = (requestData: Omit<CommissionRequest, 'id' | 'status' | 'date'>) => {
        const newRequest: CommissionRequest = {
            ...requestData,
            id: Date.now().toString(),
            status: 'pending',
            date: new Date().toISOString()
        };
        setCommissionRequests(prev => [...prev, newRequest]);
    };

    return (
        <ShopContext.Provider value={{
            cart, addToCart, removeFromCart, updateQuantity,
            commissionSlots, totalSlots, commissionRequests, submitCommission
        }}>
            {children}
        </ShopContext.Provider>
    );
};

export const useShop = () => {
    const context = useContext(ShopContext);
    if (!context) throw new Error('useShop must be used within ShopProvider');
    return context;
};
