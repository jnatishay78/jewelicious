import React from 'react';
import { Crown, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Crown className="h-8 w-8 text-amber-500" />
              <span className="text-2xl font-bold">LuxeJewels</span>
            </div>
            <p className="text-gray-300 mb-4">
              Discover timeless elegance with our exquisite collection of fine jewelry. 
              Each piece is crafted with precision and passion to celebrate life's precious moments.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-amber-500" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-amber-500" />
                <span className="text-sm">info@luxejewels.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/products" className="text-gray-300 hover:text-amber-500 transition-colors">All Products</a></li>
              <li><a href="/new-arrivals" className="text-gray-300 hover:text-amber-500 transition-colors">New Arrivals</a></li>
              <li><a href="/featured" className="text-gray-300 hover:text-amber-500 transition-colors">Featured</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-amber-500 transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="/contact" className="text-gray-300 hover:text-amber-500 transition-colors">Contact Us</a></li>
              <li><a href="/shipping" className="text-gray-300 hover:text-amber-500 transition-colors">Shipping Info</a></li>
              <li><a href="/returns" className="text-gray-300 hover:text-amber-500 transition-colors">Returns</a></li>
              <li><a href="/size-guide" className="text-gray-300 hover:text-amber-500 transition-colors">Size Guide</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; 2024 LuxeJewels. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}