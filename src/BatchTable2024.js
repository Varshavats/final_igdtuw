import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Website from "./WebApi";
import "./table.css";
const BatchTable = () => {
  const [scrollY, setScrollY] = useState(0);
  const scrollThreshold = 5; // Adjust this threshold value as needed
  const data=Website.batch_2024;
  console.log(data);
  

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrolled = scrollY > scrollThreshold;
  return (
    <>
      <div className="main">
        <Navbar scrolled={scrolled} />
        <div className="col-sm-12 mx-3">
          <div className="title text-center text-2xl pt-20 pb-4">
            Batch 2019-2024
          </div>
          <div className="headingPara overflow-x-auto">
            <table className="table-auto w-full">
              <thead>
                <tr>
                  {/* <th scope="col">Student id</th> */}
                  <th scope="col">Student</th>
                  <th scope="col">Student Name</th>
                  {/* <th scope="col">Resume</th> */}
                  
                </tr>
              </thead>
              <tbody>
                {data.map((Val) => {
                  return (
                    <>
                      <tr>
                        {/* <td>{Val.id}</td> */}
                        <td className="text-center">
                          <div className="flex items-center justify-center max-w-full h-auto">
                            <img
                              className="stud_img"
                              src={Val.image}
                              alt={Val.sname}
                            />
                            
                          </div>
                        </td>
                        <td>
                        
                              <b>{Val.sname}</b><br/>
                              <a
                            className="resume-link"
                            href={Val.resume}
                            download={`${Val.sname}-resume`}
                            target="_blank"
                            rel="noreferrer"
                          >
                           Resume 
                          
                          </a>

                            
                        </td>
                        {/* <td>
                          <a
                            className="resume-link"
                            href={Val.resume}
                            download={`${Val.sname}-resume`}
                            target="_blank"
                            rel="noreferrer"
                          >
                          Download Resume 
                          
                          </a>
                        </td> */}
                       
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-10">
          <Footer />
        </div>
      </div>
    </>
  );
};
export default BatchTable;
