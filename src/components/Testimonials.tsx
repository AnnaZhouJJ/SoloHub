import React from 'react'
import Image from 'next/image'

interface Testimonial {
  name: string
  role: string
  quote: string
  image: string
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    { name: 'Sarah Lee', role: 'Web Developer', quote: 'I used to juggle multiple tools for version control and deployment. SoloHub centralized everything, enabling me to streamline my workflow, which has improved my development speed by 30%.', image: '/images/profiles/sarah-lee.png' },
    { name: 'Michael Chen', role: 'Content Specialist', quote: 'I used to juggle multiple content calendars and tools, which led to missed deadlines. SoloHub has unified my processes, helping me meet 100% of my deadlines this quarter.', image: '/images/profiles/michael-chen.png' },
    { name: 'Emily Rodriguez', role: 'Software Engineer', quote: 'SoloHub transformed my workflow. I used to waste time searching for files across multiple platforms. Now, I spend my time coding instead of hunting for documents, boosting my productivity significantly.', image: '/images/profiles/emily-rodriguez.png' },
    { name: 'David Kim', role: 'Product Manager', quote: 'Prior to using SoloHub, my team struggled with fragmented communication across various platforms. With SoloHub, collaboration is seamless and decisions are made faster, saving us critical time on project deadlines.', image: '/images/profiles/david-kim.png' },
    { name: 'Jessica Taylor', role: 'Product Manager', quote: 'Managing code and client feedback was chaotic. SoloHub has streamlined my workflow and improved collaboration. I have reduced my revisions by 30%, allowing me to focus more on coding.', image: '/images/profiles/jessica-taylor.png' },
    { name: 'Robert Brown', role: 'Web Developer', quote: "I was constantly juggling multiple tools for content planning and editing. Now, with everything streamlined, I've enhanced my creative output and reduced project bottlenecks.", image: '/images/profiles/robert-brown.png' },
    { name: 'Amanda Wilson', role: 'UX Designer', quote: "Before SoloHub, I was drowning in spreadsheets and switching between 6 different apps just to track one project. Now everything lives in one place. I've reclaimed about 10 hours per week that I can actually spend designing instead of doing admin work.", image: '/images/profiles/amanda-wilson.png' },
    { name: 'James Martinez', role: 'Product Manager', quote: "Prior to using SoloHub, I struggled with miscommunication across teams. With SoloHub, everyone is aligned, and I've seen a 20% increase in project delivery speed. It's a game changer.", image: '/images/profiles/james-martinez.png' },
    { name: 'Lisa Anderson', role: 'Brand Strategist', quote: "I was struggling with fragmented communication and missed deadlines. Now, with everything centralized, my project timelines are clearer and we've improved our delivery rate by 30%.", image: '/images/profiles/lisa-anderson.png' },
    { name: 'Emily Chen', role: 'Data Analyst', quote: 'Before discovering SoloHub, I was overwhelmed with manual data entry and analysis. Now, automated reports help me focus on insights rather than data collection, enhancing my productivity significantly.', image: '/images/profiles/emily-chen.png' },
    { name: 'Derek Lee', role: 'Graphic Designer', quote: 'Before SoloHub, I often lost track of client revisions and project updates. Now, my productivity boosted up by at least 25%.', image: '/images/profiles/derek-lee.png' },
    { name: 'Michael Johnson', role: 'Marketing Specialist', quote: 'Managing campaigns used to be chaotic. With SoloHub, I can collaborate in real-time with my team, track progress effortlessly, and have increased our campaign efficiency by 25%.', image: '/images/profiles/michael-johnson.png' },
  ]

  return (
    <section className="w-full px-6 md:px-12 py-20 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="justify-center flex flex-col items-center">
          <h2 className="text-title-40 text-grey-800 text-center mb-4 max-w-md mx-auto">
            See why our users love using SoloHub
          </h2>
          <button className="btn btn-primary btn-md mb-16">
            Get Started Free
          </button>
        </div>
        
        <div className="relative">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="break-inside-avoid mb-6 border border-neutral-300 rounded-corner-m p-6 bg-white"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full flex-shrink-0 overflow-hidden bg-grey-300 relative">
                    <Image 
                      src={testimonial.image}
                      alt={`${testimonial.name} profile`}
                      width={54}
                      height={54}
                      quality={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-body-20 font-bold text-neutral-900">{testimonial.name}</p>
                    <p className="text-body-16 text-grey-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-body-18 text-grey-700 leading-relaxed">{testimonial.quote}</p>
              </div>
            ))}
          </div>
          {/* Gradient fade-out overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  )
}

