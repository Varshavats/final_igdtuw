import React, { useEffect, useState } from 'react';
import { BiLogoGmail, BiPhoneCall } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import { FaLocationDot } from "react-icons/fa6";
import Footer from './Footer';
import Navbar from './Navbar';



const Contact = () => {

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

  const emailAddress = 'tnpcelldap@gmail.com';
  const website = 'https://www.igdtuw.ac.in/';
  const telephone = '011-23900261, 23900264';
  const address = 'Madrasa Road Opposite St.James Church Kashmere Gate Delhi 110023 INDIA';



  return (
    <>
      <div className='main' style={{ minHeight: '100vh', paddingBottom: '60px' }}>
      <Navbar scrolled={scrolled} />
      <div className=' text-center text-4xl pt-40 pb-14 font-bold underline sm:pt-32 font-helvetica'>Contact Us</div>
      <div className='flex justify-center flex-row '>
      <div className='self-start m-0 p-0 md:h-30 md:w-26 h-20 w-20 lg:h-60 lg:w-60 '><img src="images/clip3.png" alt="contact" /></div>
    <div className="contact font-semibold pb-20 items-center ">
    
      {/* <p >Email: <a href={`mailto:${emailAddress}`}>{emailAddress}</a></p><br/> */}
      <div className='flex text-center items-center social-icons'>
      <BiLogoGmail className='mr-2'/>
      <a href={`mailto:${emailAddress}`} target="_blank" rel='noreferrer'>: {emailAddress}</a>
      </div>
      <div className='flex items-center social-icons'>
      <BiPhoneCall className='mr-2'/>
      <p>: {telephone}</p>
      </div>
      <div className='flex items-center social-icons'>
      <FaLocationDot className='mr-2 font-helvetica'/>
      <p>: Madrasa Road Opposite St.James Church<br></br>Kashmere Gate, Delhi-110023, India</p>
      </div>
      <div className='flex items-center social-icons'>
      <CgWebsite className='mr-2 font-helvetica'/>
      <a href={website} target="_blank" rel="noopener noreferrer">: {website}</a>
      </div>
    </div>
    </div>
    </div>
    <div className=' mt-20'><Footer /></div>
    </>
  );
};

export default Contact;