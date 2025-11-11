
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import MenuPage from './MenuPage';
import Reservations from './Reservations';
import Desserts from './Desserts';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-background-light dark:bg-background-dark font-display text-stone-900 dark:text-stone-300">
        <div className="flex min-h-screen w-full flex-col overflow-x-hidden">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/reservations" element={<Reservations />} />
              <Route path="/desserts" element={<Desserts />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
