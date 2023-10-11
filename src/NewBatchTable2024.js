import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Website from "./WebApi";

const BatchTable2024 = () => {
  const [scrollY, setScrollY] = useState(0);
  const scrollThreshold = 5; // Adjust this threshold value as needed
  const data = Website.batch_2024;
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredData = data.filter((item) =>
    item.sname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Navbar scrolled={scrolled} />
        <div className="container mx-auto py-20 px-4">
          <div className="text-center text-2xl font-bold mb-8  pt-20 lg:pt-2 ">Batch 2020-2024</div>
          <div className="flex mb-4 justify-end">
            <input
              type="text"
              className="border border-gray-300 p-2 rounded-lg"
              placeholder="Search by student name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="overflow-x-auto">
            <table className=" min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border ">Student id</th>
                  <th className="py-2 px-4 border ">Student</th>
                  <th className="py-2 px-4 border text-left">Student Details</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((Val) => (
                  <tr key={Val.id} className="border-b">
                    <td className="py-2 px-4 border">{Val.id}</td>
                    <td className="py-2 px-4 border">
                      <div className="flex">
                        <img className="w-36 h-36 object-cover" src={Val.image} alt={Val.sname} />
                      </div>
                    </td>
                    <td className="py-2 px-4 border text-left w-9/12">
                      <div className="flex ">
                        <b>{Val.sname}</b>
                      </div>
                      <div>
                        <span><b>Interests : </b>{Val.interest}</span>
                      </div>
                      <div>
                        <a
                          className="resume-link hover:text-black text-blue-700 italic"
                          href={Val.resume}
                          download={`${Val.sname}-resume`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Resume
                        </a>
                      </div>       
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default BatchTable2024;
