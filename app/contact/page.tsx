"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, Send, Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

export default function ContactPage() {
  const { toast } = useToast()
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    })

    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Get in Touch</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Let's build something great together. I'm always open to new opportunities and collaborations.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-[1fr_400px]">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formState.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                      value={formState.subject}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message..."
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & Social Links */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Connect With Me</CardTitle>
                  <CardDescription>Find me on these platforms and social networks</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <SocialLink
                    icon={<Mail className="h-5 w-5" />}
                    platform="Email"
                    handle="ebuka@example.com"
                    href="mailto:ebuka@example.com"
                  />
                  <SocialLink
                    icon={<Linkedin className="h-5 w-5" />}
                    platform="LinkedIn"
                    handle="ebukaodini"
                    href="https://linkedin.com/in/ebukaodini"
                  />
                  <SocialLink
                    icon={<Github className="h-5 w-5" />}
                    platform="GitHub"
                    handle="ebukaodini"
                    href="https://github.com/ebukaodini"
                  />
                  <SocialLink
                    icon={<Twitter className="h-5 w-5" />}
                    platform="Twitter"
                    handle="@ebukaodini"
                    href="https://twitter.com/ebukaodini"
                  />
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardHeader className="bg-primary text-primary-foreground">
                  <CardTitle>Let's Collaborate</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="mb-4 text-sm text-muted-foreground">
                    I'm available for freelance projects, speaking engagements, and technical consultations.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm">
                      <ArrowRight className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Full-stack development projects</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <ArrowRight className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Technical workshops and training</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <ArrowRight className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Conference speaking opportunities</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-between border-t bg-muted/50 px-6 py-4">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="#">
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule a Call
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>

          <div className="mt-16">
            <Card className="bg-muted/50">
              <CardContent className="flex flex-col items-center justify-between gap-4 px-6 py-8 text-center sm:flex-row sm:text-left">
                <div>
                  <h3 className="text-xl font-semibold">Looking for my resume?</h3>
                  <p className="text-muted-foreground">
                    Check out my experience and qualifications to see if we're a good fit.
                  </p>
                </div>
                <Button asChild>
                  <Link href="/about">View Resume</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

interface SocialLinkProps {
  icon: React.ReactNode
  platform: string
  handle: string
  href: string
}

function SocialLink({ icon, platform, handle, href }: SocialLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 rounded-md p-2 transition-colors hover:bg-muted"
    >
      <div className={cn("flex h-10 w-10 items-center justify-center rounded-full bg-muted")}>{icon}</div>
      <div>
        <div className="font-medium">{platform}</div>
        <div className="text-sm text-muted-foreground">{handle}</div>
      </div>
    </Link>
  )
}
