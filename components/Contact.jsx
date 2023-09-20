import React from 'react'
import Image from 'next/image';
import ParticlesImg from '/public/assets/ContactPicture.jpg'
import CopyrightsImg from '/public/assets/All_rights_reserved_logo.png'
import {AiOutlineMail} from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Link from 'next/link';
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'




const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto py-16 w-full md:py-[15%] md:w-[70%] lg:py-[10%] lg:w-[80%] xs:py-[30%] xs:mt-[30%]'>
            <p className='text-3xl ml-4 tracking-widest uppercase text-[#278789]'>
              Contact
            </p>


            <div className='grid lg:grid-cols-5 gap-8 mt-6 xs:ml-4'>

                {/* left */}

                <div className='col-span-3 lg:col-span-2 w-full h-full bg-[#F4F4F4] opacity-90 shadow-xl shadow-gray-400 rounded-xl p-2 xs:w-[95%] relative flex items-center justify-center'>
                    <div className='lg:p-4 h-full rounded-xl'>
                            <div>
                                <Image className='rounded-xl contrast-200' 
                                src={ParticlesImg}
                                width='500'
                                height='100'
                                alt='/' />
                            </div>
                            <div className='p-6 pt-1 mt-4 bg-[#FFFF] shadow-xl rounded-xl'>
                                <h2 className='py-6'>Tristan Blasin</h2>
                                <p className='py-1 text-lg'>Développeur web Front-end React.Js</p>
                                <p className='py-4 text-lg lg:text-base xs:text-md'>Parlons de vos projets de vive voix !</p>
                                <p className='py-4'>E-mail : trblasin@gmail.com</p>
                                <p>Portable : 0692.28.39.28</p>
                            </div> 
                            <div>
                                <p className='pt-10'>Contact :</p>
                                <div className='flex items-center justify-between py-10 px-4 md:px-12 lg:px-8 xs:py-5'>
                                    <div className='rounded-full bg-white shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 xs:p-4'>
                                        <a href='https://www.linkedin.com/in/tblasin/'>
                                            <FaLinkedinIn />
                                        </a>
                                    </div>
                                    <div className='rounded-full bg-white shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 xs:p-4'>
                                        <a href='https://github.com/tblasin'>
                                            <FaGithub  />
                                        </a>
                                    </div>
                                    <div className='rounded-full bg-white shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 xs:p-4'>
                                        <a href='mailto:trblasin@gmail.com'>
                                            <AiOutlineMail />
                                        </a>
                                    </div>
                                    <div className='rounded-full bg-white shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 xs:p-4'>
                                        <Link href='/#Cv'>    
                                            <BsFillPersonLinesFill />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                    </div>           
                </div>


                {/* right */}
                    <div className='col-span-3 w-full h-auto bg-[#F4F4F4] opacity-90 shadow-xl shadow-gray-400 rounded-xl lg:p-4 xs:w-[95%] relative flex items-center justify-center'>
                        <div className='p-4'>
                            <form action="https://formsubmit.co/74cac7766b6642074dccee225ae0fcce" method="POST">
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Nom</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name="Name" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>N°Portable</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name="Portable" />
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Email</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name="Email" />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Objet</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name="Objet" />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Message</label>
                                    <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10' name="Message"></textarea>
                                </div>
                                    <div className='flex justify-center'>  
                                        <button type="submit" className='p-2 text-gray-100 bg-gradient-to-r from-[#02808e] to-[#05a6a1] mt-2 lg:mt-10 cursor-pointer hover:scale-105 ease-in duration-300'>  
                                                Envoyer
                                        </button>
                                    </div>
                           
                           
                        </form>
                    </div>
                </div>

            </div> 
            <div className='flex justify-center py-12 lg:py-20'>
                <Link href='/'>
                    <div className='rounded-full bg-gray-200 shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <HiOutlineChevronDoubleUp className='text-[#38b1a9]' size={30} />
                    </div>
                </Link>
            </div>
            <div className='flex justify-center'>
                    <div className='flex justify-between text-xs'> Copyrights</div> 
                        <div className='pl-2 pr-2'>
                            <Image  
                                src={CopyrightsImg}
                                width='12'
                                height='12'
                                alt='Copyrights' 
                            />
                        </div> 
                        <div className='text-xs'>2023 All rights reserved.</div>     
                </div>
   
        </div>
    </div>
  )
}

export default Contact