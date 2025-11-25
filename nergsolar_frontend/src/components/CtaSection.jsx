import React, { useState } from 'react';

const NewsletterCTA = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      console.log('Subscribed with email:', email);
      alert('Successfully subscribed to our newsletter!');
      setEmail('');
    }
  };

  return (
    <div className="w-full bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500 py-20">
      <div className="container mx-auto px-8 text-center">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Go Solar?
        </h2>
        
        {/* Subheading */}
        <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
          Join thousands of satisfied customers powering their homes with clean energy
        </p>

        {/* Newsletter Subscription */}
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 w-full px-6 py-4 rounded-lg text-gray-800 bg-white focus:outline-none focus:ring-4 focus:ring-white/50 text-lg shadow-md"
          />
          <button
            onClick={handleSubscribe}
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-10 py-4 rounded-lg transition-all shadow-lg text-lg whitespace-nowrap"
          >
            Subscribe
          </button>
        </div>

        {/* Privacy Notice */}
        <p className="text-sm text-white/90 mt-4">
          By subscribing, you agree to receive our latest news and exclusive offers.
        </p>
      </div>
    </div>
  );
};

export default NewsletterCTA;