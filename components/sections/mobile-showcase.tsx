"use client"

import { motion } from "framer-motion"
import { PhoneIcon, TabletIcon } from "lucide-react"
import Image from "next/image"

const MobileShowcase = () => {
  const mobileProjects = [
    {
      title: "Fitness Tracker App",
      description: "A React Native app for tracking workouts and nutrition.",
      image: "/placeholder.svg?height=600&width=300",
      platform: "iOS & Android",
    },
    {
      title: "Social Media Dashboard",
      description: "A cross-platform mobile dashboard for managing social media accounts.",
      image: "/placeholder.svg?height=600&width=300",
      platform: "iOS & Android",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Mobile Development</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {mobileProjects.map((project, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="bg-background rounded-3xl shadow-lg p-6 relative z-10">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex items-center gap-2 mb-4">
                  <PhoneIcon className="w-5 h-5" />
                  <TabletIcon className="w-5 h-5" />
                  <span className="text-sm">{project.platform}</span>
                </div>
                <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
              </div>
              <div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl transform rotate-3 scale-[0.98]"
                style={{ zIndex: -1 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MobileShowcase

