import React from "react";
import Background from "./Backgroundimgpic";
import Footer from "./Footer";

const Pic = () =>{
    return(
        <>
        <div className=' bg-slate-200'>
        <Background/>
        <div className=" bg-slate-200">
        <div className="px-5 text-2xl text-center py-2 underline font-helvetica">Ar. Sneha Maji</div>
            <div className='text-l py-5 font-helvetica px-5 text-center'>
                    <div>
                        I consider it to be an honour and opportunity to present to you a group of young and dynamic individuals who have been groomed to face challenges that lie ahead for them in the industry and
                        corporate world as a whole. With an increasing thrust being placed on Institute-Industry interaction,
                        it is my sincere belief that your esteemed organization and Indira Gandhi Delhi Technical University
                        for Women stand to gain immensely from this symbiotic relationship.<br/>
                        Young brains coupled with dynamic thoughts and fresh talent all ready to explore the heights of the
                        ever-existing and expanding corporate world is what we aim to provide to the companies in this
                        competitive environment. Our students are well trained on fundamental concepts and engineering
                        applications by top-notch faculty and staff. The students usually come from varied educational and
                        cultural backgrounds. The programs are designed to instill innovation, leadership, team work and
                        global focus into its participants. The exposure provided at this place trains not just for technological
                        superiority, but also for an overall understanding of the World. The undergraduate programs are
                        continuously monitored and frequently revised to incorporate cutting edge technological theories
                        and practice. Latest technologies are employed for effective delivery and the curriculum emphasizes
                        practice orientation.<br/>
                        Our teaching pedagogy (which includes presentations, immersive AR-VR visualisations,game based
                        learning, case studies, live projects, educational and industrial tours and participation in seminars
                        and conferences, club activities, sports and cultural activities) helps towards acquiring skills sought
                        after and needed by organizations. The intelligence, high energy and motivation of our students, as
                        well as their challenging work environments, assure that they bring an added measure of maturity
                        and knowledge to the classroom. The intensive training and the encouraging learning environment
                        of our institute has made our students proficient in the basic as well as specialized fields of
                        relevance. The various value-added courses being imparted at the Institute have given adequate
                        exposure to our students. Apart from core technical skills, our students are competent in soft skills
                        too.<br/>
                        I also express my sincere gratitude to all those organizations who have extended their active co-
                        operation to the department in accomplishing its endeavour successfully. It is indeed an honour to
                        present our students to your esteemed organizations and I look forward to your cooperation in the
                        placements of our students.<br/>
                        On behalf of the IGDTUW training and Placement team, I invite you to the 2023-2024 placement
                        process for undergraduate B.Arch Program and look forward to working with you in enabling you to
                        hire the best talent for your organization. My best wishes to you and the students for a successful
                        placement process..
                    </div>
                    <br/>
                <div>
                    Come, visit our campus and give us a chance to serve our skilled minds to you
                    You may share the requirement of skill and expectations from students of B.Arch. It will help us to
                    prepare them accordingly.
                    You may fill the Job Notification form if you are
                    interested :
                </div>
                <div className=" font-semibold font-helvetica">
                    <a href="http://docs.google.com/forms/d/1ixbGkVGykCdjpwsFKft8eW_OMH-FyG6Br3mGEP0brEE/edit" target="_blank" rel="noopener noreferrer">
                        Google Form
                    </a>
                </div>
            </div>
            </div>
            <Footer/>
            </div>
        </>

    );
};
export default Pic;