import React from 'react'
import Sectiontag from './Sectiontag'
import Image from 'next/image'

export default function Features() {
  return (
    <section className="w-full px-6 md:px-12 py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4">
          <Sectiontag 
            text="MeetSoloHub"
            className="justify-center"
          />
          <h2 className="text-title-40 text-grey-800 text-center mb-8 max-w-lg mx-auto">
            Everything you need to run your freelance business
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='flex flex-col gap-4 bg-grey-100 rounded-2xl px-6 pt-12 pb-6'>
            <p className='text-body-32 text-neutral-900'>Track every project from start to finish</p>
            <p className='text-body-18 text-grey-500'>Organize all projects in one view. Track progress and never miss deadlines.</p>
            <Image 
              src="/images/Card 1.png" 
              alt="Feature 1" 
              width={700} 
              height={544}
              quality={100}
              className="w-full h-auto" 
            />
          </div>
          <div className='flex flex-col gap-4 bg-grey-100 rounded-2xl px-6 pt-12 pb-6'>
            <p className='text-body-32 text-neutral-900'>Professional invoicing and profit tracking</p>
            <p className='text-body-18 text-grey-500'>Generate invoices instantly. See your profit and payment status in real-time.</p>
            <Image 
              src="/images/Card 2.png" 
              alt="Feature 2" 
              width={700} 
              height={544}
              quality={100}
              className="w-full h-auto" 
            />
          </div>
          <div className='flex flex-col gap-4 bg-grey-100 rounded-2xl px-6 pt-12 pb-6'>
            <p className='text-body-32 text-neutral-900'>Capture every billable minute effortlessly</p>
            <p className='text-body-18 text-grey-500'>Start timers with one click. Assign time to projects and bill accurately.</p>
            <Image 
              src="/images/Card 3.png" 
              alt="Feature 3" 
              width={700} 
              height={544}
              quality={100}
              className="w-full h-auto" 
            />
          </div>
        </div>

        <div className='flex flex-col md:flex-row gap-4 md:gap-12 bg-grey-100 rounded-2xl pl-6 md:pl-6 md:pr-0 pt-12 mt-6'>
          <div className='flex flex-col gap-4 md:max-w-sm'>
            <p className='text-body-32 text-neutral-900'>See your entire business at a glance</p>
            <p className='text-body-18 text-grey-500'>Get real-time insights into project status, time tracking, tasks, and profit. Everything you need on one screen.</p>
          </div>
          <div className='w-full md:w-auto'>
            <Image 
              src="/images/1. Dashboard - color 2.png" 
              alt="Feature 4" 
              width={1048} 
              height={744}
              quality={100}
              className="w-full h-auto object-fill" 
            />
          </div>
        </div>

      </div>
    </section>
  )
}

