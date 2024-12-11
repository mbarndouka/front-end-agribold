'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Building2, Warehouse } from 'lucide-react';

const markets = [
  {
    icon: Users,
    title: 'Smallholder Farmers',
    description: 'Perfect for individual farmers looking to optimize their crop yield.',
  },
  {
    icon: Building2,
    title: 'Agricultural Cooperatives',
    description: 'Ideal for farmer groups sharing resources and knowledge.',
  },
  {
    icon: Warehouse,
    title: 'Large-scale Farms',
    description: 'Enterprise solutions for industrial-scale agriculture.',
  },
];

export default function TargetMarket() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-900 mb-16"
        >
          Who We Serve
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {markets.map((market, index) => (
            <motion.div
              key={market.title}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <market.icon className="w-16 h-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{market.title}</h3>
              <p className="text-gray-600">{market.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}