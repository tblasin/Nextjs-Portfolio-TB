
import React from 'react';
import KasaImg from '/public/assets/Projects/Kasa/Kasa.png'
import HottakesImg from '/public/assets/Projects/HotTakes/HotTakes.png'
import KanapImg from '/public/assets/Projects/Kanap/Kanap.png'
import OhmyfoodImg from '/public/assets/Projects/OhmyFood/Ohmyfood.png'
import ProjectItem from './ProjectItem.jsx';



const Projets = () => {
  return (
    <div id='projects' className='w-full mt-[10%] md:py-[8%] md:w-[95%] md:ml-5 lg:py-[5%]'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-3xl tracking-widest uppercase text-[#278789]'>Projets</p>
              <h2 className='py-4'>Mes réalisations</h2>
            <div className='grid md:grid-cols-2 gap-8'>
             
                <ProjectItem 
                  title='Kasa' 
                  backgroundImg={KasaImg} 
                  projectUrl='/InfosKasa' 
                /> 

                <ProjectItem 
                  title='Kanap' 
                  backgroundImg={KanapImg} 
                  projectUrl='/InfosKanap' 
                />

                <ProjectItem 
                  title='HotTakes' 
                  backgroundImg={HottakesImg} 
                  projectUrl='/InfosHotTakes' 
                /> 

                <ProjectItem 
                  title='OhmyFood' 
                  backgroundImg={OhmyfoodImg} 
                  projectUrl='/InfosOhmyFood' 
                /> 
            </div>
        </div>
    </div>
  )
}

export default Projets