/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import {AiOutlineMail} from 'react-icons/ai';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';
import PhototbImg from '/public/assets/Photo2.jpg'



const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div className='mt-200'>
                <div className='w-full flex justify-center pt-20'>
                    <div className='w-50 h-auto m-10 shadow-xl shadow-gray-400 rounded-xl p-2'>
                            <Image className='rounded-xl w-200 h-auto' src={PhototbImg} width='200' height='100' alt='PhotoTB' /> 
                    </div>
                </div>
                
                <h1 className='text-2xl text-gray-700'>
                    Bonjour, je m'appelle <span className='text-4xl text-[#02808e]'>Tristan Blasin</span> 
                </h1>
                <h1 className='py2- text-gray-700'>
                    Développeur Web Front-end React.Js
                </h1>
                <p className='py-4 uppercase text-xl tracking-widest text-gray-600'>Créons un projet ensemble !</p>
                <p className=' text-gray-600 max-w-[70%] m-auto'>Je suis développeur web spécialisé dans la réalisation de sites web dynamiques de dernière génération, codés en JavaScript et React.Js. 
                Actuellement je me spécialise dans la création d'applications web front-end grâce à Next.Js, un puissant framework React.</p> 
                <p>Enfin je m'intéresse à React Native afin de concevoir des applications mobiles "Android" et "iOS".</p>
            
                <div className='flex items-center justify-between max-w-[330px] m-auto py-5'>
                    <div className='rounded-full bg-white shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <a href='https://www.linkedin.com/in/tblasin/'>
                            <FaLinkedinIn />
                        </a>
                    </div>
                    <div className='rounded-full bg-white shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <a href='https://github.com/tblasin'>
                            <FaGithub />
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
  )
}

export default Main