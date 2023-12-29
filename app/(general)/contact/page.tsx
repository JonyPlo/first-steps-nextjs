import type { Metadata } from 'next'

// Snippet para crear la estructura de metadata es "mr"
export const metadata: Metadata = {
  title: 'Contact Page',
  description: 'Page to obtain contacts',
  keywords: ['Contact Page', 'contact'],
}

export default function ContactPage() {
  return (
    <>
      <span className='text-7xl'>Contact Page</span>
    </>
  )
}
