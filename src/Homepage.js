import './App.css'; // Make sure the path is correct
import BackgroundImage from './Backgroundimghome';
import Footer from './Footer';

const HomePage = () => {

  return (
    <div className=' bg-slate-200'>
      <div className='main'>
        <BackgroundImage />
        {/* <div className='mx-6 italic text-center md:text-left'>“Someone's sitting in the shade today because someone planted a tree a long time ago.”</div> */}
        {/* <div className='mx-6 italic text-center md:text-right'>- Warren Buffett</div> */}
        <div className='text-center md:text-lg font-semibold'>ABOUT THE DEPARTMENT</div>
        <div className='font-helvetica mx-6 text-center md:text-left my-4 md:my-8'>The Department of Architecture and Planning started in 2015 as a step towards social equity and gender parity in technical professions, having a vision that architectural education should empower students to become protagonist of positive change by exploring, learning and practicing a sustainable form of architecture. The architectural education must, besides imparting knowledge, also endeavor to create opportunities for students to engage with real-life issues, so that they can reflect on their role in creating a better world. Further, it is also important that students are empowered to make informed choices, which are more life-sustaining. The department aims at development of the individual girl as a responsible member of peaceful, pluralist and inclusive society by learning to explore and practicing quality, sustainable form of architecture.</div>
        <div className='text-center md:text-lg font-semibold'>OBJECTIVES</div>
        <div className='font-helvetica mx-6 text-center md:text-left my-4 md:my-8'>To provide architectural education to empower students to become protagonist of positive change by exploring, learning and practicing a sustainable and inclusive form of architecture.
          <br/>To develop the capacity of the women students to practice architecture which is humane and sustainable by developing understanding of
          <br/>- Sustainability which encompasses not just environmental variables but also socially- economically- culturally responsive architecture.
          <br/>- How peace and inclusion can be fostered in society through domains of architecture and planning.
          <br/>To foster innovation and creativity through promotion of holistic learning environment, a flexible and distinctive pedagogy that leverages use of latest technology, hands on activities in the form of field visits, peer learning, etc. which instils a notion of lifelong learning.
          <br/>To promote a learning environment that welcomes and honours women from diverse cultures for involving themselves in intellectual inquisitiveness, explore knowledge dimensions for future application in industry, profession and life.
          <br/>To shape students into thoughtful and responsible individuals who are effectively able to tackle the challenges of the profession and create ecosystems which enhance the quality of life.
        </div>
        <div className='text-center md:text-lg font-semibold'>VISION</div>
        <div className='font-helvetica mx-6 text-center md:text-left my-4 md:my-8'>Development of the individual girl as a responsible member of peaceful, pluralist and inclusive society by learning to explore and practicing quality, sustainable form of architecture.</div>
        <div className='text-center md:text-lg font-semibold'>MISSION</div>
        <div className='font-helvetica mx-6 text-center md:text-left my-4 md:my-8'>The Department of Architecture and Planning in IGDTUW aspires to be the leading voice for excellence in the field of Architecture and Planning in our country, demonstrating how design enhances the quality of life, while addressing important issues of society through responsible architecture. The department aspires to become a distinguished centre of architectural thought, research, learning, innovation, capacity building and scholarly inquiry aiming towards becoming a globally recognised Department and University.</div>
        <div className='text-center md:text-lg font-semibold'>PSO/PEO</div>
        <div className="md:text-l font-semibold mx-6 mb-[-30px]">Department of Architecture & Planning<br/>PROGRAMME SPECIFIC OUTCOMES</div>
        <div className='font-helvetica mx-6 text-center md:text-left my-4 md:my-8'>PSO1: Identify, Analyse, design and develop working solutions for architectural design problems which are practically important for the society.
          <br/>PSO2: To enhance employability in architecture and other allied professions by providing incremental skills.
          <br/>PSO3: Enhancing research and demonstrating best practices learnt through internship and develop a problem-solving approach.
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default HomePage;
