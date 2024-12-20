import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Background color animation
    gsap.to(aboutRef.current, {
      backgroundColor: "#0E0E0C",
      duration: 1,
      scrollTrigger: {
        trigger: aboutRef.current,
        // markers: true,
        start: "top 50%",
        end: "50%",
        toggleActions: "play reverse none none", // Ensures animation restarts each time
        ease: "ease-in-out",
      },
    });

    // Text color animation
    const aboutTextElem = aboutRef.current.querySelectorAll('.about-text');
    gsap.to(aboutTextElem, {
      color: "#DDDBD3",
      duration: 1,
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 50%",
        end: "50%",
        toggleActions: "play reverse none none", // Ensures animation restarts each time
        ease: "easeInQuart",
      },
    });

    const myPicture = aboutRef.current.querySelectorAll('.my_picture');
    gsap.to(myPicture, {
      attr: {"src": "/public/my-blacked-pic.jpeg"},
      duration: 0,
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 50%",
        end: "50%",
        toggleActions: "play reverse none none", // Ensures animation restarts each time
        ease: "easeIn",
      },
    });

    gsap.to(".span_text", {
      backgroundColor: "#ef4444",
      duration: 1,
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 50%",
        end: "50%",
        toggleActions: "play reverse none none", // Ensures animation restarts each time
        ease: "easeInQuart",
      },
    });

    return () => {
      ScrollTrigger.kill(); // Clean up on component unmount
    };
  }, []);

  return (
    <div
      ref={aboutRef}
      className="about w-full lg:min-h-screen flex flex-col justify-center lg:gap-0 gap-10 items-center bg-[#DDDBD3] px-8 py-20"
    >
      <div>
        <p className='about-text text-[#4D4D4D] font-["Garamond"] lg:leading-tight leading-snug tracking-tight text-[2.5rem] lg:text-[5.5rem]'>
          I focus on <span className='span_text bg-[#DDDBD3] px-2'>DESIGN</span>, <span className='span_text bg-[#DDDBD3] px-2'>FUNCTIONALITY,</span> and <span className='span_text bg-[#DDDBD3] px-2'>SCALABILITY</span> — creating seamless, adaptable, and intuitive solutions to grow and adapt for the future.
        </p>
      </div>
      <div className="w-full text-right">
        <p className='about-text font-["Helvetica_Neue_LT_Pro"] text-[#4D4D4D] text-[0.7rem] lg:text-sm'>
          As an <span className='span_text bg-[#DDDBD3] px-1 py-[0.15rem]'>SEO</span> specialist, I <br /> optimize websites to <span className='span_text bg-[#DDDBD3] px-1 py-[0.15rem]'>rank high,</span> <br /> blending creativity with technical precision.
        </p>
      </div>
      <div className='w-full h-[70vh] lg:h-[80vh] mt-8 relative'>
        <div className='w-[80%] h-full top-[50%] lg:left-[18%] lg:translate-x-0 left-[50%] translate-x-[-50%] translate-y-[-50%] absolute'>
        <img className='my_picture w-full h-full object-cover' src="/public/my-colored-pic.jpeg" alt="divansh" />
        </div>
      </div>
    </div>
  );
};

export default About;
