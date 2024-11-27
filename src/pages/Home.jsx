import React from 'react';
import Slider from '../components/Slider';
// import { ReactTyped } from 'react-typed';
import { FaInstagram } from "react-icons/fa";


const Home = () => {
  return (
    <div className='mt-0'>
        <Slider/>
        <h1 className='mt-10 text-4xl font-bold tracking-wide'>
          {/* <ReactTyped 
            strings={[
              "Psikolog Gizem Alptekin...",
              "Makalelerimi Okuyabilirsiniz...",
              "Teşekkürler..."
            ]}
            typeSpeed={50}
            backSpeed={25}
            backDelay={2000}
            loop
            showCursor={false}
          /> */}
        </h1>
        
        <div className='flex items-center justify-center mt-10'>
            <div className='text-purple-400'>
               <FaInstagram />
            </div>

        </div>

    </div>
  );
};

export default Home;
