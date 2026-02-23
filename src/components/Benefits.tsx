import React from 'react'
import Sectiontag from './Sectiontag'
import Image from 'next/image'

export default function Benefits() {
  const benefits = [
    {
      icon: '/images/Clock.png',
      title: 'Eliminate 30-40% of administrative overhead',
      description: 'No more switching between spreadsheets, invoicing tools, and project trackers. Handle all admin tasks from one unified workspace and get back to billable work.',
    },
    {
      icon: '/images/File text.png',
      title: 'Create proposals and invoices in seconds',
      description: 'Generate professional documents instantly with templates and automation. Spend minutes on admin tasks that used to take hours.',
    },
    {
      icon: '/images/Dollar sign.png',
      title: 'Know exactly where your money comes from',
      description: 'Track time automatically, see profit per project, and identify your most valuable work. Make informed decisions about pricing and client focus.',
    },
  ]

  return (
    <section className="w-full px-6 md:px-12 py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4">
          <Sectiontag 
            text="Work Smart"
            className="justify-center"
          />
          <h2 className="text-title-40 text-grey-800 text-center max-w-lg mx-auto">
            Built for freelancer success
          </h2>
          <p className="text-body-20 text-grey-500 text-center mb-16 max-w-2xl mx-auto">
            Less admin work, more revenue-generating time
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className=" bg-grey-100 rounded-corner-m px-8 py-10">
              <div className="mb-6">
                <Image 
                src={benefit.icon} 
                alt={`${benefit.title} icon`}
                width={40} 
                height={40} 
                className="w-8 h-8"
                />
              </div>
              <h3 className="text-body-32 font-bold text-grey-800 mb-3">{benefit.title}</h3>
              <p className="text-base text-grey-500">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

