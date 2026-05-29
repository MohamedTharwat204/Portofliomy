import React from 'react'
import SplitText from "./SplitText";
export default function Aboutme() {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
  return (
    <div id='Abo' className='h-140  py-12 flex flex-col items-center  gap-10 px-4 ' data-aos="fade-up"   data-aos-anchor-placement="top-bottom">

      <SplitText
        text={<p className='text-4xl sm:pt-16'>About <span className='text-purple-400'>me</span></p>}
        className="text-2xl font-semibold text-center"
        delay={50}
        duration={2.5}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete}
        showCallback
      />
      {/* <p className='sm:pt-16 text-4xl'>   About <span className='text-blue-400'>me </span> </p> */}

      <p className='text-2xl underline underline-offset-5'  data-aos="fade-right">Web Developer</p>

      <p className='w-[85%] sm:w-[80%] text-left text-xl'>Hello I am Mohamed Tharwat a highly skilled and experienced web developer I would be happy to serve and assist you I am passionate about creating attractive and easy-to-use websites I am proficient in front-end technologies such as HTML and CSS and Bootstrap and Tailwind and JavaScript and React JS and JQuery  I am always ready to modify my websites.</p>
    </div>
  )
}
