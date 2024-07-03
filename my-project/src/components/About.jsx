import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import image from "../images/ppp.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaWhatsapp } from "react-icons/fa";
import { GiDevilMask } from "react-icons/gi";
import { Flip, Zoom } from "react-reveal";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-screen h-full bg-gray-900 tablet:w-screen">
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

      <li className="text-center text-2xl decoration-2 p-16 underline text-yellow-300 tablet:font-bold">
        About Me!
      </li>

      <div className="m-auto items-center w-44 h-44 -mt-5 tablet:hidden">
        <img src={image} alt="" className="w-44 h-44 rounded-full" />
      </div>
      
        <div className="hidden m-auto items-center w-44 h-44 -mt-12 tablet:flex">
          <img src={image} alt="" className="w-44 h-44 rounded-full" />
        </div>
      

      <div className="w-full h-40 mt-2 text-center p-2 tablet:hidden">
        <p className="text-[16.5px] text-slate-100 font-semibold">
          Hello! I'm Oyedokun Victor Ayobami, a passionate and dedicated web
          developer with a knack for creating dynamic and user-friendly
          websites. I have honed my skills in front-end and back-end
          development, ensuring that every project I undertake is both visually
          appealing and highly functional.
        </p>
      </div>

      <div className="w-full h-52 p-3 tablet:hidden">
        <p className="text-cyan-300 text-center text-xl underline decoration-2 font-semibold animate-pulse">
          MY SKILLS.
        </p>
        <strong className="underline text-yellow-300 text-[16.5px] decoration-2">
          Front-End Development.
        </strong>
        <strong className="text-[16.5px] text-slate-100 font-semibold">
          {" "}
          :- Proficient in HTML, CSS, Tailwind, JavaScript, and frameworks like
          React.js.
        </strong>{" "}
        <br />
        <strong className="underline text-yellow-300 text-[16.5px] decoration-2">
          Back-End Development.
        </strong>
        <strong className="text-[16.5px] text-slate-100 font-semibold">
          {" "}
          :- Experienced with Node.js, Express, and databases such as MongoDB.
        </strong>
        <br />
        <strong className="underline text-yellow-300 text-[16.5px] decoration-2">
          Version Control.
        </strong>
        <strong className="text-[16.5px] text-slate-100 font-semibold">
          {" "}
          :- Comfortable using Git and GitHub for version control and
          collaboration.
        </strong>
      </div>

      <div className="w-full h-64 p-2 mb-16 tablet:hidden">
        <p className="text-center text-cyan-400 underline decoration-2 font-semibold text-xl animate-pulse">
          MY APPROACH.
        </p>
        <strong className="underline text-yellow-300 text-[16.5px] decoration-2">
          Problem Solving{" "}
        </strong>
        <strong className="text-[16.5px] text-slate-100 font-semibold">
          :- I love tackling challenges and finding innovative solutions to
          problems.
        </strong>
        <br />
        <strong className="underline text-yellow-300 text-[16px] decoration-2">
          Collaboration
        </strong>
        <strong className="text-[16.5px] text-slate-100 font-semibold">
          {" "}
          :- I believe in the power of teamwork and enjoy working with other
          developers, designers, and stakeholders.
        </strong>
        <br />
        <strong className="underline text-yellow-300 text-[16.5px] decoration-2">
          Continuous Learning{" "}
        </strong>
        <strong className="text-[16.5px] text-slate-100 font-semibold">
          {" "}
          :- Technology is ever-evolving, and I am committed to continuous
          learning and professional growth.
        </strong>
      </div>

      <Zoom>
        <aside className="hidden tablet:flex flex-row items-start justify-evenly p-3 mb-16">
          <div className="w-full h-64 mt-2 p-2 text-center">
            <p className="text-[16.5px] text-slate-100 mt-14 font-semibold">
              Hello! I'm Oyedokun Victor Ayobami, a passionate and dedicated web
              developer with a knack for creating dynamic and user-friendly
              websites. I have honed my skills in front-end and back-end
              development, ensuring that every project I undertake is both
              visually appealing and highly functional.
            </p>
          </div>
          <div className="w-full h-full p-2 border-2 border-y-0 border-dotted border-cyan-300">
            <p className="text-center text-cyan-400 underline decoration-2 font-semibold text-xl animate-pulse mb-6">
              MY APPROACH.
            </p>
            <strong className="underline text-yellow-300 text-[16.5px] decoration-2">
              Problem Solving{" "}
            </strong>
            <strong className="text-[16.5px] text-slate-100 font-semibold">
              :- I love tackling challenges and finding innovative solutions to
              problems.
            </strong>
            <br />
            <strong className="underline text-yellow-300 text-[16px] decoration-2">
              Collaboration
            </strong>
            <strong className="text-[16.5px] text-slate-100 font-semibold">
              {" "}
              :- I believe in the power of teamwork and enjoy working with other
              developers, designers, and stakeholders.
            </strong>
            <br />
            <strong className="underline text-yellow-300 text-[16.5px] decoration-2">
              Continuous Learning{" "}
            </strong>
            <strong className="text-[16.5px] text-slate-100 font-semibold">
              {" "}
              :- Technology is ever-evolving, and I am committed to continuous
              learning and professional growth.
            </strong>
          </div>
          <div className="w-full h-52 p-3">
            <p className="text-cyan-300 text-center text-xl underline decoration-2 font-semibold animate-pulse mb-6">
              MY SKILLS.
            </p>
            <strong className="underline text-yellow-300 text-[16.5px] decoration-2">
              Front-End Development.
            </strong>
            <strong className="text-[16.5px] text-slate-100 font-semibold">
              {" "}
              :- Proficient in HTML, CSS, Tailwind, JavaScript, and frameworks
              like React.js.
            </strong>{" "}
            <br />
            <strong className="underline text-yellow-300 text-[16.5px] decoration-2">
              Back-End Development.
            </strong>
            <strong className="text-[16.5px] text-slate-100 font-semibold">
              {" "}
              :- Experienced with Node.js, Express, and databases such as
              MongoDB.
            </strong>
            <br />
            <strong className="underline text-yellow-300 text-[16.5px] decoration-2">
              Version Control.
            </strong>
            <strong className="text-[16.5px] text-slate-100 font-semibold">
              {" "}
              :- Comfortable using Git and GitHub for version control and
              collaboration.
            </strong>
          </div>
        </aside>
      </Zoom>
      <footer className="bg-cyan-900 h-16 w-full items-center mt-4 flex flex-row justify-between p-3 fixed bottom-0 tablet:justify-between tablet:p-6">
        <p className="text-center text-yellow-300 text-[16px] animate-bounce font-bold tablet:text-[18px]">
          Oyedokun V.A&copy;
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

export default About;
