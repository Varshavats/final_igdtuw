import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Navbar';

const BackgroundImageExample: React.FC = () => {
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
        style={{ backgroundImage: 'url("images/hodback.jpeg")' }}
      >
        <div className="overlay bg-black bg-opacity-30 h-full text-white p-6 md:p-20">
        <Navbar scrolled={scrolled} />
        <div className='text-5xl text-white md:pt-40 lg:pt-56 pt-40'>HOD's Message</div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundImageExample;
