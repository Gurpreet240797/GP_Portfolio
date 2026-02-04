import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Simple Header */}
      <header className="border-b border-border py-8 px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold">Gurpreet Singh</h1>
              <p className="text-muted-foreground text-lg mt-1">
                Full Stack Developer | Montreal, QC
              </p>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://www.linkedin.com/in/gp-singh-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md font-medium text-primary underline hover:text-primary/80 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md font-medium text-primary underline hover:text-primary/80 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="#"
                  className="text-md font-medium text-primary underline hover:text-primary/80 transition-colors"
                >
                  Resume
                </a>
              </div>
            </div>
            <Image
              src="/profile.jpg"
              alt="Gurpreet Singh"
              width={120}
              height={120}
              className="rounded-full border-2 border-primary flex-shrink-0"
              priority
            />
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <div className="flex gap-1">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-2 h-2 punch-hole" />
              ))}
            </div>
            ABOUT_ME
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-4 text-base">
            I'm a Full Stack Developer based in Montreal, QC, with 4+ years of
            experience building scalable web applications and cloud
            infrastructure. My journey in software development started with a
            passion for solving complex problems and creating elegant solutions.
          </p>
          <p className="text-foreground/80 leading-relaxed text-base">
            I specialize in modern JavaScript/TypeScript ecosystems, Java
            backends, and cloud technologies. I'm particularly interested in
            performance optimization, system design, and building products that
            users love. Currently, I'm at Société Générale building intelligent
            BI dashboards for enterprise users.
          </p>
        </section>

        {/* Quick Links */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <div className="flex gap-1">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-2 h-2 punch-hole" />
              ))}
            </div>
            EXPLORE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/education" className="group">
              <Card className="p-6 border border-border hover:border-primary hover:bg-secondary transition-all cursor-pointer">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  📚 Education
                </h3>
                <p className="text-foreground/70 text-base">
                  Learn more about my background and education
                </p>
              </Card>
            </Link>
            <Link href="/work" className="group">
              <Card className="p-6 border border-border hover:border-primary hover:bg-secondary transition-all cursor-pointer">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  💼 Work Experience
                </h3>
                <p className="text-foreground/70 text-base">
                  View my professional journey and achievements
                </p>
              </Card>
            </Link>
            <Link href="/projects" className="group">
              <Card className="p-6 border border-border hover:border-primary hover:bg-secondary transition-all cursor-pointer">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  🚀 Projects
                </h3>
                <p className="text-foreground/70 text-md">
                  See what I've built and worked on
                </p>
              </Card>
            </Link>
            <Link href="/skills" className="group">
              <Card className="p-6 border border-border hover:border-primary hover:bg-secondary transition-all cursor-pointer">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  ⚙️ Skills
                </h3>
                <p className="text-foreground/70 text-base">
                  Discover my technical expertise
                </p>
              </Card>
            </Link>
          </div>
        </section>

        {/* Get in Touch Section */}
        <section className="mb-16">
          {/* <h2 className="text-2xl font-bold mb-6">✉️ Get in Touch</h2> */}
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <div className="flex gap-1">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-2 h-2 punch-hole" />
              ))}
            </div>
            GET_IN_TOUCH
          </h2>
          <Card className="p-8 border border-primary/30 bg-secondary/50">
            <p className="text-foreground/80 mb-6 text-base">
              I'm always interested in hearing about new projects and
              opportunities. Feel free to reach out!
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="font-semibold text-primary">📧 Email:</span>
                <a
                  href="mailto:gurpreet24277@gmail.com"
                  className="text-primary hover:underline"
                >
                  gurpreet24277@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-semibold text-primary">📱 Phone:</span>
                <a
                  href="tel:+16478912427"
                  className="text-primary hover:underline"
                >
                  647-891-2427
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-semibold text-primary">🔗 LinkedIn:</span>
                <a
                  href="https://www.linkedin.com/in/gp-singh-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  linkedin.com/in/gp-singh-
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-semibold text-primary">📍 Location:</span>
                <span className="text-foreground/80">Montreal, QC, Canada</span>
              </div>
            </div>
          </Card>
        </section>

        {/* Footer */}
        <footer className="border-t-4 border-primary/30 card-edge-holes pt-8 mt-16 text-center relative z-10">
          <div className="flex justify-center gap-2 mb-3">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="w-2 h-2 punch-hole" />
            ))}
          </div>
          <p className="text-sm text-muted-foreground font-mono">
            © {new Date().getFullYear()} GURPREET_SINGH
          </p>
        </footer>
      </main>
    </div>
  );
}
