import React from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Kasa1Img from '../public/assets/KasaSlides/Kasa1.png'
import Kasa2Img from '../public/assets/KasaSlides/Kasa2.png'
import Kasa3Img from '../public/assets/KasaSlides/Kasa3.png'
import Kasa4Img from '../public/assets/KasaSlides/Kasa4.png'
import Kasa5Img from '../public/assets/KasaSlides/Kasa5.png'
import Kasa6Img from '../public/assets/KasaSlides/Kasa6.png'
import Kasa7Img from '../public/assets/KasaSlides/Kasa7.png'


function Slider() {

    return (  
    <Carousel>
        <div className='py-10'>
            <Image 
                src={Kasa1Img}
                className='rounded-xl shadow-md shadow-gray-500'             
                alt='Kasa1' 
                width={600}
                height={200}
             />
        </div> 
        <div className='py-10'>
            <Image 
                src={Kasa2Img}
                className='rounded-xl shadow-md shadow-gray-500'           
                alt='Kasa2' 
                width={600}
                height={200}
             />
        </div> 
        <div className='py-10'>
            <Image 
                src={Kasa3Img}
                className='rounded-xl shadow-md shadow-gray-500'           
                alt='Kasa3' 
                width={600}
                height={200}
             />
        </div> 
        <div className='py-10'>
            <Image 
                src={Kasa4Img}
                className='rounded-xl shadow-md shadow-gray-500'           
                alt='Kasa4' 
                width={600}
                height={200}
             />
        </div> 
        <div className='py-10'>
            <Image 
                src={Kasa5Img}
                className='rounded-xl shadow-md shadow-gray-500'           
                alt='Kasa5' 
                width={600}
                height={200}
             />
        </div> 
        <div className='py-10'>
            <Image 
                src={Kasa6Img}
                className='rounded-xl shadow-md shadow-gray-500'           
                alt='Kasa6' 
                width={600}
                height={200}
             />
        </div> 
        <div className='py-10'>
            <Image 
                src={Kasa7Img}
                className='rounded-xl shadow-md shadow-gray-500'           
                alt='Kasa7' 
                width={600}
                height={200}
             />
        </div> 
        


    </Carousel> 
    )      
}

export default Slider 