'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Leaf, PiggyBank } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Increased Productivity',
    description: 'Boost crop yields by up to 30% with AI-driven insights.',
  },
  {
    icon: Leaf,
    title: 'Reduced Waste',
    description: 'Minimize resource waste through precise monitoring.',
  },
  {
    icon: PiggyBank,
    title: 'Cost Effective',
    description: 'Affordable solutions that deliver measurable ROI.',
  },
];

export default function Benefits() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 bg-white" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-6"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold text-center text-gray-900 mb-16"
        >
          Why Choose Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-block p-4 bg-green-100 rounded-full mb-6"
              >
                <benefit.icon className="w-8 h-8 text-green-600" />
              </motion.div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}