import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';

const BackgroundImage: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const scrollThreshold = 5;

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrolled = scrollY > scrollThreshold;

  return (
    <div className="relative">
      <div
        className="h-96 bg-cover bg-center relative"
        style={{ backgroundImage: 'url("images/c.jpg")' }}
      >
        <div className="overlay bg-black bg-opacity-30 h-full text-white p-6 md:p-20">
          <Navbar scrolled={scrolled} />
          <div className="text-right font-bold text-slate-200 italic pt-40  md:pt-32 lg:pt-10 ">
            <div>Someone's sitting in the shade today because someone planted a tree a long time ago.</div>
            <div>- Warren Buffett</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundImage;
