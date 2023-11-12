/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import MacDeskImg from '../public/assets/MacDesk.jpg'


const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-[110%] md:py-[15%] md:w-[100%] md:p-6 lg:py-[10%] xs:py-[30%] xs:mt-[90%]'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-3xl tracking-widest text-[#298789]'>A propos</p>
                  <h2 className='py-4'>Qui suis-je ?</h2>
                      <div className='py-7 p-8 bg-[#FFFF] shadow-xl rounded-xl text-black-600'>
                          Après avoir obtenu un master en management des métiers du tourisme, j'ai eu l'opportunité de travailler dans un certain nombre d'entreprises locales et à l'étranger.
                          <p>Puis, j'ai été responsable informatique et réseau ainsi que formateur dans le milieu scolaire durant trois années.</p><br />
                          <p>Passionné de surf, c'est en 2007 que je décide de créer ma propre entreprise "karv and Co." spécialisée dans la fabrication de planches de surf sur mesure.</p>
                          <p>Après plus de dix années d’activité à mon compte, j’entreprends en 2021 de suivre une formation en ligne chez
                             OpenClassrooms/Paris afin de devenir développeur Web Front-end React.Js.</p><br />
                             <p>Pour finir, j'ai suivi cette année, une formation en spécialité "Graphisme et Internet" à l'IFR de la Réunion afin de proposer mes compétences en création de logos et de travailler au mieux l'esthétique des sites web créés.</p>
                          <p>Nos sites web sont conçus avec des langages digitaux de dernière génération, 
                             ces outils permettent d’optimiser le « référencement naturel » ce qui amène votre clientèle cible à trouver rapidement votre site web en tête des résultats des moteurs de recherche !
                          </p><br />
                              
                          
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