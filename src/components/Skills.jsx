import React from 'react'

const Skills = () => {
  return (
    <div className='bg-[#DDDBD3] w-full px-8 py-6 pt-14 flex justify-center relative'>
      <h1 className='text-[3rem] hidden lg:text-[20rem] mt-[4.4rem] font-["Hatton"] leading-none  absolute left-0 text-[#AEAE9D] top-52'>SKILLS</h1>
      <div className='skill-main-div w-full  mx-10 flex'>

{/* skills ka left div */}
        <div className="skill-left-div h-full w-[50%] flex">

          {/* skills ke left ke andar ka left div */}
        <div className="skill-left-inside-left-div h-full w-[70%] hidden lg:block "></div>

        {/* skills ke right ke andar ka right div */}
          <div className="skill-right-inside-right-div h-full w-[30%]  font-['Helvetica_Neue_LT_Pro'] flex flex-col text-3xl">
            <p className='h-[10rem]'>01</p>
            <p className='h-[10rem]'>02</p>
            <p className='h-[10rem]'>03</p>
            <p className='h-[10rem]'>04</p>
            <p className='h-[10rem]'>05</p>
            <p className='h-[10rem]'>06</p>
          </div>
        </div>

        {/* skills ka right div */}
        <div className="skill-right-div h-full w-[50%] flex">

           {/* skills ke left ke andar ka left div */}
        <div className="skill-left-inside-left-div h-full w-[40%] hidden lg:block"></div>

        {/* skills ke right ke andar ka right div */}
            <div className="skill-right-inside-right-div h-full w-[60%]  flex flex-col justify-between">
              <div className='first h-[8rem] lg:h-[10rem] w-[8rem] lg:w-full'>
                  <h3 className='font-["Helvetica_Neue_LT_Pro"] text-[1rem] leading-[1.5rem] lg:text-3xl text-right text-[#0E0E0C] mb-8'>HTML5 & CSS3</h3>
                <p className='font-["Helvetica_Neue_LT_Pro"] text-[#4D4D4D] lg:text-[0.5rem] text-[0.73rem] leading-[1rem] lg:text-sm mb-8'>Semantic HTML, CSS Grid & Flexbox, Responsive design,</p>
              </div>
              <div className='second h-[8rem] lg:h-[10rem] w-[8rem] lg:w-full'>
                  <h3 className='font-["Helvetica_Neue_LT_Pro"] text-[1rem] leading-[1.5rem] lg:text-3xl text-right text-[#0E0E0C] mb-8'>JavaScript (ES6+)</h3>
                <p className='font-["Helvetica_Neue_LT_Pro"] text-[#4D4D4D] lg:text-[0.5rem] text-[0.73rem] leading-[1rem] lg:text-sm mb-8'>DOM manipulation, Fetch API/AJAX, Event handling, Promises</p>
              </div>
              <div className='third h-[8rem] lg:h-[10rem] w-[8rem] lg:w-full'>
                  <h3 className='font-["Helvetica_Neue_LT_Pro"] text-[1rem] leading-[1.5rem] lg:text-3xl text-right text-[#0E0E0C] mb-8'>Frameworks and Libraries</h3>
                <p className='font-["Helvetica_Neue_LT_Pro"] text-[#4D4D4D] lg:text-[0.5rem] text-[0.73rem] leading-[1rem] lg:text-sm mb-8'>React.js, Redux, Tailwind, GSAP</p>
              </div>
              <div className='fourth h-[8rem] lg:h-[10rem] w-[8rem] lg:w-full'>
                  <h3 className='font-["Helvetica_Neue_LT_Pro"] text-[1rem] leading-[1.5rem] lg:text-3xl text-right text-[#0E0E0C] mb-8'>Version Control</h3>
                <p className='font-["Helvetica_Neue_LT_Pro"] text-[#4D4D4D] lg:text-[0.5rem] text-[0.73rem] leading-[1rem] lg:text-sm mb-8'>Git & GitHub </p>
              </div>
              <div className='five h-[8rem] lg:h-[10rem] w-[8rem] lg:w-full'>
                  <h3 className='font-["Helvetica_Neue_LT_Pro"] text-[1rem] leading-[1.5rem] lg:text-3xl text-right text-[#0E0E0C] mb-8'>UI/UX Design</h3>
                <p className='font-["Helvetica_Neue_LT_Pro"] text-[#4D4D4D] lg:text-[0.5rem] text-[0.73rem] leading-[1rem] lg:text-sm mb-8'>Basic Figma, Typography, Color theory, Spacing & alignment</p>
              </div>
              <div className='six h-[8rem] lg:h-[10rem] w-[8rem] lg:w-full'>
                  <h3 className='font-["Helvetica_Neue_LT_Pro"] text-[1rem] leading-[1.5rem] lg:text-3xl text-right text-[#0E0E0C] mb-8'>Backend</h3>
                <p className='font-["Helvetica_Neue_LT_Pro"] text-[#4D4D4D] lg:text-[0.5rem] text-[0.73rem] leading-[1rem] lg:text-sm mb-8'>Node.js, Express.js MongoDB</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
