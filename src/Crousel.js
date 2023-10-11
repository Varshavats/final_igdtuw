import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const HorizontalCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    'images/crousel/1.jpg',
    'images/crousel/2.jpg',
    'images/crousel/26.jpg',
    'images/crousel/7.jpg',
    'images/crousel/8.jpg',
    'images/crousel/21.jpg',
    'images/crousel/9.jpg',
    'images/crousel/10.jpg',
    'images/crousel/22.jpg',
    'images/crousel/13.jpg',
    'images/crousel/14.jpg',
    'images/crousel/29.jpg',
    'images/crousel/15.jpg',
    'images/crousel/16.jpg',
    'images/crousel/3.jpg',
    'images/crousel/24.jpg',
    'images/crousel/4.jpg',
    'images/crousel/17.jpg',
    'images/crousel/11.jpg',
    'images/crousel/12.jpg',
    'images/crousel/18.jpg',
    'images/crousel/19.jpg',
    'images/crousel/23.jpg',
    'images/crousel/25.jpg',
    'images/crousel/5.jpg',
    'images/crousel/6.jpg',
    'images/crousel/27.jpg',
    'images/crousel/28.jpg',
    // Add more image URLs as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000); // Change this value to adjust the interval (in milliseconds)

    return () => clearInterval(interval);
  }, [images.length]);

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
    <div className=' bg-slate-200'>
    <Navbar scrolled={scrolled} />
    <div className=' text-center text-4xl pt-40 font-bold underline sm:pt-32'>DEPARTMENT OF ARCHITECTURE AND PLANNING</div>
    <div className='font-serif mx-20 text-center my-4 md:my-8'>The Department of Architecture and Planning started in 2015 as a step towards social equity and gender parity in technical professions, having a vision that architectural education should empower students to become protagonist of positive change by exploring, learning and practicing a sustainable form of architecture. The architectural education must, besides imparting knowledge, also endeavor to create opportunities for students to engage with real life issues, so that they can reflect on their role in creating a better world. Further, it is also important that students are empowered to make informed choices, which are more life-sustaining. The department aims at development of the individual girl as a responsible member of peaceful, pluralist and inclusive society by learning to explore and practicing quality, sustainable form of architecture.</div>
    <div className="carousel-container relative overflow-hidden flex justify-center h-full mt-10 max-w-[85%] mx-auto border-green-800 border-4 py-4 ">
      <div
        className="carousel-track flex transition-transform ease-in-out duration-300"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="carousel-slide min-w-full box-border px-4">
            <img src={image} alt={`Image ${index + 1}`} className=" h-96 w-full " />
          </div>
        ))}
      </div>
    </div>
    <div className=' text-center text-4xl pt-20 font-bold underline '>TnP Brochure</div>
    <div className="flex justify-center items-center h-screen top-20">
      <iframe
        title="Brochure Viewer"
        src="pdfs/brochure.pdf" // Update the path
        width="80%" 
        height="500px"
      ></iframe>
    </div>
    <Footer />
    </div>
    </>
  );
};
export default HorizontalCarousel;


