import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter, DM_Serif_Display } from 'next/font/google'
import data from './data.json'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const dmSerif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#2563eb',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: data.personal_information.full_name,
    template: `%s | ${data.personal_information.full_name}`
  },
  description: data.about,
  keywords: [
    'Fullstack Developer', 
    'JavaScript', 
    'React', 
    'Next.js', 
    'Node.js', 
    'TypeScript', 
    'Web Development',
    'Muhammad Rizwan',
    'Rizwan',
    'Frontend Developer',
    'Backend Developer'
  ],
  authors: [{ name: data.personal_information.full_name }],
  creator: data.personal_information.full_name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://imrizwan.github.io/',
    title: data.personal_information.full_name,
    description: data.about,
    siteName: data.personal_information.full_name,
    images: [
      {
        url: '/og-image.png', // I should generate this or ask user
        width: 1200,
        height: 630,
        alt: data.personal_information.full_name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: data.personal_information.full_name,
    description: data.about,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} ${dmSerif.variable} font-sans antialiased selection:bg-blue-100 selection:text-blue-900`}>
        {children}
      </body>
    </html>
  )
}
