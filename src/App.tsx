import React from 'react';
import  Hero  from './components/Hero';
import  About  from './components/About';
import  Features  from './components/Features';
import  FounderCard  from './components/FounderCard';
import  CallToAction  from './components/CallToAction';
import  Footer  from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 max-w-screen-xl">
        <Hero />
        <About />
        <Features />
        <FounderCard />
        <CallToAction />
        <Footer />
      </div>
    </div>
  );
}

export default App;