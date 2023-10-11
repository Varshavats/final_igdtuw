import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Companies = () => {

  const [scrollY, setScrollY] = useState(0);
  const scrollThreshold = 5; // Adjust this threshold value as needed

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
    <>
    <div>
    <Navbar scrolled={scrolled} />
    <div className=' text-center text-4xl pt-40 font-bold underline sm:pt-32'>OUR PAST INTERNSHIP RECRUITERS</div>
    <div className=' mx-auto text-center '>
        <img src='images/companies1.png' alt='' className=" inline-block"/>
        <img src='images/companies2.png' alt='' className=" inline-block"/>
    </div>
    <Footer />
    </div>

    </>
  );
};
export default Companies;


