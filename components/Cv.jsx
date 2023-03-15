import Image from 'next/image';
import CvtbImg from '../public/assets/CV/CV-TB.png'
import React from 'react';

const PNG_FILE_URL = 'http://localhost:3000/CV-TB.png'

function App() {
    const downloadFileAtURL = (url) => {
      const fileName = url.split("/").pop();
      const aTag = document.createElement("a");
      aTag.href = url;
      aTag.setAttribute("download", fileName);
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();
    };

    return (
      <div id='Cv' className='max-w-[1240px] mx-auto px-2 py-16'>
          <p className='uppercase text-3xl tracking-widest text-[#298789]'>Mon CV</p>
              <div className='py-6 flex justify-center'>
                  <Image
                      src={CvtbImg}
                          alt="cv"
                          width={600}
                          height={200} 
                  />
              </div>
              <div className='flex justify-center'>
                <button onClick={()=>{downloadFileAtURL(PNG_FILE_URL)}} className='p-4 text-gray-300 mt-4 cursor-pointer hover:scale-105 ease-in duration-400'>Télécharger mon CV</button>
              </div>
              
      </div>
    )
}

  export default App;

