import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const CoordinatorHeads = () => {
  const [scrollY, setScrollY] = useState(0);
  const scrollThreshold = 10;

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

  const departmentHeads4 = [
    { name: 'Varsha Vats', imageSrc: 'images/varshaa.jpg' },
    { name: 'Apoorva Bhalotia', imageSrc: 'images/Apoorvaa.jpg' },
    { name: 'Bhawna Jha', imageSrc: 'images/bhawna.jpg' },
    { name: 'Ramya Gupta', imageSrc: 'images/ramya.jpeg' },
  ];

  const departmentHeads5 = [
    { name: 'Zarqa Rehman', imageSrc: 'images/Zarqa.jpeg' },
    { name: 'Sadiya Iqbal', imageSrc: 'images/sadiyaa.jpg' },
    { name: 'Shreya Suman', imageSrc: 'images/Shreya.png' },
    { name: 'Mishti Madan', imageSrc: 'images/mishti.jpg' },
  ];

  return (
    <div className='main bg-slate-200'>
      <Navbar scrolled={scrolled} />
      <div className='px-5 md:px-10'>
        <div className='text-center text-4xl font-bold md:py-20 pt-36 pb-9 underline'>
          Student Coordinators
        </div>
        <div className='text-center text-2xl font-bold'>5th Year</div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 place-items-center'>
          {departmentHeads5.map((head, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={head.imageSrc} alt={head.name} className="w-36 h-36 rounded-full mb-4" />
              <h2 className="text-lg text-center">{head.name}</h2>
            </div>
          ))}
        </div>
        <div className='text-center text-2xl font-bold my-5'>4th Year</div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 place-items-center'>
          {departmentHeads4.map((head, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={head.imageSrc} alt={head.name} className="w-36 h-36 rounded-full mb-4" />
              <h2 className="text-lg text-center">{head.name}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className='mt-10'>
        <Footer />
      </div>
    </div>
  );
};

export default CoordinatorHeads;
