import React from 'react';
import gsap from 'gsap';

const Projects = () => {
  const handleImgEnterAnimation = (e) => {
    if (window.innerWidth <= 768) return;
    const img = e.currentTarget.querySelector('.project_detail');
    gsap.to(img, {
      y: -700, // Bring the element into view
      duration: 1,
      ease: "expo",
    });
  };

  const handleImgEndAnimation = (e) => {
    if (window.innerWidth <= 768) return;
    const img = e.currentTarget.querySelector('.project_detail');
    gsap.to(img, {
      y: 0, // Move it slightly back (but keep it visible)
      duration: 1,
      ease: "expo",
    });
  };

  const Projects = [
    {
      src: "/public/yourcartProject.jpg",
      url: "https://yourcart-three.vercel.app/",
      name: "Your Cart"
    },
    {
      src: "/public/nexorProject.jpg",
      url: "https://nexor.vercel.app/",
      name: "Nexor"
    },
    {
      src: "/public/cryptopulseProject.jpg",
      url: "https://cryptopulse-alpha.vercel.app/",
      name: "Crpyto Pulse"
    },
    {
      src: "https://images.unsplash.com/photo-1573770012830-7cf1777db19c?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      url: "",
    },
  ]

  return (
    <div className='bg-[#DDDBD3] w-full min-h-[100vh] px-8 py-6'>
      <div className='projects w-full lg:h-[90vh] flex lg:flex-row flex-col relative bg-[#fbf9f0] overflow-hidden'>
        <h2 className='absolute font-["Hatton"] text-[2rem] leading-snug lg:text-[3rem] text-[#0E0E0C] lg:right-64 lg:pl-0 pl-10 top-20 z-10'>
          PROJECTS THAT <br /> MAKE IMPACT
        </h2>
       {Projects.map((project, index) => (
          <div
            key={index}
            className='h-auto lg:h-full flex-1 border-r-[0.5px] border-black'
            onMouseEnter={handleImgEnterAnimation}
            onMouseLeave={handleImgEndAnimation}
          >
            <div className='project_detail w-full h-full relative lg:top-[700px]'>
              <a href={project.url}>
            <button className="left-2 absolute bottom-4 border-[0.5px] border-[#0E0E0C] rounded-full text-sm
 py-2 px-5 hover:bg-[#0E0E0C] hover:text-white hover:border-none transition-all duration-500 z-10">explore</button>
              </a>
            <img
              src={project.src}
              alt=""
              className='project_img w-full h-full object-cover'
            />
            </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
