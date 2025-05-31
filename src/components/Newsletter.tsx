import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple email validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // In a real app, you would submit to a backend here
    setIsSubmitted(true);
    setError('');
  };

  return (
    <section className="py-16 bg-green-800 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated with GoGreen</h2>
          <p className="text-green-100 mb-8">
            Subscribe to our newsletter to receive the latest news, tips, and updates on
            environmental initiatives and sustainable living practices.
          </p>

          {isSubmitted ? (
            <div className="bg-green-700 p-6 rounded-lg inline-flex items-center">
              <CheckCircle className="h-6 w-6 mr-3 text-green-300" />
              <p>Thank you for subscribing! You'll hear from us soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-grow relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  {error && (
                    <p className="absolute text-sm text-red-300 mt-1">{error}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-500 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 flex items-center justify-center"
                >
                  Subscribe
                  <Send className="ml-2 h-4 w-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;