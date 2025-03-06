"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "Project One",
      description: "A full-stack web application with authentication, database integration, and real-time updates.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Project Two",
      description: "An e-commerce platform with payment processing, product management, and user profiles.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "Tailwind CSS", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Project Three",
      description: "A responsive dashboard with data visualization, filtering, and export capabilities.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["TypeScript", "Chart.js", "Firebase"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section className="py-20">
      <div className="container px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Here are some of my recent projects. Each one was built to solve a specific problem or explore new
          technologies.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="overflow-hidden flex flex-col h-full">
                  <motion.div
                    className="relative h-48 w-full"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-sm">{project.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="outline" size="sm" className="gap-1" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" /> Code
                        </a>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size="sm" className="gap-1" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" /> Live Demo
                        </a>
                      </Button>
                    </motion.div>
                  </CardFooter>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

