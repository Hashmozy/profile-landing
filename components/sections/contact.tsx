"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  const formFields = [
    { name: "name", label: "Name", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "subject", label: "Subject", type: "text" },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Have a project in mind or want to chat? Feel free to reach out using the form below or through my contact
          information.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Here are the ways you can reach me directly.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { icon: Mail, label: "Email", value: "your.email@example.com" },
                  { icon: Phone, label: "Phone", value: "+1 (123) 456-7890" },
                  { icon: MapPin, label: "Location", value: "City, Country" },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="bg-primary/10 p-3 rounded-full">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </motion.div>
                ))}

                <motion.div
                  className="pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h4 className="text-sm font-medium mb-3">Connect with me</h4>
                  <div className="flex gap-3">
                    {/* Social media icons would go here */}
                    {[1, 2, 3].map((_, index) => (
                      <motion.div
                        key={index}
                        className="h-10 w-10 rounded-full bg-muted flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <span className="sr-only">Social Media {index + 1}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  {formFields.map((field, index) => (
                    <motion.div
                      key={field.name}
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <label htmlFor={field.name} className="text-sm font-medium">
                        {field.label}
                      </label>
                      <Input id={field.name} type={field.type} placeholder={`Your ${field.label.toLowerCase()}`} />
                    </motion.div>
                  ))}

                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Write your message here..." rows={5} />
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button type="submit" className="w-full gap-2">
                      Send Message <Send className="h-4 w-4" />
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

