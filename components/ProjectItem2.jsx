/* eslint-disable react/prop-types */

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectItem = ({title, backgroundImg, projectUrl}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-md shadow-gray-600 rounded-xl p-4 group hover:bg-opacity-0'>
                    <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' />
                        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                             <h3 className='text-2xl text-black tracking-wider text-center'>{title}</h3>
                          <Link href={projectUrl}>
                            <p className='text-center py-2 px-4 rounded-lg bg-[#9a9c9c] text-black font-bold text-lg cursor-pointer hover:scale-105 ease-in duration-300'>Rendu/visuels</p>
                          </Link>
                        </div>
    </div>
  )
}

export default ProjectItem