import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer className="bg-four dark:bg-four text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold text-primary mb-4">E-COMMERCE</h1>
          <p>Shop your favorite products with the best offers and quality.</p>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link to="/products" className="hover:text-primary transition">Products</Link></li>
            <li><Link to="/account" className="hover:text-primary transition">My Account</Link></li>
            <li><Link to="/orders" className="hover:text-primary transition">Orders</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition">Contact Us</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-6">
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom copyright */}
      <div className="text-center text-gray-400 mt-8 text-sm">
        © {new Date().getFullYear()} E-COMMERCE. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterSection;
