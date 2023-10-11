import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Batch";
import Dropdown2 from "./More";
import "./index.css"; // Make sure the path is correct

const Navbar = ({ scrolled }) => {
  return (
    <>
      <header
        className={` z-50 fixed top-0 left-0 right-0 flex items-center transition ${
          scrolled ? "bg-green-900 text-white " : "bg-transparent text-black"
        } duration-300 ease-in-out`}
      >
        <nav className="container md:mr-16  ">
          <div className="navbar flex items-center justify-between font-medium">
            <div className="flex items-center">
              <img src="images/logo.png" alt="" className="h-12 w-12" />
              <div>
                <div className="font-serif font-bold text-lg pt-1 pb-1 leading-5">
                  PLACEMENT CELL-IGDTUW DELHI<br/>
                  <a className="text-xs -mx-4 font-thin font-helvetica">DEPARTMENT OF ARCHITECTURE AND PLANNING</a>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-between">
              <div className="my-2">
                <Link to="/" className="hover:font-semibold font-helvetica underline">
                  Home
                </Link>
              </div>
              <div className="my-2">
                <Link to="/hod" className="hover:font-semibold font-helvetica underline">
                  HOD's Message
                </Link>
              </div>
              <div className="my-2">
                <Link to="/pic" className="hover:font-semibold font-helvetica underline">
                  PIC's Message
                </Link>
              </div>
              {/* <div className="my-2">
                <Link to="/achieve" className="hover:font-bold">
                  Achievements
                </Link>
              </div> */}
              <div className="my-2">
                <Dropdown />
              </div>
              <div className="my-2">
                <Dropdown2 />
              </div>
              
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
