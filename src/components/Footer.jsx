import React from "react";
import { RiMenu3Line } from "react-icons/ri";

const Footer = () => {
  return (
    <div id="contact" className="bg-[#DDDBD3] lg:h-screen w-full lg:flex-row flex-col flex px-5 lg:px-20 lg:py-[10rem]">
      <div className="w-[100%] lg:w-[65%] h-full flex flex-col gap-2">
        <h1 className='font-hatton lg:text-[3rem] text-3xl leading-normal tracking-tight'>
          Have an Idea? <br />
          Drop Me a Message!
        </h1>
        <p className='font-helvetica lg:text-sm text-xs text-[#4D4D4D] tracking-wider'>
          I am looking for freelance opportunities or internships with startups,
          <br /> agencies, and design studios.
        </p>
        <form
          action="https://formspree.io/f/xldekgbw"
          method="POST"
          className="lg:pt-[4rem] pt-[2rem] flex flex-col lg:gap-[4rem] gap-[2rem]"
        >
          <div className='w-full flex justify-between items-center font-helvetica text-sm text-[#4D4D4D] tracking-wider'>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-[45%] bg-transparent lg:border-b-[1px] border-b-[0.5px] border-black outline-none"
            />
            <input
            name="email"
              type="email"
              placeholder="Your email"
              required
              className="w-[45%] bg-transparent lg:border-b-[1px] border-b-[0.5px] border-black outline-none"
            />
          </div>
          <div class="relative font-helvetica text-sm text-[#4D4D4D] tracking-wider">
            <textarea
            name="message"
            required
              class="w-full lg:border-b-[1px] border-b-[0.5px] bg-transparent border-black outline-none resize-y"
              placeholder="Enter text here"
              rows="2"
            ></textarea>
          </div>
          <button className="left-2 bottom-4 border-[0.5px] border-[#0E0E0C] rounded-full text-sm
 py-2 px-5 hover:bg-[#0E0E0C] hover:text-white hover:border-none transition-all duration-500 z-10">submit</button>
        </form>
      </div>
      <div className="lg:w-[35%] w-full lg:pl-[4rem] h-full flex flex-col items-start justify-between gap-[2rem] mt-[2rem] lg:mt-0">
        <div className="flex flex-col gap-2">
          <h3 className='font-hatton text-lg font-bold text-black'>
            Contact Details
          </h3>
          <a 
          href="mailto:divanshsingh1612@gmail.com"
          aria-label="Email Divansh Singh">
            <p className='font-helvetica tracking-wider hover:scale-125 lg:text-sm text-xs text-[#4D4D4D]'>
              divanshsingh1612@gmail.com
            </p>
          </a>
          <a href="tel:8506824981">
            <p className='font-helvetica tracking-wider hover:scale-125 lg:text-sm text-xs text-[#4D4D4D]'>
              +91 8506824981
            </p>
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className='font-hatton'>My Digital Footprints</h3>
          <a
            href="https://github.com/divanshsingh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className='font-helvetica hover:scale-125 tracking-wider lg:text-sm text-xs text-[#4D4D4D]'>
              Github
            </p>
          </a>
          <a
            href="https://www.linkedin.com/in/divansh-singh-16053b258/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className='font-helvetica hover:scale-125 tracking-wider lg:text-sm text-xs text-[#4D4D4D]'>
              LinkedIn
            </p>
          </a>
          <a
            href="https://x.com/DivanshSin39085"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className='font-helvetica hover:scale-125 tracking-wider lg:text-sm text-xs text-[#4D4D4D]'>
              Twitter
            </p>
          </a>
          <a
            href="https://medium.com/@divanshsingh1612"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className='font-helvetica hover:scale-125 tracking-wider lg:text-sm text-xs text-[#4D4D4D]'>
              Medium
            </p>
          </a>
          <a
            href="https://www.instagram.com/divansh_xml/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className='font-helvetica tracking-wider hover:scale-125 lg:text-sm text-xs text-[#4D4D4D]'>
              Instagram
            </p>
          </a>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h3 className='font-hatton'>Location</h3>
          <div className="flex lg:flex-col justify-between w-full lg:gap-2">
            <p className='font-helvetica tracking-wider lg:text-sm text-xs text-[#4D4D4D]'>
              Delhi, India
            </p>
            <p className='font-helvetica tracking-wider lg:text-sm text-xs text-[#4D4D4D] pb-2'>
              But Available from Anywhere
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
