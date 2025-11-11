
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import Cheesecake from './Cheesecake';
import Testimonials from './Testimonials';
import About from './About';
import PlatosEstrella from './PlatosEstrella';
import VerMenu from './VerMenu';

const Home: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-stone-900 dark:text-stone-300">
      <div className="flex min-h-screen w-full flex-col overflow-x-hidden">
        <main className="flex-1">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-16">
              <Hero />
              <PlatosEstrella />
              <VerMenu />
              <Cheesecake />
              <Testimonials />
              <About />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
