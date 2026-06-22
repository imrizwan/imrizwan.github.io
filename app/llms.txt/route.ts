import data from '../data.json'

const SITE_URL = 'https://imrizwan.vercel.app'

// Serves /llms.txt — a concise, plain-text profile following the emerging
// llms.txt convention so AI/LLM search tools can ingest an accurate,
// structured summary without parsing the full HTML/JS app.
export const dynamic = 'force-static'

export function GET() {
  const p = data.personal_information
  const skills = Object.entries(data.skills)
    .map(([cat, items]) => `- ${cat.replace(/_/g, ' ')}: ${items.join(', ')}`)
    .join('\n')

  const experience = data.work_experience
    .map(
      (w) =>
        `- ${w.role}, ${w.company} (${w.location.city}, ${w.location.country}) — ${w.start_date} to ${w.end_date}`
    )
    .join('\n')

  const projects = data.projects
    .map((pr) => `- ${pr.title}${pr.period ? ` (${pr.period})` : ''}: ${pr.description.split('\n')[0]}`)
    .join('\n')

  const certs = data.certifications_and_awards
    .map((c: any) => `- ${c.title} (${c.year})${c.provider ? ` — ${c.provider}` : ''}`)
    .join('\n')

  const body = `# ${p.full_name}

> ${p.title} with ${p.experience_years} years of experience, based in ${p.location.city}, ${p.location.country}.

${data.about}

## Profiles
- Website: ${SITE_URL}
- LinkedIn: ${p.profiles.linkedin}
- GitHub: ${p.profiles.github}

## Skills
${skills}

## Experience
${experience}

## Education
- ${data.education.degree}, ${data.education.institution} (${data.education.start_year}–${data.education.end_year})

## Selected Projects
${projects}

## Certifications & Awards
${certs}

## Languages
${data.languages.map((l) => `- ${l.language}${l.level ? ` (${l.level})` : ' (Professional proficiency)'}`).join('\n')}
`

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}
