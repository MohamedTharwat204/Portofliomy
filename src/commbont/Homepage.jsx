import React from 'react'
import imgg from '../assets/img.png'
import { uesDiark } from "../store";
import TextType from './TextType';

import { FaWhatsapp } from "react-icons/fa";


export default function Homepedg() {
  const { diark } = uesDiark()
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };
  return (
    // <div className='min-w-full min-h-dvh relative  '>
    <div id='Home' className={`${diark ? 'dark:bg-gray-950  text-white' : 'bg-emerald-700 text-black'}  overflow-hidden        relative  flex flex-col sm:flex-row ring shadow-xl ring-gray-900/5 w-full h-dvh`}>

      <img src={imgg} className=' sm:w-[35%]    sm:h-dvh ' alt="" />


      <div className={`${diark ? 'dark:bg-emerald-400/90  text-white' : ' bg-black/85  text-black'} sm:w-[65%]  flex text-white sm:h-dvh  h-180 absolute sm:relative w-full top-110 sm:top-0 [clip-path:polygon(0_11%,100%_0%,100%_100%,0%_100%)] sm:[clip-path:polygon(0%_100%,100%_0%,100%_100%,0%_100%)] '`}>
        <div className='w-[80%]   px-3  sm:absolute  sm:top-[53%] sm:left-[35%]'>
          <p className='p-10 '></p>
          <p className='pt-10  text-4xl sm:flex sm:w-[50%]  ' data-aos="fade-left">Hi I am</p>
          <p className=' py-5 text-2xl uppercase sm:flex sm:w-[65%] ' data-aos="fade-up-left"> mohamed abdullah</p>

          <TextType className='text-[17px] sm:flex sm:absolute sm:w-[60%] '
            text={[' Im a programmer and web developer and I have good knowledge in programming My objective is to become a successful expert in the field of Computer Science Information Technology']}
            typingSpeed={185}
            pauseDuration={5000}
            showCursor
            cursorCharacter="|"
            texts={["Welcome to React Bits! Good to see you!", "Build some amazing experiences!"]}
            deletingSpeed={100}
            variableSpeedEnabled={false}
            variableSpeedMin={60}
            variableSpeedMax={120}
            cursorBlinkDuration={1.7}
            loop={false}
          />
        </div>

        <div className='w-[20%]  h-dvh'>
          <div className="flex  flex-col items-center gap-4 justify-center pt-10  sm:flex sm:absolute sm:top-[40%] sm:right-5 ">

            <div className="social-button">
              <button className="relative w-12 h-12 rounded-full group">
                <div
                  className="floater w-full h-full absolute top-0 left-0 bg-violet-400 rounded-full duration-300 group-hover:-left-8 group-hover:shadow-2xl"
                ></div>
                <div
                  className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-violet-400 rounded-full"
                >
                  <a href="https://www.linkedin.com/in/mohamed-abdullah-354a92305

                    " target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                      height="24" viewBox="0 0 24 24">
                      <path fill="#000"
                        d="M12.001 9.55c.917-.937 2.111-1.55 3.5-1.55a5.5 5.5 0 0 1 5.5 5.5V21h-2v-7.5a3.5 3.5 0 1 0-7 0V21h-2V8.5h2zm-7-3.05a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m-1 2h2V21h-2z" />
                    </svg></a>

                </div>
              </button>
            </div>

            <div className="social-button">
              <button className="relative w-12 h-12 rounded-full group">
                <div
                  className="floater w-full h-full absolute top-0 left-0 bg-black rounded-full duration-300 group-hover:-left-8 group-hover:shadow-2xl"
                ></div>
                <div
                  className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-black rounded-full"
                >

                  <a href="https://github.com/MohamedTharwat204" target="_blank" rel="noopener noreferrer"><svg
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor"
                      d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
                  </svg></a>

                </div>
              </button>
            </div>

            <div className="social-button">
              <button className="relative w-12 h-12 rounded-full group">
                <div
                  className="floater w-full h-full absolute top-0 left-0 bg-blue-500 rounded-full duration-300 group-hover:-left-8 group-hover:shadow-2xl"
                ></div>
                <div
                  className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-blue-500 rounded-full"
                >
                  <a href="https://www.facebook.com/share/1GoCK9vKnb/?mibextid=wwXIfr" target="_blank">
                    <svg
                      fill="none"
                      viewBox="0 0 13 22"
                      height="22"
                      width="13"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.71289 22H4.1898C3.60134 22 3.12262 21.5213 3.12262 20.9328V12.9863H1.06717C0.478672 12.9863 0 12.5074 0 11.9191V8.514C0 7.9255 0.478672 7.44683 1.06717 7.44683H3.12262V5.74166C3.12262 4.05092 3.6535 2.6125 4.65773 1.58207C5.6665 0.546992 7.07627 0 8.7346 0L11.4214 0.00438281C12.0089 0.00537109 12.4868 0.484086 12.4868 1.07151V4.23311C12.4868 4.82157 12.0083 5.30028 11.4199 5.30028L9.61091 5.30093C9.05919 5.30093 8.91868 5.41153 8.88864 5.44543C8.83914 5.50172 8.78023 5.66062 8.78023 6.09954V7.4467H11.284C11.4725 7.4467 11.6551 7.49319 11.812 7.58076C12.1506 7.76995 12.3611 8.12762 12.3611 8.51417L12.3597 11.9193C12.3597 12.5074 11.881 12.9861 11.2926 12.9861H8.78019V20.9328C8.78023 21.5213 8.30139 22 7.71289 22ZM4.41233 20.7103H7.49031V12.4089C7.49031 12.016 7.81009 11.6964 8.20282 11.6964H11.07L11.0712 8.73662H8.20265C7.80991 8.73662 7.49031 8.41706 7.49031 8.02411V6.09959C7.49031 5.59573 7.54153 5.0227 7.92185 4.59198C8.38144 4.07133 9.10568 4.01126 9.61056 4.01126L11.1971 4.01057V1.29375L8.73357 1.28975C6.06848 1.28975 4.41238 2.99574 4.41238 5.7417V8.02407C4.41238 8.4168 4.09277 8.73658 3.7 8.73658H1.28975V11.6964H3.7C4.09277 11.6964 4.41238 12.016 4.41238 12.4089L4.41233 20.7103Z"
                        className="group-hover:fill-[#171543] fill-white duration-300"
                      ></path>
                    </svg>
                  </a>
                </div>
              </button>
            </div>

            <div className="social-button">
              <button className="relative w-12 h-12 rounded-full group">
                <div
                  className="floater w-full h-full absolute top-0 left-0 bg-red-400 rounded-full duration-300 group-hover:-left-8 group-hover:shadow-2xl"
                ></div>
                <div
                  className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-red-400 rounded-full"
                >
                  <a href="mailto:vgtgh65@gmail.com" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <g fill="none" fillRule="evenodd">
                        <path
                          d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                        <path fill="currentColor"
                          d="M12 5.5a6.5 6.5 0 1 0 6.326 8H13a1.5 1.5 0 0 1 0-3h7a1.5 1.5 0 0 1 1.5 1.5a9.5 9.5 0 1 1-2.801-6.736a1.5 1.5 0 1 1-2.116 2.127A6.48 6.48 0 0 0 12 5.5" />
                      </g>
                    </svg></a>
                </div>
              </button>
            </div>


            <div className="social-button">
              <button className="relative w-12 h-12 rounded-full group">
                <div
                  className="floater w-full h-full absolute top-0 left-0 bg-red-400 rounded-full duration-300 group-hover:-left-8 group-hover:shadow-2xl"
                ></div>
                <div
                  className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-red-400 rounded-full"
                >
                  <a href="https://wa.me/201114553521?text=Hello How are you" target="_blank" rel="noreferrer">
                    <FaWhatsapp className='w-10 h-7' />
                  </a>
                </div>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
