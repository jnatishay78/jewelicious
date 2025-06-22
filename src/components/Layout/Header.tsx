import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu, Crown } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useCart } from '../../contexts/CartContext';

export function Header() {
  const { user, logout } = useAuth();
  const { getTotalItems } = useCart();
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to={isAdmin ? '/admin' : '/'} className="flex items-center space-x-2">
            <Crown className="h-8 w-8 text-amber-500" />
            <span className="text-2xl font-bold text-gray-900">LuxeJewels</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {!isAdmin && (
              <>
                <Link to="/" className="text-gray-700 hover:text-amber-500 transition-colors">
                  Home
                </Link>
                <Link to="/products" className="text-gray-700 hover:text-amber-500 transition-colors">
                  Products
                </Link>
                <Link to="/new-arrivals" className="text-gray-700 hover:text-amber-500 transition-colors">
                  New Arrivals
                </Link>
                <Link to="/featured" className="text-gray-700 hover:text-amber-500 transition-colors">
                  Featured
                </Link>
              </>
            )}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {!isAdmin && (
              <>
                <button className="p-2 text-gray-700 hover:text-amber-500 transition-colors">
                  <Search className="h-5 w-5" />
                </button>
                <Link to="/cart" className="relative p-2 text-gray-700 hover:text-amber-500 transition-colors">
                  <ShoppingCart className="h-5 w-5" />
                  {getTotalItems() > 0 && (
                    <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {getTotalItems()}
                    </span>
                  )}
                </Link>
              </>
            )}
            
            {user ? (
              <div className="relative group">
                <button className="flex items-center space-x-1 p-2 text-gray-700 hover:text-amber-500 transition-colors">
                  <User className="h-5 w-5" />
                  <span className="hidden sm:block">{user.firstName}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="py-1">
                    {user.isAdmin ? (
                      <>
                        <Link to="/admin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Admin Dashboard
                        </Link>
                        <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Customer View
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Profile
                        </Link>
                        <Link to="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Order History
                        </Link>
                      </>
                    )}
                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <Link to="/login" className="flex items-center space-x-1 p-2 text-gray-700 hover:text-amber-500 transition-colors">
                <User className="h-5 w-5" />
                <span className="hidden sm:block">Login</span>
              </Link>
            )}

            <button className="md:hidden p-2 text-gray-700 hover:text-amber-500 transition-colors">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}