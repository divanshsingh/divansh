import { useEffect, useRef, useState } from 'preact/hooks'
import React from 'react'
import { FaVolumeUp } from 'react-icons/fa'
import { IoVolumeMute } from 'react-icons/io5'
import { PiArrowDownThin } from 'react-icons/pi'
import gsap from 'gsap';

const Hero = () => {

    const [isMuted, setIsMuted] = useState(true)
    const videoRef = useRef(null)
    const arrowDown = useRef(null)


    const handleMuteUnmute = ()=>{
        videoRef.current.muted = !isMuted
        setIsMuted(!isMuted)
    }

    useEffect(() => {
      // Check if arrowDown ref is set before applying animation
      if (arrowDown.current) {
        gsap.to(arrowDown.current, {
          y: 100, // Move it 100px down
          repeat: -1, // Repeat infinitely
          duration: 1.5, // Duration for the animation
        });
      }
    }, []);


  return (
    <div className='bg-[#DDDBD3] w-full min-h-screen px-8 py-6 pt-14 overflow-hidden'>
        <div className='mt-[8rem]'>
            <h1 className='text-[3rem] lg:text-[2rem] mt-[4.4rem] font-["Hatton"] leading-snug'>FRONT-END <br />CODESMITH</h1>
        </div>
        <div className='w-full lg:w-[80%] h-[250px] overflow-hidden relative mt-[4rem] mb-[4rem]'>
        <div className='mt-1 absolute right-2 bottom-1 z-10'>
        <button onClick={handleMuteUnmute}>
            {isMuted ? <IoVolumeMute className='text-[#4D4D4D] text-2xl'/> : <FaVolumeUp className='text-[#4D4D4D] text-2xl'/>            }
        </button>
      </div>
        <video 
        ref={videoRef}
          src="/portfolio-video-compressed.mp4" 
          type="video/mp4" 
          loop  
          autoPlay
          volume={0.1}
          muted={isMuted}
        className="w-full h-full object-cover object-center"
        > </video>
        </div>
        <div className='w-full flex flex-col lg:flex-row justify-between h-full gap-14 lg:gap-0 items-end lg:items-baseline'>
            <div className='flex items-start font-["Helvetica_Neue_LT_Pro"] text-[#4D4D4D] w-[50%] lg:w-[36%] gap-10'>
                {/* <p>Scroll</p> */}
                <div ref={arrowDown} className='hidden lg:block'>
            <PiArrowDownThin className='text-2xl lg:text-8xl' />
                </div>
            <p className='text-[0.7] lg:text-[0.5rem] lg:text-sm'>I support designer and developer with creative mind</p>
                </div>
                <h2 className=' right-0 text-[3rem] lg:text-[2rem] lg:mt-10 font-["Hatton"] pt-3 lg:pt-0 leading-none text-right'>DIVNASH SINGH</h2>
        </div>
    </div>
  )
}

export default Hero
