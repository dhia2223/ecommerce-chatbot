import React, { useState } from 'react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed with email:', email);
    setEmail('');
    // 🔥 Later: connect this to your backend newsletter API if needed
  };

  return (
    <section className="py-16 bg-primary">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Subscribe to our Newsletter
        </h2>
        <p className="text-third mb-8">
          Stay updated with the latest offers, new arrivals, and trends.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-96 px-4 py-3 rounded focus:outline-none text-four"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-secondary text-white px-6 py-3 rounded hover:bg-four transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
