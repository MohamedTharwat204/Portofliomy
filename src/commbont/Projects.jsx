import React from 'react'
import { uesDiark } from "../store";
import img1 from '../assets/muno.png'

export default function Projects() {
    const { diark } = uesDiark()

    return (
        <div id='Projects' data-aos="fade-up" data-aos-anchor-placement="top-bottom" className={`${diark ? 'dark:bg-gray-950  text-white' : ' text-black'} ' overflow-hidden    items-center justify-center    relative  flex flex-col gap-19 ring shadow-xl ring-gray-900/5 w-full   py-8 sm:py-22  h-dvh'`}>
            <p className=' w-auto p-4  sm:w-[15%] h-16 border-2  text-4xl  flex items-center justify-center '>   Projects</p>

            <div className=' grid grid-cols-1 sm:grid-cols-4  sm:w-[85%] gap-29 w-[90%]  items-center justify-center ' >

                <a href='https://menu-caffee.vercel.app/' target="_blank" >
                    <div className="group relative flex  sm:w-80 flex-col  h-50  rounded-2xl   shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-indigo-500/20">
                        <img className='w-full h-full rounded-2xl object-center' src={img1} alt="" />
                    </div>
                    <p className='py-4 px-2 text-xl uppercase font-bold'>muno</p>
                </a>
                
  
            </div>


        </div>
    )
}
