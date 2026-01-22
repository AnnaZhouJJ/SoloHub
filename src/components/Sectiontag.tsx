import React from 'react'
import Image from 'next/image'

interface SectiontagProps {
  text: string
  className?: string
}

export default function Sectiontag({ text, className = '' }: SectiontagProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image 
        src="/images/Logo - Black.png" 
        alt="SoloHub" 
        width={35} 
        height={35}
      />
      <span className="text-body-16 text-neutral-900 bg-grey-100 rounded-md px-2 py-1">{text}</span>
    </div>
  )
}