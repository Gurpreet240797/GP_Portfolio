export default function Skills() {
  const skillCategories = [
    {
      category: 'Languages',
      items: ['Python', 'Java', 'Go', 'JavaScript', 'TypeScript', 'HTML5', 'CSS', 'SQL'],
    },
    {
      category: 'Frontend',
      items: ['React.js', 'Tailwind CSS', 'Shadcn', 'MUI', 'Vite', 'Redux', 'Zustand', 'Storybook'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express', 'Java Spring Boot', 'GraphQL', 'REST API', 'Django', 'Flask', 'Go'],
    },
    {
      category: 'Databases',
      items: ['PostgreSQL', 'MongoDB', 'Oracle', 'Redis', 'MySQL', 'SQL Server', 'Firebase'],
    },
    {
      category: 'DevOps & Cloud',
      items: ['AWS', 'Google Cloud', 'GitHub Actions', 'Docker', 'Kubernetes', 'Azure', 'CI/CD'],
    },
    {
      category: 'Tools & Testing',
      items: ['Git', 'Jest', 'Playwright', 'Vitest', 'Figma', 'Jira', 'GitHub', 'Vercel'],
    },
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
            TECHNICAL_SKILLS
          </h1>
        <p className="text-foreground/80 mb-8 text-base">
          Throughout my career, I've cultivated expertise across the entire software development stack. I'm proficient in multiple programming languages and frameworks, with a strong foundation in modern web development, cloud architecture, and DevOps practices.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx}>
              <h2 className="text-lg font-semibold mb-4">{category.category}</h2>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, sidx) => (
                  <span key={sidx} className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded border border-primary/20">
                    {skill}
                  </span>
                ))}
              </div>
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
            END_OF_ARSENAL
          </p>
        </footer>
      </main>
      </div>
  )
}
