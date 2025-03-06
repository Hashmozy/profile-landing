"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export default function About() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "JavaScript",
    "HTML/CSS",
    "Git",
    "MongoDB",
    "PostgreSQL",
    "Express",
    "RESTful APIs",
    "React Native",
    "Mobile App Development",
    "UI/UX Design",
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <Image src="/placeholder.svg?height=320&width=320" alt="Profile" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-muted-foreground mb-6">
              I'm a passionate full-stack developer with expertise in both web and mobile development. With several
              years of experience, I enjoy creating clean, efficient, and user-friendly applications that solve
              real-world problems.
            </p>
            <p className="text-muted-foreground mb-8">
              My journey in tech has led me to work on a diverse range of projects, from responsive web applications to
              cross-platform mobile apps. I'm always excited to learn new technologies and apply them to create
              innovative solutions.
            </p>

            <h3 className="text-xl font-semibold mb-4">My Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Badge variant="secondary" className="text-sm py-1">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

