"Use Client"
import React from 'react'
import PillNav from '@/components/PillNav'
const logo = '/logo.png'


const page = () => {
  return (
    <div className='flex justify-center'>
      <PillNav
  logo="/logo.png"
  logoAlt="Company Logo"
  items={[
    { label: 'Home', href: '/' },
    { label: 'Writings', href: '/blogs' },
    { label: 'Me', href: '/about' },
    { label: 'Products', href: '/product' }
  ]}
  activeHref="/"
  className="custom-nav"
  ease="power2.easeOut"
  baseColor="#000000"
  pillColor="#ffffff"
  hoveredPillTextColor="#ffffff"
  pillTextColor="#000000"
/>
    </div>
  )
}

export default page