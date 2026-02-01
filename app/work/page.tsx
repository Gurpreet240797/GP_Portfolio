import Image from 'next/image'

export default function Work() {
  const experiences = [
    {
      company: 'Société Générale',
      role: 'Full Stack Developer',
      period: 'August 2025 – Present',
      location: 'Montreal, QC',
      logo: '/logos/societe-generale-logo.jpg',
      highlights: [
        'Crafted intuitive BI dashboards leveraging JavaScript and Node.js for 20+ team members',
        'Built and maintained Self BI platform replacing Power BI, Tableau, and MicroStrategy',
        'Customized AG Grid and Highcharts components with TypeScript for 18+ dynamic boards',
        'Optimized system performance through asynchronous data loading and API query optimization'
      ]
    },
    {
      company: 'Mayfair Village Inc.',
      role: 'Software Engineer',
      period: 'February 2024 – July 2025',
      location: 'Montreal, QC',
      logo: '/logos/mayfair-logo.jpg',
      highlights: [
        'Redesigned AI-powered web app with React, TypeScript, Tailwind CSS and Figma',
        'Engineered OAuth 2.0 and SSO authentication for enterprise users',
        'Integrated Stripe for real-time payments and automated billing (100+ transactions/month)',
        'Improved code reliability with Jest and Playwright, reducing debugging time by 40%'
      ]
    },
    {
      company: 'Vistaar Technologies',
      role: 'Software Engineer',
      period: 'July 2019 – October 2021',
      location: 'Mumbai, India',
      logo: '/logos/vistaar-logo.jpg',
      highlights: [
        'Redesigned Java Spring Boot microservices with AWS Lambda, EC2, and S3 (99% uptime)',
        'Implemented JWT-based authentication and rate limiting in Java Spring Boot',
        'Built responsive React frontend with optimization reducing page load from 4s to 1.5s',
        'Migrated services from AWS to Azure and databases from Oracle to SQL Server, saving 30% costs'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <div className="flex gap-1">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-2 h-2 punch-hole" />
              ))}
            </div>
            WORK_EXPERIENCE
          </h1>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="pb-8 border-b border-border last:border-0">
              <div className="flex items-start gap-4 mb-4">
                {/* <Image
                  src={exp.logo || "/placeholder.svg"}
                  alt={exp.company}
                  width={120}
                  height={60}
                  className="h-12 w-auto"
                /> */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-primary text-lg font-medium">{exp.company}</p>
                </div>
              </div>
              <p className="text-md text-muted-foreground mb-3">📍 {exp.location} • 📅 {exp.period}</p>
              <ul className="space-y-2">
                {exp.highlights.map((highlight, hidx) => (
                  <li key={hidx} className="text-foreground/80 text-md flex gap-3">
                    <span className="text-primary text-xl font-semibold">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="border-t-4 border-primary/30 card-edge-holes pt-8 mt-16 text-center relative z-10">
          <div className="flex justify-center gap-2 mb-3">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="w-2 h-2 punch-hole" />
            ))}
          </div>
          <p className="text-sm text-muted-foreground font-mono">
            END_OF_EMPLOYMENT_RECORDS
          </p>
        </footer>
      </main>
    </div>
  )
}
