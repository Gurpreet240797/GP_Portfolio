import { streamText } from 'ai'

// Your resume content extracted from the PDF
const resumeContext = `
GURPREET SINGH
Montreal, QC | 647-891-2427 | gurpreet24277@gmail.com

PROFESSIONAL EXPERIENCE

Full Stack Developer - Société Générale
August 2025 – Present | Montreal, QC
- Crafted intuitive BI dashboards leveraging JavaScript and Node.js for 20+ team members
- Built and maintained Self BI platform replacing Power BI, Tableau, and MicroStrategy
- Customized AG Grid and Highcharts components with TypeScript for 18+ dynamic boards
- Optimized system performance through asynchronous data loading and API query optimization

Software Engineer - Mayfair Village Inc.
February 2024 – July 2025 | Montreal, QC
- Redesigned AI-powered web app with React, TypeScript, Tailwind CSS and Figma
- Engineered OAuth 2.0 and SSO authentication for enterprise users
- Integrated Stripe for real-time payments and automated billing (100+ transactions/month)
- Improved code reliability with Jest and Playwright, reducing debugging time by 40%

Software Engineer - Vistaar Technologies
July 2019 – October 2021 | Mumbai, India
- Redesigned Java Spring Boot microservices with AWS Lambda, EC2, and S3 (99% uptime)
- Implemented JWT-based authentication and rate limiting in Java Spring Boot
- Built responsive React frontend with optimization reducing page load from 4s to 1.5s
- Migrated services from AWS to Azure and databases from Oracle to SQL Server, saving 30% costs

EDUCATION

Master of Applied Computer Science
Concordia University | Montreal, QC | January 2022 – December 2023

Bachelor of Engineering in Information Technology
University of Mumbai | Mumbai, India | July 2015 – May 2019

TECHNICAL SKILLS

Languages: Python, Java, Go, JavaScript, TypeScript, HTML5, CSS, SQL
Frontend: React.js, Tailwind CSS, Shadcn, MUI, Vite
Backend: Node.js, Express, Java Spring Boot, GraphQL, REST API
Databases: PostgreSQL, MongoDB, Oracle, Redis
DevOps & Cloud: AWS, Google Cloud, GitHub Actions, Docker, Kubernetes
Tools & Testing: Git, Jest, Playwright, Zustand, Redux, Storybook

FEATURED PROJECTS

Intelligent Search Orchestration Engine
- Built a scalable React and TypeScript-based orchestration engine using Java Spring Boot for real-time job updates
- Implemented keyword-based filtering algorithm improving search response by 10%
- Docker containers and Docker Compose for job log storage and failover scripts
- Ensured high availability with Cron-based backup automation

Hospital Path Labeling
- Optimized navigation for 300+ hospital rooms using custom graph labeling and connectivity algorithms
- Identified 50+ cycles and 20+ bridges reducing computation by 40%
- Improved pathfinding accuracy by 10x through graph-based relationship modeling
`

const linkedinContext = `
LinkedIn Profile: https://www.linkedin.com/in/gp-singh-/

Gurpreet Singh is a full-stack developer based in Montreal, QC with 5+ years of experience building scalable web applications and cloud infrastructure. Currently working at Société Générale on BI dashboard development. Specialized in React, Node.js, Java Spring Boot, AWS, Docker, and Kubernetes. Previous experience at Mayfair Village Inc. and Vistaar Technologies.
`

export async function POST(req: Request) {
  const { messages } = await req.json()

  const systemPrompt = `You are Gurpreet Singh's AI assistant. You have access to their resume and LinkedIn profile information. 
You should answer questions about their professional experience, skills, education, and projects based on the provided context.
Be helpful, professional, and accurate. If you don't know something, be honest about it.

RESUME CONTEXT:
${resumeContext}

LINKEDIN CONTEXT:
${linkedinContext}

Guidelines:
- Refer to specific experiences and achievements from the resume when relevant
- Mention their current role and responsibilities
- Highlight their technical expertise and accomplishments
- Be conversational but professional
- If asked about something not in the provided information, politely let them know
`

  const result = streamText({
    model: 'openai/gpt-4o-mini',
    system: systemPrompt,
    messages,
  })

  return result.toUIMessageStreamResponse()
}
