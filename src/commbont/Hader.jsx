import { uesDiark } from '../store'
import { useEffect, useState } from "react";
export default function Hader() {
    const { diark, setDiark } = uesDiark()
    const [active, setActive] = useState('home')


    const newLocal = "m8.91,21.99c-.39,0-.76-.23-.92-.62-.21-.51.03-1.1.54-1.31l11.64-4.82c.51-.21,1.1.03,1.31.54.21.51-.03,1.1-.54,1.31l-11.64,4.82c-.13.05-.25.08-.38.08Z";
    return (
        <div className='flex items-center justify-between  w-full px-8 fixed z-10 py-3 '>

            <label className="relative flex items-center cursor-pointer w-20 h-10 justify-center">
                <input type="checkbox" className="peer sr-only" checked={diark} onChange={() => setDiark(!diark)} />
                <div
                    className="w-18 h-10 rounded-full ring-0 peer  duration-500 outline-none bg-gray-200 overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['☀️'] before:absolute before:h-10 before:w-10 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full shadow-lg shadow-gray-400 peer-checked:shadow-lg peer-checked:shadow-gray-700 peer-checked:bg-[#383838] after:content-['🌑'] after:absolute after:bg-[#1d1d1d] after:rounded-full after:top-1 after:right-1 after:translate-y-full after:w-10 after:h-10 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0"
                ></div>

            </label>

            <div className=' hidden w-[70%] sm:flex gap-3 h-16 sm:justify-center items-center '>

                <div className='w-[80%] h-14  bg-[#ffffff35] rounded-3xl flex items-center justify-between px-6 text-black  shadow-2xl'>


                    {/* <NavLink className={({ isActive }) => (isActive ? 'bg-white/35  rounded-2xl px-2 py-1' : 'opacity-50')}> */}
                    <a href='#Home' onClick={() => setActive('home')} className={`${active === 'home' ? 'bg-[#ffffff75] shadow-2xl flex items-center justify-center h-10 underline underline-offset-4  transition-all duration-300 scale-110' : 'opacity-50'} rounded-2xl px-4 `}>Home</a>
                    <a href='#Abo' onClick={() => setActive('abo')} className={`${active === 'abo' ? 'bg-[#ffffff75] flex shadow-2xl items-center justify-center h-10 underline underline-offset-4 transition-all duration-300 scale-110' : 'opacity-50'} rounded-2xl px-4`}>About me</a>
                    <a href='#ski' onClick={() => setActive('ski')} className={`${active === 'ski' ? 'bg-[#ffffff75] flex items-center shadow-2xl justify-center h-10 underline underline-offset-4 transition-all duration-300 scale-110' : 'opacity-50'} rounded-2xl px-4 `}>Skills</a>
                    <a href='#Projects' onClick={() => setActive('Projects')} className={`${active === 'Projects' ? 'bg-[#ffffff75]  flex items-center shadow-2xl underline underline-offset-4 justify-center h-10 transition-all duration-300 scale-110' : 'opacity-50'} rounded-2xl px-4`}>Projects</a>


                </div>
                <div className='w-[25%] lg:w-[20%] h-14 rounded-2xl shadow-2xl  '>
                    <a href='/Cv.pages' download='Mohamed-Abdullah-CV.pages'>
                        <button className=" cursor-pointer group relative flex gap-1 px-3 h-full w-full items-center justify-center  bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24px" width="24px"><g strokeWidth="0" id="SVGRepo_bgCarrier"></g><g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Download"> <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="#f1f1f1" d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" id="Vector"></path> </g> </g></svg>
                            Download CV
                        </button>
                    </a>
                </div>
            </div>


            <div className="dropdown sm:hidden ">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <button
                        className="group flex items-center justify-center relative z-10 [transition:all_0.5s_ease] rounded-md p-1.25 cursor-pointer outline-none focus-visible:outline-0"
                    >
                        <svg
                            fill="currentColor"
                            stroke="none"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-7 h-7 overflow-visible [transition:transform_.35s_ease] group-hover:delay-[.25s] [&amp;_path]:[transition:transform_.25s_ease] group-hover:rotate-45"
                        >
                            <path
                                className="group-hover:transform-[rotate(112.5deg)_translate(-27.2%,-80.2%)]"
                                d="m3.45,8.83c-.39,0-.76-.23-.92-.62-.21-.51.03-1.1.54-1.31L14.71,2.08c.51-.21,1.1.03,1.31.54.21.51-.03,1.1-.54,1.31L3.84,8.75c-.13.05-.25.08-.38.08Z"
                            ></path>
                            <path
                                className="group-hover:transform-[rotate(22.5deg)_translate(15.5%,-23%)]"
                                d="m2.02,17.13c-.39,0-.76-.23-.92-.62-.21-.51.03-1.1.54-1.31L21.6,6.94c.51-.21,1.1.03,1.31.54.21.51-.03,1.1-.54,1.31L2.4,17.06c-.13.05-.25.08-.38.08Z"
                            ></path>
                            <path
                                className="group-hover:transform-[rotate(112.5deg)_translate(-15%,-149.5%)]"
                                d={newLocal}
                            ></path>
                        </svg>
                    </button>
                </div>


                <ul
                    tabIndex="-1"
                    className="menu   dropdown-content  rounded-2xl bg-emerald-400 border-emerald-400 border-2  z-1 mt-3 w-45  shadow right-8 ">
                    {/* <li className='border-b'><a href='#Home'>Home</a></li>
                    <li className='border-b'><a href='#Abo'>About me</a></li> */}

                    <a href='#Home' onClick={() => setActive('home')} className={`${active === 'home' ? 'bg-[#ffffff75] shadow-2xl flex items-center   transition-all duration-300 scale-110' : 'opacity-50'}  rounded-2xl px-4 py-2 `}>Home</a>
                    <a href='#Abo' onClick={() => setActive('abo')} className={`${active === 'abo' ? 'bg-[#ffffff75] flex shadow-2xl items-center   transition-all duration-300 scale-110' : 'opacity-50'} rounded-2xl py-2 px-4`}>About me</a>
                    <a href='#ski' onClick={() => setActive('ski')} className={`${active === 'ski' ? 'bg-[#ffffff75] flex items-center shadow-2xl  transition-all duration-300 scale-110' : 'opacity-50'} rounded-2xl px-4 py-2 `}>Skills</a>
                    <a href='#Projects' onClick={() => setActive('Projects')} className={`${active === 'Projects' ? 'bg-[#ffffff75]  flex items-center shadow-2xl transition-all duration-300 scale-110' : 'opacity-50'} rounded-2xl py-2  px-4`}>Projects</a>

                    <li >
                        <a href='/Cv.pages' download='Mohamed-Abdullah-CV.pages'>
                            <button className="cursor-pointer duration-200  flex gap-0.5 " title="Attach"> CV
                                <svg className={`${diark ? 'text-white  stroke-white' : 'text-black stroke-black'} fill-none`} xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 -0.5 25 25">
                                    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" d="M15.17 11.053L11.18 15.315C10.8416 15.6932 10.3599 15.9119 9.85236 15.9178C9.34487 15.9237 8.85821 15.7162 8.51104 15.346C7.74412 14.5454 7.757 13.2788 8.54004 12.494L13.899 6.763C14.4902 6.10491 15.3315 5.72677 16.2161 5.72163C17.1006 5.71649 17.9463 6.08482 18.545 6.736C19.8222 8.14736 19.8131 10.2995 18.524 11.7L12.842 17.771C12.0334 18.5827 10.9265 19.0261 9.78113 18.9971C8.63575 18.9682 7.55268 18.4695 6.78604 17.618C5.0337 15.6414 5.07705 12.6549 6.88604 10.73L12.253 5"></path>
                                </svg>
                            </button>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    )
}
