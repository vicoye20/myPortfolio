import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiDevilMask } from "react-icons/gi";
import { FaWhatsapp } from "react-icons/fa";
import { Flip } from "react-reveal";
import image1 from "../images/QuiZ.png";
import image2 from "../images/dico.png";
import image3 from "../images/Screenshot (30).png";

const Project = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-screen h-[100%] bg-gray-900 tablet:w-screen tablet:h-screen">
      <header className="bg-cyan-900 h-12 w-full items-center z-1 fixed">
        <Flip bottom>
          <nav className=" hidden tablet:flex flex-row items-center p-4 justify-between font-bold text-slate-100 text-[20px] underline">
            <NavLink to="/" activeClassName="active">
              <button>Home</button>
            </NavLink>
            <NavLink to="/project" activeClassName="active">
              <button>Project</button>
            </NavLink>
            <NavLink to="/about" activeClassName="active">
              <button>About</button>
            </NavLink>
            <NavLink to="/contact" activeClassName="active">
              <button>Contact</button>
            </NavLink>
          </nav>
        </Flip>

        <Flip bottom>
          <nav className="flex flex-row justify-between items-center p-2 tablet:hidden">
            <div className="rounded-full text-yellow-300 bg-black w-10 h-10 flex items-center justify-center -mt-1">
              <GiDevilMask className="w-8 h-8" />
            </div>
            <button onClick={toggleMenu}>
              <GiHamburgerMenu className="h-8 w-8 text-yellow-300 font-extrabold" />
            </button>
            {isOpen && (
              <div className="flex flex-col w-32 h-36 bg-cyan-900 mt-6 font-bold text-[18px] text-white gap-2 items-center absolute right-0 top-6 rounded-bl-2xl rounded-br-2xl">
                <NavLink to="/" activeClassName="active">
                  <button className="hover:text-green-500">Home</button>
                </NavLink>
                <NavLink to="/project" activeClassName="active">
                  <button className="hover:text-green-500">Projects</button>
                </NavLink>
                <NavLink to="/contact" activeClassName="active">
                  <button className="hover:text-green-500">Contact</button>
                </NavLink>
                <NavLink to="/about" activeClassName="active">
                  <button className="hover:text-green-500">About</button>
                </NavLink>
              </div>
            )}
          </nav>
        </Flip>
      </header>

      <h1 className="pt-14 text-center text-yellow-300 text-xl font-semibold underline decoration-2">
        FRONTEND PROJECT
      </h1>

      <div className="grid columns-2 gap-2 tablet:hidden">
        <div className="mt-4 grid columns-1 justify-items-center animate-bounceOnce">
          <div className="flex flex-row justify-evenly gap-4 p-2">
            <img src={image1} alt="" className="h-44 mt-4" />
            <p className="text-white text-[14px] mt-4 font-semibold">
              The Quiz App is a dynamic and interactive web application designed
              to provide users with a fun and engaging way to test their
              knowledge on various subjects. This application allows users to
              start a quiz by entering their name, select answers, and receive
              their results upon completion.
            </p>
          </div>
          <button className="text-yellow-300 text-[17px] font-bold border-2 border-cyan-500 rounded-2xl h-10 w-36 bg-black -mt-8 mb-2 hover:bg-yellow-400 hover:text-black hover:border-black">
            <a href="https://quiz-app-sage-xi-83.vercel.app/">View Project</a>
          </button>
        </div>

        <div className="mt-4 grid columns-1 justify-items-center animate-bounceOnce">
          <div className="flex flex-row justify-evenly gap-4 p-2">
            <img src={image2} alt="" className="h-44 mt-4" />
            <p className="text-white text-[14px] mt-4 font-semibold">
              A dictionary API is a web service that allows developers to
              integrate dictionary functionalities into their applications. It
              provides programmatic access to dictionary data, including word
              definitions, pronunciations, translations, synonyms, antonyms,
              example sentences, and more.
            </p>
          </div>
          <button className="text-yellow-300 text-[17px] font-bold border-2 border-cyan-500 rounded-2xl h-10 w-36 bg-black -mt-8 mb-2 hover:bg-yellow-400 hover:text-black hover:border-black">
            <a href="https://dictionary-xuxs.vercel.app/">View Project</a>
          </button>
        </div>

        <div className="mt-4 grid columns-1 justify-items-center animate-bounceOnce">
          <div className="flex flex-row justify-evenly gap-4 p-2">
            <img src={image3} alt="" className="h-40 w-44 mt-4 rounded-2xl" />
            <p className="text-white text-[14px] mt-4 font-semibold">
              A country API is a web service that provides detailed information
              about countries around the world. This API allows developers to
              integrate country data into their applications, offering users
              easy access to a wide range of information about different
              nations.
            </p>
          </div>
          <button className="text-yellow-300 text-[17px] font-bold border-2 border-cyan-500 rounded-2xl h-10 w-36 bg-black mb-2 hover:bg-yellow-400 hover:text-black hover:border-black">
            <a href="https://country-s-api.vercel.app/">View Project</a>
          </button>
        </div>
        <h1 className="pt-4 text-center text-yellow-300 text-xl font-semibold underline decoration-2">
          BACK-END PROJECT
        </h1>
        <div className="mt-4 grid columns-1 border-2 border-cyan-300 border-x-0 border-dashed rounded-2xl justify-items-center mb-40">

        </div>

      </div>

      <footer className="bg-cyan-900 h-16 w-full items-center mt-4 flex flex-row justify-between p-3 fixed bottom-0 tablet:justify-between tablet:p-6">
        <p className="text-center text-yellow-300 text-[16px] animate-bounce font-bold tablet:text-[18px]">
          Oyedokun V.&copy;
        </p>

        <button className="flex flex-row items-center gap-2 bg-yellow-300 rounded-md text-black w-32 h-6 p-3 animate-bounce font-semibold hover:bg-black hover:text-yellow-300 hover:animate-none">
          <FaWhatsapp />
          <a href="https://wa.me/2349055706732">WhatsApp</a>
        </button>

        <li className="text-yellow-300 font-semibold text-[16px] animate-bounce tablet:text-[18px]">
          Available for Job
        </li>
      </footer>

      
    </div>
  );
};

export default Project;
