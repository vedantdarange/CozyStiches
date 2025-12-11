import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ShopProvider } from './context/ShopContext';
import { LandingPage } from './pages/LandingPage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CommissionsPage } from './pages/CommissionsPage';
import { AboutPage } from './pages/AboutPage';
import { AuthPage } from './pages/AuthPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { AdminPage } from './pages/AdminPage';
import { CareInstructionsPage } from './pages/CareInstructionsPage';
import { SizingGuidePage } from './pages/SizingGuidePage';

function App() {
    return (
        <ShopProvider>
            <BrowserRouter>
                <div className="min-h-screen bg-cream">
                    <Navbar />
                    <AnimatePresence mode="wait">
                        <Routes>
                            <Route path="/" element={<LandingPage />} />
                            <Route path="/shop" element={<ShopPage />} />
                            <Route path="/product/:id" element={<ProductDetailPage />} />
                            <Route path="/commissions" element={<CommissionsPage />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/login" element={<AuthPage />} />
                            <Route path="/cart" element={<CartPage />} />
                            <Route path="/checkout" element={<CheckoutPage />} />
                            <Route path="/admin" element={<AdminPage />} />
                            <Route path="/care-instructions" element={<CareInstructionsPage />} />
                            <Route path="/sizing-guide" element={<SizingGuidePage />} />
                        </Routes>
                    </AnimatePresence>
                    <Footer />
                </div>
            </BrowserRouter>
        </ShopProvider>
    );
}

export default App;
