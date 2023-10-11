import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
const FacultyDirectory = () => {
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

    const facultyData = [
        {
            name: 'Dr. Rashmi Ashtt',
            designation: 'Professor & Head of Department',
            qualification:
              'Ph.D. , M.Plan (Urban Planning) School of Planning and Architecture (SPA ) Delhi , Architecture (A.I.I.A.), I.I.M.A., Indian Institute of Management, Ahmadabad, Certified for ‘Leadership and Change Management,• ‘Governance for inclusive Development’, certificate from school of Geography, Planning and international development Studies, Amsterdam, and The Netherlands.•NIDM/World Bank certificate courses in :Comprehensive Natural Disaster Risk Management Framework from National Institute of Disaste',
            areaOfInterest:
              'Urban Planning,Heritage Planning, GIS Mapping, AI and Data science, Smart cities,Environmental Planning, Architecture design and pedagogy Governance',
            imageSrc: 'images/rashmiashtt.jpg',
          },
          {
            name: 'Ar. Preeti Chauhan',
            designation: 'Associate Professor',
            qualification:
              'M.Sc. - Planning Buildings for Health (Medical Architecture Research Unit MARU) from London South Bank University, London, M.Plan- Town Planning from Institute of Town Planners India (ITPI, New Delhi), B.Arch from Government College of Architecture (GCA), Lucknow University, Lucknow, UP',
            areaOfInterest:
              'Healthcare Planning and Design, Evidence Based Design Techniques, Therapeutic Environmental Design in Hospitals, Product and Furniture Design, Sustainable Architecture, Town Planning, Interpersonal and Presentation skills',
            imageSrc: 'images/preeti chauhan.jpg',
          },
          {
            name: 'Ar. Vishal Rai',
            designation: 'Associate Professor',
            qualification: 'M.Plan. (Urban Planning), B.Arch.',
            areaOfInterest: 'Teaching Courses related to Sustainable Urban and Rural Development',
            imageSrc: 'images/vishal rai.png',
          },
          {
            name: 'Dr. Monali Vinayak Wankar',
            designation: 'Associate Professor',
            qualification: 'PhD, M.Arch (Architectural Conservation, SPA Delhi), B.Arch (VNIT, Nagpur)',
            areaOfInterest:
              'Architectural and Cultural Heritage, Conservation of Built Heritage, Corporate Social Responsibility, Revitalisation of Historic Water Bodies, GIS mapping of Heritage',
            imageSrc: 'images/monaliwankar.jpg',
          },
          {
            name: 'Ar. Sneha Maji',
            designation: 'Assistant Professor',
            qualification: 'M.Des in Industrial Design (Indian Institute of Technology, Delhi),B.Arch (SPA Delhi)',
            areaOfInterest:
              'Industrial Design, Human Computer Interaction (HCI), Graphics and New Media design, Architecture Design Thinking, Architecture Adaptive Re-use Responsive Architecture.',
            imageSrc: 'images/sneha.png',
          },
          {
            name: 'VENUS KASHYAP',
            designation: 'ASSISTANT PROFESSOR',
            qualification: 'M.ARCH.',
            areaOfInterest: 'Architectural Design, History of Architecture, Urban Design, Climatology, Graphics, Building Construction',
            imageSrc: 'images/DSC_1019.jpg',
          },
          {
            name: 'Ar. Jahnabi Kalita',
            designation: 'Assistant Professor',
            qualification: 'Master of Landscape Architecture from CEPT University, Ahmedabad,    B.Arch. from RTM Nagpur University',
            areaOfInterest: 'Landscape Architecture',
            imageSrc: 'images/jahnabi.png',
          },
          {
            name: 'Ar. Kshitij Kumar Sinha',
            designation: 'Assistant Professor',
            qualification: 'PG in Advanced Construction Management (ACM) from National Institute of Construction Management & Research (NICMAR), Pune; B.Arch (MITS), Gwalior',
            areaOfInterest: 'Advanced Construction Management, Real Estate Management, Design Management, Project Coordination',
            imageSrc: 'images/kshitij.png',
          },
          {
            name: 'Ar. RUPESH KUMAR',
            designation: 'Assistant Professor',
            qualification: 'M.Arch (Landscape Architecture), B.Arch',
            areaOfInterest: 'Improving Social-Behavioural Pattern Through Landscape Architecture and Design, Climatology and Environmental Studies, Building Materials & Construction Technology, Solar Passive Design Techniques, Slum Rehabilitation.',
            imageSrc: 'images/Rupesh.jpg',
          },
          {
            name: 'Ar. Jai Prakash',
            designation: 'Assistant Professor',
            qualification: 'Pursuing PhD. from NIT Hamirpur, M. Arch. (Sustainable Architecture) from NIT Hamirpur, B. Arch from SPA Vijayawada.',
            areaOfInterest: 'Sustainable Architecture, Building-integrated photovoltaics, Net Zero Energy Building, Lighting and Day lighting.',
            imageSrc: 'images/jaiprakash.jpg',
          },
          // Add more faculty members as needed
        ];
        return (
          <>
          <div className='main bg-slate-200'>
            <Navbar scrolled={scrolled} />
            <div className="col-sm-9 mx-3">
              <div className="middleBox ">
                <div className="title text-center text-2xl pt-28 pb-4 sm:pt-28 ">FACULTY DIRECTORY OF ARCHITECTURE AND PLANNING</div>
                <div className="headingPara">
                <table className="w-full">
            {facultyData.map((faculty, index) => (
              <React.Fragment key={index}>
                <tr className="mb-8">
                  <td className="w-1/5">Name : </td>
                  <td className="text-left w-3/5">{faculty.name}</td>
                  <td className="w-1/5" rowSpan="4">
                    <img
                      className="facultyDImage"
                      src={faculty.imageSrc}
                      alt={faculty.name}
                      width="200px"
                      height="200px"
                    />
                  </td>
                </tr>
                <tr className="mb-8">
                  <td>Designation : </td>
                  <td className="text-left">{faculty.designation}</td>
                </tr>
                <tr className="mb-8">
                  <td>Qualification : </td>
                  <td className="text-left">{faculty.qualification}</td>
                </tr>
                <tr className="mb-8">
                  <td>Area of Interest : </td>
                  <td className="text-left">{faculty.areaOfInterest}</td>
                </tr><br/><br/>
              </React.Fragment>
            ))}
          </table>
        </div>
      </div>
    </div>
    <div className='mt-10'><Footer/></div>
    </div>
    </>
  );
};
export default FacultyDirectory;