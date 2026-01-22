import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="w-full px-6 py-4 md:px-12 md:py-6 flex items-center justify-between bg-white">
      <div className="flex items-center gap-3">
        <Image 
        src="/images/Logo V1.png" 
        alt="SoloHub" 
        width={129} 
        height={23}/>
      </div>
      
      <nav className="hidden md:flex items-center gap-8">
        <a href="#about" className="text-base text-grey-700 hover:text-grey-800 transition-colors">
          About
        </a>
        <a href="#pricing" className="text-base text-grey-700 hover:text-grey-800 transition-colors">
          Pricing
        </a>
        <a href="#blog" className="text-base text-grey-700 hover:text-grey-800 transition-colors">
          Blog
        </a>
      </nav>
      
      <div className="flex items-center gap-6">
        <a href="#login" className="text-base text-grey-700 hover:text-grey-800 transition-colors">
          Login
        </a>
        <button className="btn btn-primary btn-md">
          Join Now
        </button>
      </div>
    </header>
  )
}

