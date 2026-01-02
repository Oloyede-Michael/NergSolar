import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, Clock } from 'lucide-react';

export default function NergSolarFooter() {
  return (
    <footer className="bg-gray-100 py-12 px-10 md:px-10 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Products Column */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Products</h3>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li><a href="#" className="hover:text-cyan-500">Solar Panels</a></li>
              <li><a href="#" className="hover:text-cyan-500">Solar Kits</a></li>
              <li><a href="#" className="hover:text-cyan-500">Charge Controllers</a></li>
              <li><a href="#" className="hover:text-cyan-500">Batteries</a></li>
              <li><a href="#" className="hover:text-cyan-500">Inverters</a></li>
              <li><a href="#" className="hover:text-cyan-500">Battery Chargers</a></li>
              <li><a href="#" className="hover:text-cyan-500">Power Management</a></li>
              <li><a href="#" className="hover:text-cyan-500">Wiring & Accessories</a></li>
              <li><a href="#" className="hover:text-cyan-500">Outdoors & Lifestyle</a></li>
            </ul>
          </div>

          {/* Scenarios Column */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Scenarios</h3>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li><a href="#" className="hover:text-cyan-500">RV Solution</a></li>
              <li><a href="#" className="hover:text-cyan-500">Off Road</a></li>
              <li><a href="#" className="hover:text-cyan-500">Shed Solution</a></li>
              <li><a href="#" className="hover:text-cyan-500">Sail Boat Solution</a></li>
              <li><a href="#" className="hover:text-cyan-500">Farm Solution</a></li>
              <li><a href="#" className="hover:text-cyan-500">Tiny House</a></li>
              <li><a href="#" className="hover:text-cyan-500">Power Management</a></li>
              <li><a href="#" className="hover:text-cyan-500">Residential Grid Tie</a></li>
            </ul>
          </div>

          {/* Explore Column */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Explore</h3>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li><a href="#" className="hover:text-cyan-500">Newsletter</a></li>
              <li><a href="#" className="hover:text-cyan-500">Blog</a></li>
              <li><a href="#" className="hover:text-cyan-500">Discount</a></li>
              <li><a href="#" className="hover:text-cyan-500">Affiliate</a></li>
              <li><a href="#" className="hover:text-cyan-500">Referral</a></li>
              <li><a href="#" className="hover:text-cyan-500">FB Group</a></li>
            </ul>
          </div>

          {/* Business Column */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Business</h3>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li><a href="#" className="hover:text-cyan-500">Become a Dealer</a></li>
              <li><a href="#" className="hover:text-cyan-500">Project Inquiry</a></li>
              <li><a href="#" className="hover:text-cyan-500">Off-Grid Solutions for Business</a></li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li><a href="#" className="hover:text-cyan-500">Contact us</a></li>
              <li><a href="#" className="hover:text-cyan-500">Track Your Order</a></li>
              <li><a href="#" className="hover:text-cyan-500">Warranty</a></li>
              <li><a href="#" className="hover:text-cyan-500">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-cyan-500">Return & Refund Policy</a></li>
              <li><a href="#" className="hover:text-cyan-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cyan-500">Terms of Use</a></li>
              <li><a href="#" className="hover:text-cyan-500">Learning Center</a></li>
              <li><a href="#" className="hover:text-cyan-500">Forum</a></li>
            </ul>
          </div>

          {/* Need Help Column */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Need Help?</h3>
            
            {/* Customer Feedback */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-1">
                <Mail size={18} className="text-gray-700" />
                <span className="font-semibold text-gray-900 text-sm">Customer Feedback</span>
              </div>
              <a href="mailto:support@drivexenergy.com" className="text-sm text-gray-600 hover:text-cyan-500">
                support@drivexenergy.com
              </a>
            </div>

            {/* Call Us */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-1">
                <Phone size={18} className="text-gray-700" />
                <span className="font-semibold text-gray-900 text-sm">Call Us</span>
              </div>
              <p className="text-sm text-gray-600">Drivex Energy Support: +1 (909) 287 7111</p>
            </div>

            {/* Service Time */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-1">
                <Clock size={18} className="text-gray-700" />
                <span className="font-semibold text-gray-900 text-sm">Service Time</span>
              </div>
              <p className="text-sm text-gray-600">Monday-Friday, 6:00am - 5:00pm PT</p>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-3">
              <a href="#" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-pink-600 text-white p-2 rounded hover:bg-pink-700 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-red-600 text-white p-2 rounded hover:bg-red-700 transition-colors">
                <Youtube size={18} />
              </a>
              <a href="#" className="bg-gray-900 text-white p-2 rounded hover:bg-black transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* App Download Section */}
        <div className="border-t border-gray-300 pt-8 mb-8">
          <div className="flex items-center gap-4">
            <p className="text-sm text-gray-700 font-medium">
              Get Drivex Energy APP for system monitoring, story sharing,<br />and exclusive benefits.
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-10" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" className="h-10" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 pt-6 text-sm text-gray-600">
          <p>
            Copyright © 2026 Drivex Energy NG. 
            <a href="#" className="hover:text-cyan-500 ml-1">Shipping Policy</a> | 
            <a href="#" className="hover:text-cyan-500 ml-1">Privacy Policy</a> | 
            <a href="#" className="hover:text-cyan-500 ml-1">Return Policy</a> | 
            <a href="#" className="hover:text-cyan-500 ml-1">Terms of Use</a>
          </p>
        </div>
      </div>
    </footer>
  );
}