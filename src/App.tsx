import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ProductProvider } from './contexts/ProductContext';
import { CartProvider } from './contexts/CartContext';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { AdminLayout } from './components/Layout/AdminLayout';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { LoginPage } from './pages/LoginPage';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { ProductManagement } from './pages/admin/ProductManagement';

function CustomerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <Router>
            <Routes>
              {/* Customer Routes */}
              <Route path="/" element={
                <CustomerLayout>
                  <HomePage />
                </CustomerLayout>
              } />
              <Route path="/products" element={
                <CustomerLayout>
                  <ProductsPage />
                </CustomerLayout>
              } />
              <Route path="/new-arrivals" element={
                <CustomerLayout>
                  <ProductsPage />
                </CustomerLayout>
              } />
              <Route path="/featured" element={
                <CustomerLayout>
                  <ProductsPage />
                </CustomerLayout>
              } />
              <Route path="/cart" element={
                <CustomerLayout>
                  <CartPage />
                </CustomerLayout>
              } />
              <Route path="/checkout" element={
                <CustomerLayout>
                  <CheckoutPage />
                </CustomerLayout>
              } />
              <Route path="/login" element={<LoginPage />} />

              {/* Admin Routes */}
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="products" element={<ProductManagement />} />
                <Route path="orders" element={<div>Orders Management (Coming Soon)</div>} />
                <Route path="customers" element={<div>Customer Management (Coming Soon)</div>} />
                <Route path="discounts" element={<div>Discount Management (Coming Soon)</div>} />
                <Route path="analytics" element={<div>Analytics (Coming Soon)</div>} />
                <Route path="settings" element={<div>Settings (Coming Soon)</div>} />
              </Route>
            </Routes>
          </Router>
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;