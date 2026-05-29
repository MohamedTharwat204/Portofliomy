import React from 'react'
import { uesDiark } from "../store";
import { FaHtml5 } from "react-icons/fa";
import img2 from '../assets/Css13.svg'
import img3 from '../assets/Group.svg'
import img4 from '../assets/bootstrap.svg'
import img5 from '../assets/Group 14.svg'
import { RiTailwindCssFill } from "react-icons/ri";
import img6 from '../assets/figma.svg'
import { FaPython } from "react-icons/fa";
import { RiEnglishInput } from "react-icons/ri";

export default function Skills() {
    const { diark } = uesDiark()

    return (
        <div id='ski' data-aos="fade-up" data-aos-anchor-placement="top-bottom" className={`${diark ? 'dark:bg-gray-950  text-white' : ' text-black'} ' overflow-hidden  relative  flex flex-col  ring shadow-xl  items-center justify-center ring-gray-900/5 w-full py-8 sm:py-22 h-dvh'`} >

            <p className=' w-auto p-4  sm:w-[15%] h-16 border-2  text-4xl  flex items-center justify-center'>Skills</p>

            <div className='sm:w-[85%] w-[90%]'>
                <p className='uppercase text-2xl font-bold py-6' data-aos="fade-down-right"> using now : </p>
                <div className=' grid grid-cols-2 sm:grid-cols-4  w-full gap-4'>
                    <div className='flex items-center justify-center flex-col'>
                        <FaHtml5 className='w-25  h-25' />
                        <p className='py-4 text-xl uppercase'>html5</p>
                    </div>
                    <div className='flex items-center justify-center flex-col'>
                        <img src={img2} alt="" />
                        <p className='py-4 text-xl uppercase'>CSS</p>
                    </div>
                    <div className='flex items-center justify-center flex-col'>
                        <img src={img3} alt="" />
                        <p className='py-4 text-xl uppercase'>JAVASCRIPT</p>
                    </div>
                    <div className='flex items-center justify-center flex-col'>
                        <img src={img4} alt="" />
                        <p className='py-4 text-xl uppercase'>BOOTSTRAP</p>
                    </div>
                    <div className='flex items-center justify-center flex-col'>
                        <img src={img5} alt="" />
                        <p className='py-4 text-xl uppercase'>REACT</p>
                    </div>
                    <div className='flex items-center justify-center flex-col'>
                        <RiTailwindCssFill className='w-25  h-25' />
                        <p className='py-4 text-xl uppercase'>Tailwind</p>
                    </div>
                    <div className='flex items-center justify-center flex-col'>
                        <img src={img6} alt="" />
                        <p className='py-4 text-xl uppercase'>figma</p>
                    </div>
                </div>
                <div  className=' w-full'>
                    <p className='text-2xl font-bold py-6 uppercase' data-aos="fade-down-right">He  learns :</p>
                    <div className=' grid grid-cols-2 sm:grid-cols-4  w-full gap-4'>


                        <div className='flex items-center justify-center flex-col'>
                            <FaPython className='w-25  h-25'  />
                            <p className='py-4 text-xl uppercase'>python</p>
                        </div>
                        <div className='flex items-center justify-center flex-col'>
                            <RiEnglishInput className='w-25  h-25'  />
                            <p className='py-4 text-xl uppercase'>English</p>
                            <p> B1/B2</p>
                        </div>
                    </div>

                </div>


            </div>

        </div>
    )
}
