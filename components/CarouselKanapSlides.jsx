import React from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Kanap1Img from '../public/assets/KanapSlides/Kanap1.png'
import Kanap2Img from '../public/assets/KanapSlides/Kanap2.png'
import Kanap3Img from '../public/assets/KanapSlides/Kanap3.png'
import Kanap4Img from '../public/assets/KanapSlides/Kanap4.png'
import Kanap5Img from '../public/assets/KanapSlides/Kanap5.png'
import Kanap6Img from '../public/assets/KanapSlides/Kanap6.png'
import Kanap7Img from '../public/assets/KanapSlides/Kanap7.png'


function Slider() {

    return (  
    <Carousel className="lg:w-[60%]">
        <div className='py-10'>
            <Image 
                src={Kanap1Img}
                className='rounded-xl shadow-md shadow-gray-500'             
                alt='Kanap1' 
                width={400}
                height={400}
             />
        </div> 
        <div className="py-10">
            <Image 
                src={Kanap2Img}
                className='rounded-xl shadow-md shadow-gray-500'           
                alt='Kanap2' 
                width={600}
                height={200}
             />
        </div> 
        <div className='py-10'>
            <Image 
                src={Kanap3Img}
                className='rounded-xl shadow-md shadow-gray-500'           
                alt='Kanap3' 
                width={600}
                height={200}
             />
        </div> 
        <div className='py-10'>
            <Image 
                src={Kanap4Img}
                className='rounded-xl shadow-md shadow-gray-500'           
                alt='Kanap4' 
                width={600}
                height={200}
             />
        </div> 
        <div className='py-10'>
            <Image 
                src={Kanap5Img}
                className='rounded-xl shadow-md shadow-gray-500'           
                alt='Kanap5' 
                width={600}
                height={200}
             />
        </div> 
        <div className='py-10'>
            <Image 
                src={Kanap6Img}
                className='rounded-xl shadow-md shadow-gray-500'           
                alt='Kanap6' 
                width={600}
                height={200}
             />
        </div> 
        <div className='py-10'>
            <Image 
                src={Kanap7Img}
                className='rounded-xl shadow-md shadow-gray-500'           
                alt='Kanap7' 
                width={600}
                height={200}
             />
        </div> 

    </Carousel> 
    )      
}

export default Slider 