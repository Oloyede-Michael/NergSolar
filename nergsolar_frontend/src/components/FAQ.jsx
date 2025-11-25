import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subscribeEmail: ''
  });

  const faqs = [
    {
      question: "What is the warranty on solar panels?",
      answer: "Our solar panels come with a 25-year performance warranty and a 10-year product warranty."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 5-7 business days. Expedited options available for 2-3 business days."
    },
    {
      question: "Can I install solar panels myself?",
      answer: "While DIY installation is possible, we recommend professional installation for safety and warranty purposes."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, bank transfers, and offer financing options."
    },
    {
      question: "How do I maintain my solar system?",
      answer: "Solar systems require minimal maintenance. Clean panels 2-3 times per year and monitor performance."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day money-back guarantee on all products in original condition."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleContactSubmit = () => {
    console.log('Contact form submitted:', formData);
    alert('Message sent successfully!');
  };

  const handleSubscribeSubmit = () => {
    console.log('Subscribe email:', formData.subscribeEmail);
    alert('Subscribed successfully!');
  };

  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Form and Newsletter */}
          <div className="space-y-8">
            {/* Contact Us Form */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Us
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  onClick={handleContactSubmit}
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - FAQ */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                >
                  {/* Question Button */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-base font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`flex-shrink-0 text-cyan-500 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      size={20}
                    />
                  </button>

                  {/* Answer Panel */}
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      openIndex === index
                        ? 'max-h-48 opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-5 pb-4 pt-1">
                      <div
                        className={`text-sm text-gray-600 leading-relaxed transform transition-transform duration-300 ${
                          openIndex === index
                            ? 'translate-y-0'
                            : '-translate-y-4'
                        }`}
                      >
                        {faq.answer}
                      </div>
                    </div>
                  </div>

                  {/* Animated Border */}
                  <div
                    className={`h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 ${
                      openIndex === index ? 'w-full' : 'w-0'
                    }`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;