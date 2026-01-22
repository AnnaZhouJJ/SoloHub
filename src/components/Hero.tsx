import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="w-full px-6 md:px-12 py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-title-64 text-grey-800 mb-6 max-w-3xl mx-auto">
          The unified platform for solo freelancers
        </h1>
        <p className="text-body-20 text-grey-500 mb-10 max-w-xl mx-auto">
          Consolidate your projects, clients, and billing operations into one integrated, easy-to-use workspace.
        </p>
        <button className="btn btn-primary btn-lg mb-16">
          Get Started Free
        </button>
        
        {/* Dashboard Screenshot Placeholder */}
        <div className="relative max-w-7xl mx-auto">
          <div className="bg-grey-100 rounded-corner-m pt-12 px-12 pb-0 overflow-hidden">
            <Image 
            src="/images/Hero image.png" 
            alt="Dashboard" 
            width={1104} 
            height={785}
            className="w-full h-auto"/>
          </div>

          <div className='flex flex-col gap-6 pt-12'>
            <p className='text-s-regular text-grey-700'>Join 10,000+ freelancers using SoloHub to streamline their operations.</p>
            <div className='text-body-18 text-neutral-900 flex flow-row flex-wrap justify-center gap-6'>
              <p className='border border-neutral-300 rounded-lg px-4 py-2'>Designers</p>
              <p className='border border-neutral-300 rounded-lg px-4 py-2'>Developers</p>
              <p className='border border-neutral-300 rounded-lg px-4 py-2'>Product Managers</p>
              <p className='border border-neutral-300 rounded-lg px-4 py-2'>Marketing Specialists</p>
              <p className='border border-neutral-300 rounded-lg px-4 py-2'>Data Analysts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

