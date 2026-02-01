export default function Projects() {
  const projects = [
    {
      title: 'Intelligent Search Orchestration Engine',
      description: 'Built a scalable React and TypeScript-based orchestration engine using Java Spring Boot for real-time job updates.',
      tech: ['React', 'TypeScript', 'Java Spring Boot', 'Docker', 'PostgreSQL'],
      highlights: [
        'Implemented keyword-based filtering algorithm improving search response by 10%',
        'Docker containers and Docker Compose for job log storage and failover scripts',
        'Ensured high availability with Cron-based backup automation',
        'Processed 1000+ concurrent jobs with optimized backend architecture'
      ]
    },
    {
      title: 'Hospital Path Labeling',
      description: 'Optimized navigation for 300+ hospital rooms using custom graph labeling and connectivity algorithms.',
      tech: ['Graph Algorithms', 'Python', 'React', 'Node.js', 'MongoDB'],
      highlights: [
        'Identified 50+ cycles and 20+ bridges reducing computation by 40%',
        'Improved pathfinding accuracy by 10x through graph-based relationship modeling',
        'Enhanced route prediction reliability with advanced algorithm optimization',
        'Created interactive visualization of hospital floor layouts'
      ]
    },
    {
      title: 'Self BI Platform',
      description: 'Enterprise-grade Business Intelligence platform replacing Power BI, Tableau, and MicroStrategy for financial institution.',
      tech: ['React', 'Node.js', 'TypeScript', 'AG Grid', 'Highcharts', 'AWS'],
      highlights: [
        'Customized AG Grid and Highcharts for 18+ dynamic financial dashboards',
        'Real-time data updates using WebSocket connections',
        'Implemented role-based access control and data row-level security',
        'Supported 100+ concurrent users with sub-second query response times'
      ]
    },
    {
      title: 'OAuth 2.0 & SSO Integration',
      description: 'Engineered enterprise-grade authentication system for AI-powered web application.',
      tech: ['OAuth 2.0', 'Node.js', 'React', 'JWT', 'PostgreSQL'],
      highlights: [
        'Implemented OAuth 2.0 flow with multiple identity providers',
        'Designed JWT-based session management with automatic refresh',
        'Integrated with corporate LDAP and Azure AD',
        'Achieved 99.9% authentication uptime with redundancy'
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
            FEATURED_PROJECTS
          </h1>
        <p className="text-foreground/80 mb-8 text-base">
          A selection of projects that showcase my expertise in full-stack development, scalability, and problem-solving.
        </p>
        <div className="space-y-8">
          {projects.map((project, idx) => (
            <div key={idx} className="pb-8 border-b border-border last:border-0">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-foreground/80 mb-4 text-md">
                {project.description}
              </p>

              <div className="mb-4">
                <div className="text-xs font-medium text-muted-foreground mb-2">Tech Stack</div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, tidx) => (
                    <span key={tidx} className="px-2 py-1 bg-primary/10 text-primary text-sm font-medium rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <ul className="space-y-2">
                {project.highlights.map((highlight, hidx) => (
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
            END_OF_SHENANIGANS
          </p>
        </footer>
      </main>
    </div>
  )
}
