
import React from 'react';
import Image from 'next/image';
import HtmlImg from '../public/assets/html.png'
import CssImg from '../public/assets/css.png'
import JsImg from '../public/assets/javascript.png'
import ReactImg from '../public/assets/react.png'
import NextImg from '../public/assets/nextjs.png' 
import TailwindImg from '../public/assets/tailwind.png'
import GithubImg from '../public/assets/github1.png' 
import MongodbImg from '../public/assets/mongo.png'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-3xl tracking-widest uppercase text-[#298789]'>Compétences</p>
                <h2 className='py-4'>Outils web</h2>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='p-6 bg-[#FFFF] shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src={HtmlImg} 
                                width={64} 
                                height={64} 
                                alt='/'   
                            />                        
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 bg-[#FFFF] shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src={CssImg} 
                                width={64} 
                                height={64} 
                                alt='/'   
                            />                        
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>CSS</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 bg-[#FFFF] shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src={JsImg} 
                                width={64} 
                                height={64} 
                                alt='/'   
                            />                        
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>JAVASCRIPT</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 bg-[#FFFF] shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src={ReactImg} 
                                width={64} 
                                height={64} 
                                alt='/'   
                            />                        
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>REACT</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 bg-[#FFFF] shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src={NextImg}
                                width={64} 
                                height={64} 
                                alt='/'   
                            />                        
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>NEXT</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 bg-[#FFFF] shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src={TailwindImg} 
                                width={64} 
                                height={64} 
                                alt='/'   
                            />                        
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>TAILWIND</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 bg-[#FFFF] shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src={GithubImg}
                                width={64} 
                                height={64} 
                                alt='/'   
                            />                        
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>GITHUB</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 bg-[#FFFF] shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src={MongodbImg} 
                                width={64} 
                                height={64} 
                                alt='/'   
                            />                        
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>MONGODB</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills