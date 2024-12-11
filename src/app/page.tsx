'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Features from '@/components/Features';
import TargetMarket from '@/components/TargetMarket';
import Benefits from '@/components/Benefits';
import FounderCard from '@/components/FounderCard';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <Features />
      <TargetMarket />
      <Benefits />
      <FounderCard />
      <CallToAction />
      <Footer />
    </main>
  );
}