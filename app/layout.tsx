import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter, DM_Serif_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
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

const SITE_URL = 'https://imrizwan.vercel.app'

const { personal_information: person, skills, education, work_experience } = data
const fullName = person.full_name
const headline = `${fullName} — ${person.title}`
const richDescription =
  `${fullName} is a ${person.title} with ${person.experience_years} years of experience, ` +
  `based in ${person.location.city}, ${person.location.country}. ` +
  data.about

// Flattened skill list — used for keywords and the JSON-LD `knowsAbout` field
// so search engines and AI/LLM crawlers can match expertise to queries.
const allSkills = Array.from(new Set(Object.values(skills).flat()))
const currentRole = work_experience.find((w) => w.end_date === 'Present')

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
}

// Schema.org structured data. Rich, machine-readable context is the single
// biggest lever for both rich results and AI/LLM-powered search (ChatGPT
// Search, Perplexity, Gemini, Google AI Overviews) understanding the profile.
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: fullName,
      url: SITE_URL,
      image: `${SITE_URL}/og-image.png`,
      jobTitle: person.title,
      description: richDescription,
      address: {
        '@type': 'PostalAddress',
        addressLocality: person.location.city,
        addressCountry: person.location.country,
      },
      sameAs: [person.profiles.linkedin, person.profiles.github, person.profiles.portfolio],
      knowsAbout: allSkills,
      knowsLanguage: data.languages.map((l) => l.language),
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: education.institution,
        url: education.website,
      },
      ...(currentRole && {
        worksFor: { '@type': 'Organization', name: currentRole.company },
      }),
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: headline,
      description: richDescription,
      inLanguage: 'en',
      publisher: { '@id': `${SITE_URL}/#person` },
    },
    {
      '@type': 'ProfilePage',
      '@id': `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: headline,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#person` },
      inLanguage: 'en',
    },
  ],
}

// Set the theme before first paint to avoid a light/dark flash (FOUC).
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.dataset.theme = theme;
  } catch (e) {}
})();
`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: headline,
    template: `%s | ${fullName}`,
  },
  description: richDescription,
  applicationName: `${fullName} — Portfolio`,
  category: 'technology',
  keywords: [
    fullName,
    'Rizwan',
    'Fullstack Developer',
    'Fullstack JavaScript Developer',
    'Frontend Developer',
    'Backend Developer',
    'Software Engineer',
    `Developer in ${person.location.city}`,
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'AI Agents',
    'Agentic AI',
    'Multi-Agent Systems',
    'OpenAI Agents SDK',
    'LangGraph',
    'CrewAI',
    'Model Context Protocol',
  ],
  authors: [{ name: fullName, url: SITE_URL }],
  creator: fullName,
  publisher: fullName,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: SITE_URL,
    title: headline,
    description: richDescription,
    siteName: fullName,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: headline,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: headline,
    description: richDescription,
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
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.variable} ${dmSerif.variable} font-sans antialiased selection:bg-blue-100 selection:text-blue-900`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
