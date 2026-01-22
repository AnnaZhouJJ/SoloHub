import React from 'react'

export default function Benefits() {
  const benefits = [
    {
      icon: '⏰',
      title: 'Eliminate 30-40% of administrative overhead',
      description: 'Automate repetitive tasks and focus on what you do best - your creative work.',
    },
    {
      icon: '📝',
      title: 'Create proposals and invoices in seconds',
      description: 'Professional templates that you can customize and send to clients instantly.',
    },
    {
      icon: '💰',
      title: 'Know exactly where your money comes from',
      description: 'Track income by project, client, and service type to optimize your business.',
    },
  ]

  return (
    <section className="w-full px-6 md:px-12 py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-title-40 text-grey-800 text-center mb-4">
          Built for freelancer success
        </h2>
        <p className="text-body-20 text-grey-500 text-center mb-16 max-w-2xl mx-auto">
          SoloHub helps you work smarter, not harder, to grow your business.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl mb-6">{benefit.icon}</div>
              <h3 className="text-body-20 font-bold text-grey-800 mb-3">{benefit.title}</h3>
              <p className="text-base text-grey-500">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

