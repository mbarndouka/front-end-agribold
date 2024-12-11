'use client';

import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="py-20 bg-green-600">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Join thousands of farmers transforming agriculture with AI-powered insights
          </h2>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-lg flex-1 max-w-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-medium inline-flex items-center justify-center hover:bg-green-50 transition-colors"
            >
              Get Started
              <Send className="ml-2 w-4 h-4" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}