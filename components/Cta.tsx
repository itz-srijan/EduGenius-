import React from "react";
import Image from "next/image";

const Cta = () => {
  return (
    <div className='bg-[#232323] rounded-3xl p-8 h-full min-h-[500px] w-full flex flex-col items-center text-center shadow-lg relative'>
      {/* Pill */}
      <div className='bg-yellow-400 text-black font-bold px-4 py-1 rounded-full mb-4 text-base w-fit mx-auto shadow-sm tracking-wide'>
        Start learning your way.
      </div>
      {/* Heading */}
      <h1 className='text-3xl font-extrabold text-white mb-1 leading-tight'>
        Build a Personalized
        <br />
        Learning Companion
      </h1>
      {/* Subheading */}
      <p className='text-gray-200 text-base mb-6 max-w-xs mx-auto'>
        Pick a name, subject, voice, & personality — and start learning through
        voice conversations that feel natural and fun.
      </p>
      {/* CTA Image */}
      <div className='relative w-full h-40 mb-8'>
        <Image
          src='/images/cta.svg'
          alt='Learning companion illustration'
          fill
          className='object-contain'
          priority
        />
      </div>
      {/* Button */}
      <button className='bg-[#FF5C2A] hover:bg-[#ff7a4d] text-white text-lg font-bold py-3 px-6 rounded-2xl w-full flex items-center justify-center gap-2 transition-colors shadow-md'>
        <span className='text-2xl'>＋</span> Build New Companion
      </button>
    </div>
  );
};

export default Cta;
