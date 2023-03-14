import React from 'react'
import Image from 'next/image';
import {AiOutlineMail} from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Link from 'next/link';
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'




const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-4 py-16 w-full'>
            <p className='text-3xl tracking-widest uppercase text-[#278789]'>
              Contact
            </p>
            <h2 className='py-4'>Coordonnées</h2>
            <div className='grid lg:grid-cols-5 gap-8'>


            {/* left */}

            <div className='col-span-3 lg:col-span-2 w-full h-full bg-[#F4F4F4] opacity-90 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='lg:p-4 h-full rounded-xl'>
                        <div>
                            <Image className='rounded-xl contrast-200' 
                            src='/../public/assets/ContactPicture.jpg'
                            width='400'
                            height='100'
                            alt='/' />
                        </div>
                        <div className='p-6 pt-1 mt-4 bg-[#FFFF] shadow-xl rounded-xl'>
                            <h2 className='py-6'>Tristan Blasin</h2>
                            <p className='py-1'>Développeur web Front-end React.Js</p>
                            <p className='py-4'>Parlons de vos projets de vive voix !</p>
                            <p className='py-4'>E-mail : trblasin@gmail.com</p>
                            <p>Portable : 0692.28.39.28</p>
                        </div> 
                        <div>
                            <p className='pt-10'>Contact :</p>
                            <div className='flex items-center justify-between py-10'>
                                <div className='rounded-full bg-white shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <a href='https://www.linkedin.com/in/tblasin/'>
                                        <FaLinkedinIn />
                                    </a>
                                </div>
                                <div className='rounded-full bg-white shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <a href='https://github.com/tblasin'>
                                        <FaGithub  />
                                    </a>
                                </div>
                                <div className='rounded-full bg-white shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <a href='mailto:trblasin@gmail.com'>
                                        <AiOutlineMail />
                                    </a>
                                </div>
                                <div className='rounded-full bg-white shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <Link href='/#Cv'>    
                                         <BsFillPersonLinesFill />
                                    </Link>
                                </div>
                            </div>
                        </div>
                </div>           
            </div>


            {/* right */}
                <div className='col-span-3 w-full h-auto bg-[#F4F4F4] opacity-90 shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
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
                                    <button type="submit" className='p-2 text-gray-100 bg-gradient-to-r from-[#02808e] to-[#05a6a1] mt-4 cursor-pointer hover:scale-105 ease-in duration-300'>  
                                            Envoyer
                                    </button>
                                </div>
                           
                           
                        </form>
                    </div>
                </div>

            </div> 
            <div className='flex justify-center py-12'>
                <Link href='/'>
                    <div className='rounded-full bg-gray-200 shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <HiOutlineChevronDoubleUp className='text-[#38b1a9]' size={30} />
                    </div>
                </Link>
            </div>
            <div className='flex justify-center'>
                    <div className='flex justify-between'> Copyrights</div> 
                        <div className='pl-2 pr-2'>
                            <Image  
                                src='/../public/assets/All_rights_reserved_logo.png'
                                width='20'
                                height='20'
                                alt='Copyrights' 
                            />
                        </div> 
                        <div>2023 Tristan BLASIN, all rights reserved.</div>
                </div>
        </div>
    </div>
  )
}

export default Contact