'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LineChart, Eye, Calendar, Users } from 'lucide-react';

const features = [
  {
    icon: LineChart,
    title: 'Real-time Analysis',
    description: 'Live drone footage with instant data overlays and health metrics.',
  },
  {
    icon: Eye,
    title: 'Smart Insights',
    description: 'AI-powered recommendations for optimal resource management.',
  },
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    description: 'Automated planning and monitoring of farming activities.',
  },
  {
    icon: Users,
    title: 'Farmer Dashboard',
    description: 'Personalized analytics and progress tracking tools.',
  },
];

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-900 mb-16"
        >
          Powerful Features
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <feature.icon className="w-12 h-12 text-green-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}