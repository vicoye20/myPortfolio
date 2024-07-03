import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu, GiDevilMask } from "react-icons/gi";
import { FaWhatsapp, FaGithub } from "react-icons/fa";
import { Flip, Zoom } from "react-reveal";
import axios from "axios";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notification, setNotification] = useState(""); // State for notification message

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [form, setForm] = useState({
    surName: "",
    firstName: "",
    phoneNumber: "",
    email: "",
    companyName: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNotification("Message sent successfully!"); // Set notification message
    // Send form data to server here
    axios.post("http://localhost:3000/send",form)
     .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        setNotification("Failed to send message. Please try again."); // Set notification message
      });
      setForm({
        surName: "",
        firstName: "",
        phoneNumber: "",
        email: "",
        companyName: "",
        message: "",
      })
  };

  return (
    <div className="w-screen h-full bg-gray-900 tablet:w-screen">
      <header className="bg-cyan-900 h-12 w-full items-center z-15 fixed">
        <Flip bottom>
          <nav className="hidden tablet:flex flex-row items-center p-4 justify-between font-bold text-slate-100 text-[20px] underline">
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

      <div className="m-auto pt-20 items-center flex flex-row justify-evenly gap-4">
        <button className="flex flex-row items-center gap-2 border-2 border-yellow-400 rounded-md text-slate-100 w-40 h-10 p-3">
          <FaWhatsapp />
          <a href="https://wa.me/2349055706732">WhatsApp Me!</a>
        </button>

        <button className="flex flex-row items-center gap-2 border-2 border-green-600 rounded-md text-slate-100 w-24 h-10 p-3">
          <FaGithub />
          <a href="https://github.com/vicoye20">GitHub</a>
        </button>
      </div>

      <p className="text-white text-center mt-4 font-semibold text-[18px]">
        Email : oyedokunvictorayobami@gmail.com
      </p>

      <Zoom>
        <div className="flex flex-col gap-2 m-auto mt-10 w-[100%] tablet:m-auto tablet:w-[50%]">
          <form className="flex flex-col gap-2 p-8" onSubmit={handleSubmit}>
            <h1 className="text-[25px] text-center text-yellow-300 underline animate-pulse">
              Send a Message!
            </h1>
            <input
              required
              type="text"
              name="surName"
              value={form.surName}
              placeholder="Surname"
              onChange={handleChange}
              className="rounded-md pl-4 p-2 w-full placeholder:text-lg placeholder:text-slate-600 focus:outline-none"
            />

            <input
              required
              type="text"
              name="firstName"
              value={form.firstName}
              placeholder="Firstname"
              onChange={handleChange}
              className="rounded-md pl-4 p-2 w-full placeholder:text-lg placeholder:text-slate-600 focus:outline-none"
            />

            <input
              required
              type="text"
              name="phoneNumber"
              value={form.phoneNumber}
              placeholder="Phone number"
              onChange={handleChange}
              className="rounded-md pl-4 p-2 w-full placeholder:text-lg placeholder:text-slate-600 focus:outline-none"
            />

            <input
              required
              type="email"
              name="email"
              value={form.email}
              placeholder="@email.com"
              onChange={handleChange}
              className="rounded-md pl-4 p-2 w-full placeholder:text-lg placeholder:text-slate-600 focus:outline-none"
            />

            <input
              required
              type="text"
              name="companyName"
              value={form.companyName}
              placeholder="Company name"
              onChange={handleChange}
              className="rounded-md pl-4 p-2 w-full placeholder:text-lg placeholder:text-slate-600 focus:outline-none"
            />

            <input
              required
              type="text"
              name="message"
              value={form.message}
              placeholder="Message"
              onChange={handleChange}
              className="rounded-md pl-4 p-2 w-full placeholder:text-lg placeholder:text-slate-600 focus:outline-none"
            />

            <button
              className="bg-slate-100 text-green-800 rounded-md p-2 w-full font-bold mb-10 hover:bg-yellow-400 hover:text-black"
              type="submit"
            >
              Submit
            </button>
          </form>

          {notification && (
            <div className="text-center text-green-500 font-bold mt-4">
              {notification}
            </div>
          )}
        </div>
      </Zoom>

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

export default Contact;
