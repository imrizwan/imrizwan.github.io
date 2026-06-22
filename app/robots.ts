import { MetadataRoute } from 'next'

const SITE_URL = 'https://imrizwan.vercel.app'

// Explicitly welcome AI/LLM search crawlers (in addition to traditional ones)
// so the profile is discoverable in ChatGPT Search, Perplexity, Gemini,
// Claude, and Google AI Overviews.
const aiAndSearchBots = [
  'GPTBot', // OpenAI training
  'OAI-SearchBot', // ChatGPT Search
  'ChatGPT-User', // ChatGPT browsing
  'ClaudeBot', // Anthropic
  'Claude-Web',
  'anthropic-ai',
  'PerplexityBot', // Perplexity
  'Perplexity-User',
  'Google-Extended', // Gemini / Google AI
  'Googlebot',
  'Applebot-Extended', // Apple Intelligence
  'Bingbot',
  'DuckDuckBot',
  'Amazonbot',
  'cohere-ai',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      {
        userAgent: aiAndSearchBots,
        allow: '/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
