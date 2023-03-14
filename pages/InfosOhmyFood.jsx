import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import Navbar from '../components/Navbar'
import {AiOutlineMail} from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs';


const InfosOhmyFood = () => {
  return (

    
    
    <div className='flex justify-center' id='InfosHotTakes'>
        <Navbar />

            <div className='w-2/3 h-51 mt-32 mb-4 shadow-xl shadow-gray-400 bg-gradient-to-r from-[#02808e] to-[#05a6a1] rounded-xl p-4'>
                <div className='p-4 h-full rounded-xl'>
                        <div className='flex justify-center'>
                            <Image 
                            className='rounded-xl shadow-lg shadow-gray-600 hover:scale-105 ease-in duration-300' 
                            src='/../public/assets/Projects/OhmyFood/Ohmyfood.png' 
                            alt='Oh my food' 
                            width={400}
                            height={100}
                            />
                        </div>
                        <div>
                            <h2 className='py-6'>Projet "OhmyFood" OpenClassrooms :</h2>
                                <ul className="list-disc pl-4">
                                    <li className='text-xl py-2'>Optimisation d'un site web existant.</li>
                                    <li className='text-xl py-2'>Objectif : faire passer le site web en tête des résultats de recherche.</li>
                                    <li className='text-xl py-2'>Pour ce faire, mettre en place les bonnes pratiques de SEO.</li>
                                </ul>

                        </div> 
                        <div>
                            <p className='pt-6 text-lg'>Contact :</p>
                            <div className='flex items-center justify-evenly py-4'>
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

export default InfosOhmyFood