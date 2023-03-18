/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import MacDeskImg from '../public/assets/MacDesk.jpg'


const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-[110%] md:py-[15%] md:w-[100%] md:p-6 lg:py-[10%] xs:py-[29%] xs:mt-[50%]'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-3xl tracking-widest text-[#298789]'>A propos</p>
                  <h2 className='py-4'>Qui suis-je ?</h2>
                      <div className='py-7 p-8 bg-[#FFFF] shadow-xl rounded-xl text-gray-600'>
                          Après avoir obtenu un master en management des métiers du tourisme, j'ai eu la possibilité de travailler dans un certain nombre d'entreprises locales et à l'étranger.
                          <p>Puis, j'ai été responsable informatique et réseau ainsi que formateur dans le milieu scolaire durant trois années.
                             J'ai toujours eu un attrait particulier pour l'outil informatique, que ce soit durant mes études ou pour réparer les "PC"/"Mac" et concevoir mes propres configurations "hardware".</p>
                          <p>En 2007, j'ai créé ma propre entreprise dans la fabrication de planches de surf sur mesure.</p> 
                          <p>Ces 12 années d'activité artisanale et de commerce furent très compliquées...</p>
                          <p>En effet, l'activité de loisirs tournée vers l'océan à la Réunion a subi, durant toute cette période, une crise sans précédent.</p>
                          <p>Désireux de tourner une page professionnelle éprouvante, je décide en 2021 de suivre une formation en ligne chez "OpenClassrooms" afin de devenir développeur Web Front-end.</p>
                          <p>J'ai donc commençé à apprendre les langages de programmation Html5 et Css3.</p>
                          <p>Ensuite, le "vanilla JavaScript" pour rendre le site dynamique et enfin React.Js pour stucturer le code sous forme de composants.</p>
                          <p>Actuellement, je me spécialise dans le développement d'applications web à l'aide de Next.js, et pour finir, je commence à apprendre React Native pour la création d'applications mobiles...</p>
                      </div>
                        
              </div>
                <div className='flex justify-center w-full h-auto m-auto shadow-md shadow-gray-600 rounded-xl p-2 mt-4'>
                    <Image className='rounded-xl' 
                           src={MacDeskImg}
                            alt='Mac Desktop' 
                            width='auto'
                            height='400'
                    />
                </div>
          </div>
    </div>
    
  )
}

export default About