import { Card } from "@/components/ui/card"

export default function About() {

  const HolePunch = ({ holes } : { holes: number}) => {
    return (
      <div className="flex gap-1 mb-3">
        {[...Array(holes)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 punch-hole" />
        ))}
      </div>);
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Education */}
        <section className="mb-16">
          <h1 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <div className="flex gap-1">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-2 h-2 punch-hole" />
              ))}
            </div>
            EDUCATION
          </h1>
          <div className="space-y-4">
            <Card className="border border-primary/30 p-6 hover:border-primary/60 transition-colors">
              <div className="flex items-start gap-2">
                {/* <Image
                  src="/logos/concordia-logo.jpg"
                  alt="Concordia University"
                  width={100}
                  height={60}
                  className="h-12 w-auto"
                /> */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">🎓 Master of Applied Computer Science</h3>
                  <p className="text-primary font-semibold">Concordia University</p>
                </div>
              </div>
              <p className="text-muted-foreground text-md">📍 Montreal, QC • 📅 January 2022 – December 2023</p>
            </Card>
            <Card className="border border-primary/30 p-6 hover:border-primary/60 transition-colors">
              <div className="flex items-start gap-2">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">🎓 Bachelor of Engineering in Information Technology</h3>
                  <p className="text-primary font-semibold">University of Mumbai</p>
                </div>
              </div>
              <p className="text-muted-foreground text-md">📍 Mumbai, India • 📅 July 2015 – May 2019</p>
            </Card>
          </div>
        </section>

        {/* Philosophy */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <div className="flex gap-1">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-2 h-2 punch-hole" />
              ))}
            </div>
            CODE_PHILOSOPHY
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-2 border-primary/40 p-6 bg-card/80">
              <HolePunch holes={2}/>
              <h3 className="font-bold text-xl">Clean Code</h3>
              <p className="text-foreground/80 text-base">I believe in writing maintainable, readable code that scales with the product and team.</p>
            </Card>
            <Card className="border-2 border-primary/40 p-6 bg-card/80">
              <HolePunch holes={2}/>
              <h3 className="font-bold text-xl">Performance First</h3>
              <p className="text-foreground/80 text-base">Every millisecond matters. I optimize for speed and efficiency in every layer.</p>
            </Card>
            <Card className="border-2 border-primary/40 p-6 bg-card/80">
              <HolePunch holes={2}/>
              <h3 className="font-bold text-xl">User Centric Design</h3>
              <p className="text-foreground/80 text-base">Technology should serve users. I focus on building intuitive, delightful experiences.</p>
            </Card>
            <Card className="border-2 border-primary/40 p-6 bg-card/80">
              <HolePunch holes={2}/>
              <h3 className="font-bold text-xl">Continuous Learning</h3>
              <p className="text-foreground/80 text-base">The tech industry evolves rapidly. I stay updated with latest tools and practices.</p>
            </Card>
          </div>
        </section>

        {/* Contact Info */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <div className="flex gap-1">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-2 h-2 punch-hole" />
              ))}
            </div>
            GET_IN_TOUCH
          </h2>
          <Card className="border-2 border-primary/40 p-6 bg-card/80">
            <p className="text-foreground/80 text-lg mb-4">Feel free to reach out for opportunities or just a friendly chat!</p>
            <div className="space-y-2 font-mono text-sm">
              <p className="text-lg">📧 Email: <span className="text-primary font-bold">gurpreet24277@gmail.com</span></p>
              <p className="text-lg">📱 Phone: <span className="text-primary font-bold">647-891-2427</span></p>
              <p className="text-lg">🔗 LinkedIn: <a href="#" className="text-primary hover:underline">linkedin.com/in/gurpreet-singh</a></p>
              <p className="text-lg">💻 GitHub: <a href="#" className="text-primary hover:underline">github.com/gurpreet24277</a></p>
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
            END_OF_NERD_SECTION
          </p>
        </footer>
      </main>
    </div>
  )
}
