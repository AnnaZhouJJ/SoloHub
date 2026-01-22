import React from 'react'

export default function Footer() {
  const footerLinks = {
    Product: ['Features', 'Pricing', 'Integrations', 'Business'],
    Resources: ['Blog', 'Guides', 'Help Center', 'FAQs'],
    Company: ['About', 'Contact', 'Privacy Policy', 'Terms'],
  }

  return (
    <footer className="w-full px-6 md:px-12 py-12 md:py-16 bg-white border-t border-grey-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-lg"></div>
              <span className="text-body-20 font-bold text-green-500">SoloHub</span>
            </div>
            <p className="text-xs text-grey-500">
              © 2023 SoloHub. All rights reserved.
            </p>
          </div>
          
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-base font-bold text-grey-800 mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-base text-grey-500 hover:text-grey-800 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="flex justify-end gap-4 pt-8 border-t border-grey-300">
          {['Twitter', 'LinkedIn', 'Instagram', 'Facebook'].map((social) => (
            <a
              key={social}
              href={`#${social.toLowerCase()}`}
              className="w-8 h-8 flex items-center justify-center text-grey-500 hover:text-grey-800 transition-colors"
              aria-label={social}
            >
              <span className="text-base">🔗</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

