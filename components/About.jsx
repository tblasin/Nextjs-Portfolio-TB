import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-3xl tracking-widest text-[#298789]'>A propos</p>
                  <h2 className='py-4'>Qui suis-je ?</h2>
                      <div className='py-6 p-8 bg-[#FFFF] shadow-xl rounded-xl text-gray-600'>
                          Après avoir obtenu un Master en management des métiers du Tourisme, j'ai eu la possibilité de travailler dans un certain nombre d'entreprises locales et à l'étranger.
                          <p>Puis, j'ai été responsable informatique et réseau ainsi que formateur dans le milieu scolaire durant trois années.
                             J'ai toujours eu un attrait particulier pour l'outil informatique, que ce soit durant mes études ou pour réparer les "PC"/"Mac" et concevoir mes propres configurations "hardware".</p>
                          <p>En 2007, j'ai créé ma propre entreprise dans la fabrication de planches de surf sur mesure.</p> 
                          <p>Ces 12 années d'activité artisanale et de commerce furent très compliquées...</p>
                          <p>En effet, la Réunion a subi, durant cette période, une crise sans précédent.</p>
                          <p>Désireux de tourner une page professionnelle éprouvante, je décide en 2021 de suivre une formation en ligne chez "OpenClassrooms" afin de devenir développeur Web Front-end.</p>
                          <p>J'ai donc commençé à apprendre les langages de programmation Html5 et Css3.</p>
                          <p>Ensuite, le "vanilla JavaScript" pour rendre le site dynamique et enfin React.Js afin stucturer le code sous forme de composants.</p>
                          <p>Actuellement, je me spécialise dans le développement d'applications web à l'aide de Next.js et pour finir, je commence à apprendre React Native pour la création d'applications mobile.</p>
                      </div>
                        
              </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-2 hover:scale-105 ease-in duration-300'>
                  <Image className='rounded-xl' 
                                    src='/../public/assets/MacDesk.jpg' 
                                    alt='Mac Desktop' 
                                    width='600'
                                    height='400'
                                  
                                    />
                </div>
          </div>

    </div>
    
  )
}

export default About