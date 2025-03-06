import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/50 pt-16">
      <div className="container px-4 py-16 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Hi, I'm <span className="text-primary">Your Name</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-foreground/80 mb-8">Full Stack Developer</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mb-10">
          I build exceptional and accessible digital experiences for the web. Focused on creating intuitive and
          performant applications.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="gap-2">
            View My Work <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  )
}

