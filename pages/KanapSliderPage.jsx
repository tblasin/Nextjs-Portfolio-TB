/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar.jsx';
import CarouselSlides from '../components/CarouselKanapSlides.jsx';
import {AiOutlineMail} from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';



const KanapSlider = () => {
  return (

    
    
    <div className='flex justify-center' id='InfosKasa'>
        <Navbar />

            <div className='w-[90%] lg:w-[70%] h-51 mt-[30%] lg:mt-[8%] mb-4 shadow-xl shadow-gray-400 bg-gradient-to-r from-[#9a9c9c] to-[#cfd5d5] rounded-xl p-4 md:mt-[15%]'>
                <div className='h-full rounded-xl'>
                        <div className='flex justify-center'>
                            <CarouselSlides />
                        </div>
                        
                        <div>
                            <p className='pt-6 text-lg'>Contact :</p>
                            <div className='flex items-center justify-evenly space-x-4 py-4'>
                                <div className='rounded-full bg-[#C4C3C3] shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <a href='https://www.linkedin.com/in/tblasin/'>
                                        <FaLinkedinIn />
                                    </a>
                                </div>
                                <div className='rounded-full bg-[#C4C3C3] shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <a href='https://github.com/tblasin'>
                                        <FaGithub  />
                                    </a>
                                </div>
                                <div className='rounded-full bg-[#C4C3C3] shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <a href='mailto:trblasin@gmail.com'>
                                        <AiOutlineMail />
                                    </a>
                                </div>
                                <div className='rounded-full bg-[#C4C3C3] shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <Link href='/#Cv'>    
                                         <BsFillPersonLinesFill />
                                    </Link>
                                </div>
                            </div>
                        </div>
                </div>           
            </div>
        
    </div>
  )
}

export default KanapSlider