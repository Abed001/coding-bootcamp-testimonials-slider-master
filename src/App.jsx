import { useState, useEffect } from 'react'

import './App.css'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function App() {
  const [currentIndex, setcurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setcurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setcurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex) => {
    setcurrentIndex(slideIndex)
  }


  const handleKeyPress = (event) => {
    if (event.key === 'ArrowLeft') {
      prevSlide();
    } else if (event.key === 'ArrowRight') {
      nextSlide();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentIndex]);

  const slides = [
    {
      url: 'images/image-john.jpg',
    },
    {
      url: 'images/image-tanya.jpg',
    },

  ];

  return (



    <div className=' flex flex-col justify-center items-center lg:flex-row w-full h-full  relative group  '>
      <div className='w-full h-full gap-x-4'>
        <div >
          <div className='  min-w-[380px] min-h-[380px] bg-patternbg bg-center bg-contain bg-no-repeat duration-500  lg:absolute lg:right-7  lg:min-w-[590px] lg:min-h-[590px]'></div>
          <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className='absolute -top-10 right-20 mt-20  min-w-[300px] min-h-[300px] bg-top bg-contain bg-no-repeat duration-500 lg:min-w-[450px] lg:min-h-[450px] lg:top-0 lg:left-[760px]'></div>
        </div>

        <div className='relative w-full lg:absolute lg:top-40 lg:-right-[130px]  '>
          <div className='mt-20 bg-patternquote bg-no-repeat bg-center bg-contain w-full h-20 absolute -top-[130px] lg:absolute lg:-top-10 lg:right-[470px] '></div>
          <p className=' text-center text-2xl px-10 mt-20 lg:text-4xl lg:text-left lg:max-w-[750px]'>
            “ I’ve been interested in coding for a while but never taken the jump, until now.
            I couldn’t recommend this course enough. I’m now in the job of my dreams and so
            excited about the future. ”  </p>

            <div className='mt-5 pb-20  flex flex-col gap-x-2 justify-center items-center text-lg lg:flex-row lg:absolute lg:left-10 '> <span className='font-bold'>Tanya Sinclair</span>
              <span className='text-gray-500'>UX Engineer</span>

            </div>
        
          <div className='w-full h-20 bg-no-repeat bg-contain bg-patterncurve absolute bottom-0 left-0 lg:h-[130px] lg:-left-40 lg:-bottom-[200px] '></div>

        </div>


      </div>

      <div className='shadow absolute  top-[312px] left-[210px]  bg-white flex flex-row  items-center justify-around w-20 h-12  rounded-full lg:absolute lg:top-[505px] lg:left-[850px]'>


        <IoIosArrowBack className='cursor-pointer' size={20} onClick={prevSlide} />

        <IoIosArrowForward className='cursor-pointer' size={20} onClick={nextSlide} />
      </div>


      {/*
      <div ><svg onClick={prevSlide} className='hidden group-hover:block absolute z-20 top-[50%] -translate-x-0 translate-y-[-50%] left-10  cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="12" height="18"><path fill="none" stroke="#8585AC" stroke-width="3" d="M11 1L3 9l8 8" /></svg></div>

      <div><svg onClick={nextSlide} className='hidden group-hover:block absolute z-20 top-[50%] -translate-x-0 translate-y-[-50%] right-10 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="13" height="18"><path fill="none" stroke="#8585AC" stroke-width="3" d="M2 1l8 8-8 8" /></svg></div>


      <div className='w-full flex justify-center mt-5'>
        {slides.map((slide, slideIndex) => {
          return (
            <button key={slideIndex} onClick={() => goToSlide(slideIndex)} className={`w-3 h-3 rounded-full ml-2 ${slideIndex == currentIndex ? 'bg-slate-400' : ' bg-black'}`}></button>
          )
        })}
      </div>*/}
    </div>

  )
}

export default App
