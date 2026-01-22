import React from 'react'

export default function CTA() {
  return (
    <section className="w-full px-6 md:px-12 py-20 md:py-32 bg-grey-800">
      <div className="max-w-4xl mx-auto text-center">
        {/* User icons placeholder */}
        <div className="flex justify-center gap-2 mb-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="w-10 h-10 rounded-full bg-grey-700 flex items-center justify-center"
            >
              <span className="text-xs text-grey-300">👤</span>
            </div>
          ))}
        </div>
        
        <h2 className="text-title-40 text-white mb-8">
          Join thousands of freelancers working smarter
        </h2>
        
        <button className="btn btn-secondary btn-lg">
          Get Started Now
        </button>
      </div>
    </section>
  )
}

