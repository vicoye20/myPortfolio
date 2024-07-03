import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiDevilMask } from "react-icons/gi";
import { FaWhatsapp } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { SiDevexpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { FaGithubAlt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { Flip} from "react-reveal";
import image from "../images/ppp.png";
import image1 from "../images/QuiZ.png";
import image2 from "../images/dico.png";


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-screen h-full bg-gray-900 tablet:w-screen">
      <header className="bg-cyan-900 h-12 w-full items-center z-1 fixed top-0">
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
            <div className="rounded-full text-yellow-300 bg-black w-10 h-10 flex items-center justify-center -mt-1 animate-bounceOnce">
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

      <div className="m-auto items-center w-44 h-44 pt-16 tablet:hidden">
        <img
          src={image}
          alt=""
          className="w-44 h-44 rounded-full animate-bounceOnce"
        />
      </div>

      <p className="text-[18px] text-center text-slate-300 font-bold pt-20 tablet:hidden">
        Hello, I am Oyedokun Victor Ayobami. I'm a passionate full-stack
        developer with a knack for crafting robust and scalable web application.
      </p>

      <div className="rounded-2xl bg-gray-950 h-60 mx-4 animate-bounceOnce m-auto mt-4 tablet:hidden">
        <div className="flex justify-center m-auto">
          <li className="underline decoration-2 text-yellow-300 text-[18px] font-semibold animate-pulse">
            My Tech Skills
          </li>
        </div>
        <div className="grid grid-cols-2 gap-4 p-3 justify-items-center ">
          <h4 className="flex items-center text-xl text-slate-200 gap-4">
            <li>JavaScript</li>
            <TbBrandJavascript className="h-8 w-8 text-blue-500" />
          </h4>

          <h4 className="flex items-center text-xl text-slate-200 gap-4">
            <li>React</li>
            <FaReact className="h-8 w-8 text-green-400" />
          </h4>

          <h4 className="flex items-center text-xl text-slate-200 gap-4">
            <li>Tailwind</li>
            <SiTailwindcss className="h-10 w-10 text-green-400" />
          </h4>

          <h4 className="flex items-center text-xl text-slate-200 gap-4">
            <li>Node.js</li>
            <FaNodeJs className="h-8 w-8 text-purple-500" />
          </h4>

          <h4 className="flex items-center text-xl text-slate-200 gap-4">
            <li>Express</li>
            <SiDevexpress className="h-7 w-8 text-cyan-600" />
          </h4>

          <h4 className="flex items-center text-xl text-slate-200 gap-4">
            <li>MongoDB</li>
            <SiMongodb className="h-8 w-8 text-yellow-500" />
          </h4>

          <h4 className="flex items-center text-xl text-slate-200 gap-4">
            <li>Git</li>
            <FaGithubAlt className="h-8 w-8 text-yellow-500" />
          </h4>
          <h4 className="flex items-center text-xl text-slate-200 gap-4">
            <li>Github</li>
            <FaGithub className="h-8 w-8 text-green-500" />
          </h4>
        </div>
      </div>

      <div className="flex justify-center m-auto mt-4 mb-16">
        <Link to="project">
          <button className="bg-green-900 w-44 h-8 text-slate-100 text-[18px] font-semibold animate-bounce rounded-xl hover:bg-black hover:text-yellow-300 hover:animate-none tablet:hidden">
            View my projects
          </button>
        </Link>
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


      <div className="hidden tablet:flex flex-row justify-between items-center -mt-12">
       
          <aside className="m-auto mt-8 grid columns-1 w-[25%]">
            <p className="text-center text-[20px] text-yellow-300 font-bold underline decoration-2">
              My Tech Skill
            </p>

            <div className="flex flex-col gap-3 items-center rounded-md mt-2">
              <h4 className="flex items-center text-xl text-slate-100 gap-4">
                <li>JavaScript</li>
                <TbBrandJavascript className="h-8 w-8 text-blue-500" />
              </h4>

              <h4 className="flex items-center text-xl text-slate-100 gap-4">
                <li>React</li>
                <FaReact className="h-8 w-8 text-green-400" />
              </h4>

              <h4 className="flex items-center text-xl text-slate-100 gap-4">
                <li>Tailwind</li>
                <SiTailwindcss className="h-10 w-10 text-cyan-400" />
              </h4>

              <h4 className="flex items-center text-xl text-slate-100 gap-4">
                <li>Node.js</li>
                <FaNodeJs className="h-8 w-8 text-purple-500" />
              </h4>

              <h4 className="flex items-center text-xl text-slate-100 gap-4">
                <li>Express</li>
                <SiDevexpress className="h-7 w-8 text-cyan-600" />
              </h4>

              <h4 className="flex items-center text-xl text-slate-100 gap-4">
                <li>MongoDB</li>
                <SiMongodb className="h-8 w-8 text-yellow-300" />
              </h4>
            </div>

            <p className="text-center text-[20px] text-yellow-300 mt-4 font-bold underline decoration-2">
              Version Control
            </p>

            <div className="flex flex-col gap-3 items-center rounded-md mt-2">
              <h4 className="flex items-center text-xl text-slate-100 gap-4">
                <li>Git</li>
                <FaGithubAlt className="h-8 w-8 text-cyan-400" />
              </h4>
              <h4 className="flex items-center text-xl text-slate-100 gap-4">
                <li>GitHub</li>
                <FaGithub className="h-8 w-8 text-green-400" />
              </h4>
            </div>
          </aside>
       

        
          <aside className="w-[50%] h-screen border-2 border-y-0 border-dotted border-green-700 items-center">
            <img src={image} alt="" className="w-44 h-44 m-auto rounded-full mt-8" />
            <p className="text-[20px] text-center text-slate-100 p-4 font-bold">
              Hello, I am Oyedokun Victor Ayobami. I'm a passionate full-stack
              developer with a knack for crafting robust and scalable web
              application.
            </p>
          </aside>
        

        <aside className="w-[50%] items-center grid columns-1 -mt-20">
          

          <div className="grid columns-1 justify-items-center animate-bounceOnce">
            <h1 className="text-center font-bold text-yellow-300 text-[20px] underline decoration-2">FRONT-END PROJECTS</h1>
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
          <button className="text-yellow-300 text-[17px] font-bold border-2 border-cyan-500 rounded-2xl h-10 w-36 bg-black -mt-12 mb-2 hover:bg-yellow-400 hover:text-black hover:border-black">
            <a href="https://quiz-app-sage-xi-83.vercel.app/">View Project</a>
          </button>
          </div>

          <div className="grid columns-1 justify-items-center animate-bounceOnce mt-6">
          <h1 className="text-center font-bold text-yellow-300 text-[20px] underline decoration-2">BACK-END PROJECTS</h1>
          <div className="flex flex-row justify-evenly gap-4 p-2">
            <img src={image2} alt="" className="h-44 mt-2" />
            <p className="text-white text-[14px] mt-2 font-semibold">
              A dictionary API is a web service that allows developers to
              integrate dictionary functionalities into their applications. It
              provides programmatic access to dictionary data, including word
              definitions, pronunciations, translations, synonyms, antonyms,
              example sentences, and more.
            </p>
          </div>
          <button className="text-yellow-300 text-[17px] font-bold border-2 border-cyan-500 rounded-2xl h-10 w-36 bg-black -mt-12 mb-2 hover:bg-yellow-400 hover:text-black hover:border-black">
            <a href="https://dictionary-xuxs.vercel.app/">View Project</a>
          </button>
        </div>

        </aside>


      </div>

    </div>
  );
};

export default Home;
