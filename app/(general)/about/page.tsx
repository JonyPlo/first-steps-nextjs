import type { Metadata } from 'next'

// Snippet para crear la estructura de metadata es "mr"
export const metadata: Metadata = {
  title: 'SEO Title',
  description: 'SEO description',
  keywords: ['About Page', 'Jonathan', 'Informacion'],
}

export default function AboutPage() {
  return <span className='text-7xl'>About Page</span>
}
