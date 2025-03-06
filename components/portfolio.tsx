"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { Menu, X, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Projects from "@/components/sections/projects"
import Contact from "@/components/sections/contact"
import MobileShowcase from "@/components/sections/mobile-showcase"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion, useScroll, useSpring } from "framer-motion"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  const homeRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const mobileRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    setIsMenuOpen(false)
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const navItems = [
    { name: "Home", ref: homeRef },
    { name: "About", ref: aboutRef },
    { name: "Projects", ref: projectsRef },
    { name: "Mobile", ref: mobileRef },
    { name: "Contact", ref: contactRef },
  ]

  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background text-foreground theme-transition">
        <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-50" style={{ scaleX }} />
        <header
          className={cn(
            "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
            isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent",
          )}
        >
          <motion.div
            className="container mx-auto px-4 py-4 flex items-center justify-between"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="font-bold text-xl">Portfolio</div>
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.ref)}
                  className="text-foreground/80 hover:text-foreground transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.button>
              ))}
              <ThemeToggle />
            </nav>
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </motion.div>
          {isMenuOpen && (
            <motion.div
              className="md:hidden bg-background/95 backdrop-blur-sm"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.ref)}
                    className="text-foreground/80 hover:text-foreground transition-colors py-2 border-b border-border/50"
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </nav>
            </motion.div>
          )}
        </header>
        <main>
          <motion.div
            ref={homeRef}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
          </motion.div>
          <motion.div
            ref={aboutRef}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <About />
          </motion.div>
          <motion.div
            ref={projectsRef}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Projects />
          </motion.div>
          <motion.div
            ref={mobileRef}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <MobileShowcase />
          </motion.div>
          <motion.div
            ref={contactRef}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Contact />
          </motion.div>
        </main>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Footer />
        </motion.div>
        <motion.div
          className={cn(
            "fixed bottom-6 right-6 z-40",
            showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none",
          )}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showScrollTop ? 1 : 0, y: showScrollTop ? 0 : 20 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            variant="secondary"
            size="icon"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="rounded-full shadow-lg"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </ThemeProvider>
  )
}

