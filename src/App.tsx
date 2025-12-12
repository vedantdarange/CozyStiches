import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
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
                <ScrollToTop />
                <Toaster
                    position="top-center"
                    toastOptions={{
                        duration: 3000,
                        style: {
                            background: '#F5F1E8',
                            color: '#B8624A',
                            border: '2px solid #9CAF88',
                            borderRadius: '16px',
                            padding: '16px',
                            fontFamily: 'Inter, sans-serif',
                        },
                        success: {
                            iconTheme: {
                                primary: '#9CAF88',
                                secondary: '#F5F1E8',
                            },
                        },
                    }}
                />
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
