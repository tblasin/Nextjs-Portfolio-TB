/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import KanapImg from '/public/assets/Projects/Kanap/Kanap.png' 
import Link from 'next/link'
import Navbar from '../components/Navbar'
import {AiOutlineMail} from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs';
import ProjectItem2 from '../components/ProjectItem2.jsx'


const InfosKanap = () => {
  return (

    
    
    <div className='flex justify-center' id='InfosKanap'>
        <Navbar />

            <div className='w-[90%] lg:w-[70%] h-51 mt-32 mb-4 shadow-xl shadow-gray-400 bg-gradient-to-r from-[#9a9c9c] to-[#cfd5d5] rounded-xl p-4'>
                <div className='p-4 h-full rounded-xl'>
                        <div className='flex justify-center'>
                        <ProjectItem2
                            title='Kanap' 
                            backgroundImg={KanapImg}
                            alt='Kanapimg' 
                            width='400'
                            height='100' 
                            projectUrl='/KanapSliderPage' 
                            /> 
                        </div>
                        <div>
                            <h2 className='py-6'>Projet "Kanap" OpenClassrooms :</h2>
                                <ul className="list-disc pl-4">
                                    <li className='text-xl py-2'> Intégration de manière dynamique du site web de "Kanap" avec JavaScript.</li>
                                    <li className='text-xl py-2'>Utilisation de l'API pour récupérer les produits et leurs détails.</li>
                                    <li className='text-xl py-2'>Gestion de l'ajout des produits au panier.</li>
                                </ul>
                        </div> 
                        <div>
                            <p className='pt-6 text-lg'>Contact :</p>
                            <div className='flex items-center justify-evenly space-x-3 py-4 lg:justify-center-space-x-8'>
                                <div className='rounded-full bg-[#C4C3C3] shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300 xs:p-4'>
                                    <a href='https://www.linkedin.com/in/tblasin/'>
                                        <FaLinkedinIn />
                                    </a>
                                </div>
                                <div className='rounded-full bg-[#C4C3C3] shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300 xs:p-4'>
                                    <a href='https://github.com/tblasin'>
                                        <FaGithub  />
                                    </a>
                                </div>
                                <div className='rounded-full bg-[#C4C3C3] shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300 xs:p-4'>
                                    <a href='mailto:trblasin@gmail.com'>
                                        <AiOutlineMail />
                                    </a>
                                </div>
                                <div className='rounded-full bg-[#C4C3C3] shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300 xs:p-4'>
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

export default InfosKanap