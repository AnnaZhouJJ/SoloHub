import React from 'react'
import Image from 'next/image'

const avatarImages = [
  '/images/avatars/avatar-1.png',
  '/images/avatars/avatar-2.png',
  '/images/avatars/avatar-3.png',
  '/images/avatars/avatar-4.png',
  '/images/avatars/avatar-5.png',
]

export default function CTA() {
  return (
    <section className="w-full mx-auto px-6 md:px-12 pb-20 md:pb-24">
      <div className="max-w-7xl mx-auto py-12 md:py-20 text-center rounded-3xl bg-neutral-900">
        {/* User avatar stack */}
        <div className="flex justify-center overflow-visible mb-8">
          {avatarImages.map((src, index) => (
            <div
              key={index}
              className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 first:ml-0 -ml-4 relative z-0 bg-grey-700"
            >
              <Image
                src={src}
                alt=""
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="w-10 h-10 rounded-full border-2 border-neutral-900 flex-shrink-0 -ml-4 bg-white flex items-center justify-center relative z-10">
            <span className="text-xs font-regular text-neutral-900">+12k</span>
          </div>
        </div>
        
        <h2 className="max-w-4xl mx-auto text-center text-title-64 text-white mb-8">
          Join thousands of freelancers working smarter
        </h2>
        
        <button className="btn btn-secondary btn-lg">
          Try SoloHub free
        </button>
      </div>
    </section>
  )
}

