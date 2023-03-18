import Image from 'next/image';
import NavLogoImg from '/public/assets/navLogo1.png'
import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {useRouter} from 'next/router'


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false)
    const [navBg, setNavBg] = useState('#298789')
    const [linkColor, setLinkColor] = useState('#FFFFFF')
    const router = useRouter()

    useEffect(()=>{
        if (
            router.asPath === '/kasa' ||
            router.asPath === '/kanap' ||
            router.asPath === '/hottakes' 
        ) {
            setNavBg('#298789')
            setLinkColor('#f8f8f8')
        } else {
            setNavBg('#298789')
            setLinkColor('#FFFFFF')
        }
    },[router])




    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);
    
    }, []);

    return (
        <div 
           style={{backgroundColor: `${navBg}`}}
            className={
                shadow 
                    ? 'fixed w-full h-20 shadow-xl z-[100]' 
                    : 'fixed w-full h-20 z-[100]'
            }
        >
            <div className='flex justify-between items-center w-full h-full px-3 2xl:px-16 bg-gradient-to-r from-[#02808e] to-[#05a6a1] shadow-lg shadow-gray-500'>
                <Link href='/'>
                    <Image 
                        src={NavLogoImg} 
                        alt="/" 
                        width='55' 
                        height='20'  
                    />
                </Link>
                
                        <div>
                            <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
                                <Link href='/'>
                                    <li className='ml-10 uppercase hover:border-b'>Accueil</li>
                                </Link>
                                <Link href='/#about'>
                                    <li className='ml-10 uppercase hover:border-b'>A propos</li>
                                </Link>
                                <Link href='/#skills'>
                                    <li className='ml-10 uppercase hover:border-b'>Compétences</li>
                                </Link>
                                <Link href='/#projects'>
                                    <li className='ml-10 uppercase hover:border-b'>Projets</li>
                                </Link>
                                <Link href='/#contact'>
                                    <li className='ml-10 uppercase hover:border-b'>Contact</li>
                                </Link>
                            </ul>
                            <div onClick={handleNav} className='md:hidden'>
                                <AiOutlineMenu size={25} />
                            </div>
                          </div>
                        </div>                
                            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/60' : ''}>
                                
                                <div 
                                    className={nav ? 'md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                                            
                                    <div>
                                        <div className='flex w-full items-center justify-between'>
                                        <Link href='/'>
                                            <Image 
                                                src={NavLogoImg} 
                                                alt="/" 
                                                width='55' 
                                                height='20'  
                                            />
                                        </Link>
                                           
                                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                                <AiOutlineClose />
                                            </div>
                                        </div>
                                        <div className='border-b border-gray-300 my-8'>
                                        </div>
                                    </div>
                                    <div className='py-4 flex-col'>
                                        <ul className='uppercase'>
                                            <Link href='/'>
                                                <li onClick={()=> setNav(false)} className='py-4 text-sm'>Accueil</li>
                                            </Link>
                                            <Link href='/#about'>
                                                <li onClick={()=> setNav(false)} className='py-4 text-sm'>A propos</li>
                                            </Link>
                                            <Link href='/#skills'>
                                                <li onClick={()=> setNav(false)} className='py-4 text-sm'>Compétences</li>
                                            </Link>
                                            <Link href='/#projects'>
                                                <li onClick={()=> setNav(false)} className='py-4 text-sm'>Projets</li>
                                            </Link>
                                            <Link href='/#contact'>
                                                <li onClick={()=> setNav(false)} className='py-4 text-sm'>Contact</li>
                                            </Link>
                                        </ul>
                                        <div className='pt-40 flex justify-center'>
                                            
                                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                                    <FaLinkedinIn />
                                                </div>
                                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                                    <FaGithub />
                                                </div>
                                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                                    <AiOutlineMail />
                                                </div>
                                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                                    <BsFillPersonLinesFill />
                                                </div>
                                               
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
            </div>
        
    );
};

export default Navbar