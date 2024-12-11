'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import Founder from "../assets/images/";

export default function FounderCard() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden"
        >
          <div className="md:flex">
            <div className="md:shrink-0 relative h-48 w-full md:h-full md:w-48">
              <Image
                className="object-contain object-center"
                src={Founder.founder}
                alt="Marius - Founder & CEO"
                layout='fill'
                sizes="100vw"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900">Marius</h3>
              <p className="text-green-600 font-medium mb-2">Founder & CEO</p>
              <p className="text-gray-600 mb-4">
                Marius is passionate about leveraging technology to solve agricultural challenges, with a vision to empower farmers and improve food security.
              </p>
              <div className="flex space-x-4">
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  href="#" 
                  className="text-gray-600 hover:text-green-600"
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  href="#" 
                  className="text-gray-600 hover:text-green-600"
                >
                  <Mail className="w-6 h-6" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}