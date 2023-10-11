// import React, { useState, useEffect } from 'react';
// import Navbar from './Navbar'; // Adjust the path as needed
import BackgroundImageExample from './Backgroundimghod';
import Footer from './Footer';

// import { useRouter } from 'next/router';
const Hod = () =>{
  // const [scrollY, setScrollY] = useState(0);
  // const scrollThreshold = 5; // Adjust this threshold value as needed

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollY(window.scrollY);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // const scrolled = scrollY > scrollThreshold;

  return (
    <>
    <div className=' bg-slate-200'>
      <BackgroundImageExample />
      <div className="flex flex-col items-center">
      <div className='px-5 py-5 flex flex-col md:flex-row'>
      <div className='flex flex-col'>
          <div className='h-44 w-44 mb-4'><img src='images/rashmiashtt.jpg' alt=""/></div>
          <div className='text-lg font-helvetica '>Dr. Rashmi Ashtt</div>
        </div>
        {/* text-l py-5 font-helvetica px-5 text-center */}
        <div>
        <div className='italic text-center md:text-left pb-5'>“Be a women who is so strong to be gentle, so educated to be humble, so fierce to be compassionate, so passionate to be rational, and so disciplined to be Liberal"</div>
        <div className='text-l font-helvetica mb-4 md:mr-4 '>
          The students of the 2019-2024, B.Arch program in the Department of Architecture & Planning, IGDTUW, have successfully completed five years and are ready to spread their wings and fly. The department started in 2015 as a step towards social equity and gender parity in technical professions, having a vision that architectural education should empower students to become protagonists of positive change by exploring learning and practicing a sustainable form of architecture.
          <br/>Indira Gandhi Delhi Technical University for Women, Department of Architecture & Planning, under her mentorship prepares the students to achieve excellence in the field of Architecture &Planning by imparting them holistic education and knowledge. DAP further looks forward to create a learning atmosphere and provide resources and dynamic career opportunities to the students. School has its focus, to groom, the students in to confident professionals, so that they can face the challenges in Architectural Design & Technology and create marvels.
          <br/><br/>On behalf of the department, I, along with the faculty wish, the 2019-2024, all the very best and hope they will use their architectural skill and knowledge to produce a positive vision in the country.
        </div>
        <div className=' text-lg md:mr-4'>Her Motto</div>
        <div className='italic text-center md:text-left pb-5'>Vision with Action</div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
    </>
  );
  };

export default Hod;
