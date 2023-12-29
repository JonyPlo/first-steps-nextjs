import type { Metadata } from 'next'

// Snippet para crear la estructura de metadata es "mr"
export const metadata: Metadata = {
  title: 'Pricing Page',
  description: 'Description of Pricing Page',
  keywords: ['Pricing Page', 'information'],
}

export default function PricingPage() {
  return (
    <>
      <span className='text-7xl'>Pricing Page</span>
    </>
  )
}
